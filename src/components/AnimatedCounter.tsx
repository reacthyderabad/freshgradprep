
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
};

const AnimatedCounter = ({
  value,
  duration = 1500,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const counterRef = useRef<HTMLSpanElement | null>(null);

  // Extract number and suffix
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);

        let startTime: number;

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min(
            (timestamp - startTime) / duration,
            1
          );

          setCount(Math.floor(progress * numericValue));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(numericValue);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;