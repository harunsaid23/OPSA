export function illustrationMotion(element: HTMLElement) {
  const style = getComputedStyle(element);
  const value = (name: string) => style.getPropertyValue(name).trim();
  const time = (name: string) => {
    const raw = value(name);
    return parseFloat(raw) * (raw.endsWith("ms") ? 1 : 1000);
  };
  return {
    duration: time("--illustration-duration"),
    stagger: time("--illustration-stagger"),
    ease: value("--illustration-ease"),
    assembleEase: value("--illustration-assemble-ease"),
    traceDuration: time("--illustration-trace-duration"),
    traceDelay: time("--illustration-trace-delay"),
    traceEase: value("--illustration-trace-ease"),
  };
}

export function enterIllustration(
  element: HTMLElement,
  animate: () => Animation[],
) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let animations: Animation[] = [];
  const play = () => {
    animations.forEach((animation) => animation.cancel());
    animations = reduced.matches ? [] : animate();
  };
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        play();
        observer.disconnect();
      }
    },
    { threshold: 0.3 },
  );
  observer.observe(element);
  reduced.addEventListener("change", () => {
    if (reduced.matches) animations.forEach((animation) => animation.cancel());
  });
  return play;
}
