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
    <span ref={ref} className="inline-flex items-baseline gap-2">
      <span className="font-number text-5xl sm:text-6xl tracking-tight">
        {count}
      </span>
      {suffix ? (
        <span className="text-3xl font-sans font-semibold leading-none">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
