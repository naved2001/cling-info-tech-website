import { useEffect, useRef, useState } from "react";

function Counter({
  value,
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const elementRef = useRef(null);

  const numericValue = parseInt(
    String(value).replace(/\D/g, ""),
    10
  );

  const suffix = String(value).replace(
    /[0-9]/g,
    ""
  );

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(
          easedProgress * numericValue
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, numericValue, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;