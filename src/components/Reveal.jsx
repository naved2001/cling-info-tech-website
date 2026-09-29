import { useEffect, useRef } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${className}`}
      style={{
        "--reveal-delay": `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;