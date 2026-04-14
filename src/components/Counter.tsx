import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
