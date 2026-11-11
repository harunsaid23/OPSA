import fs from "node:fs";
import { crc32 } from "node:zlib";

const prompt = fs
  .readFileSync("docs/life-beyond-pain-prompt.txt", "utf8")
  .trim();
const source = "src/assets/life-beyond-pain.png";
const png = fs.readFileSync(source);
const keyword = "OPSA illustration provenance";
const provenance = `Generated with OpenAI image_gen. Illustrative artwork, not real patients. Prompt: ${prompt}`;
const data = Buffer.from(`${keyword}\0\0\0\0\0${provenance}`, "utf8");
const type = Buffer.from("iTXt");
const chunk = Buffer.alloc(data.length + 12);
chunk.writeUInt32BE(data.length, 0);
type.copy(chunk, 4);
data.copy(chunk, 8);
chunk.writeUInt32BE(crc32(Buffer.concat([type, data])), chunk.length - 4);
const pngParts = [png.subarray(0, 8)];
for (let offset = 8; offset < png.length;) {
  const length = png.readUInt32BE(offset);
  const kind = png.toString("ascii", offset + 4, offset + 8);
  if (kind === "IEND") pngParts.push(chunk);
  if (!(
    kind === "iTXt" &&
    png.toString("utf8", offset + 8, offset + 8 + keyword.length) === keyword
  ))
    pngParts.push(png.subarray(offset, offset + length + 12));
  offset += length + 12;
}
fs.writeFileSync(source, Buffer.concat(pngParts));
const escapeXml = (text) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const xmp = Buffer.from(
  `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:description><rdf:Alt><rdf:li xml:lang="x-default">${escapeXml(provenance)}</rdf:li></rdf:Alt></dc:description></rdf:Description></rdf:RDF></x:xmpmeta>`,
);
const riffChunk = (kind, bytes) => {
  const value = Buffer.alloc(8 + bytes.length + (bytes.length % 2));
  value.write(kind, 0, "ascii");
  value.writeUInt32LE(bytes.length, 4);
  bytes.copy(value, 8);
  return value;
};
const directory = "dist/_astro";
if (fs.existsSync(directory))
  for (const name of fs
    .readdirSync(directory)
    .filter(
      (name) => name.startsWith("life-beyond-pain.") && name.endsWith(".webp"),
    )) {
    const path = `${directory}/${name}`;
    const file = fs.readFileSync(path);
    const chunks = [];
    let extended = false;
    for (let offset = 12; offset < file.length;) {
      const size = file.readUInt32LE(offset + 4);
      const kind = file.toString("ascii", offset, offset + 4);
      const item = Buffer.from(
        file.subarray(offset, offset + 8 + size + (size % 2)),
      );
      if (kind === "VP8X") {
        item[8] |= 4;
        extended = true;
      }
      if (kind !== "XMP ") chunks.push(item);
      offset += 8 + size + (size % 2);
    }
    if (!extended) {
      const header = Buffer.alloc(10);
      header[0] = 4;
      header.writeUIntLE(2171, 4, 3);
      header.writeUIntLE(723, 7, 3);
      chunks.unshift(riffChunk("VP8X", header));
    }
    chunks.push(riffChunk("XMP ", xmp));
    const body = Buffer.concat([Buffer.from("WEBP"), ...chunks]);
    const header = Buffer.alloc(8);
    header.write("RIFF");
    header.writeUInt32LE(body.length, 4);
    fs.writeFileSync(path, Buffer.concat([header, body]));
  }
console.log("Embedded illustration provenance without changing image pixels.");
