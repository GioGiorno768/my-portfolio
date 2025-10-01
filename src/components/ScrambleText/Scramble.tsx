"use client";

import { useEffect, useRef, useState } from "react";

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private queue: QueueItem[];
  private frame: number;
  private frameRequest?: number;
  private resolve?: () => void;
  private speed: number;

  constructor(el: HTMLElement, speed: number = 1) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.queue = [];
    this.frame = 0;
    this.speed = speed;
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * (40 / this.speed));
      const end = start + Math.floor(Math.random() * (40 / this.speed));
      this.queue.push({ from, to, start, end });
    }

    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
    }
    this.frame = 0;
    this.update();
    return promise;
  }

  private update(): void {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="text-gray-400">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  destroy(): void {
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
    }
  }
}

interface ScrambleTextProps {
  phrases?: string[];
  className?: string;
  delay?: number;
  speed?: number;
  iterations?: number;
  ref?: React.Ref<HTMLDivElement>;
  className2?: string;
}

export default function ScrambleText({
  phrases = [
    "Neo,",
    "sooner or later",
    "you're going to realize",
    "just as I did",
    "that there's a difference",
    "between knowing the path",
    "and walking the path",
  ],
  className = "",
  className2 = "",
  ref,
  delay = 800,
  speed = 1,
  iterations,
}: ScrambleTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<TextScramble | null>(null);
  const counterRef = useRef(0);
  const iterationCountRef = useRef(0);
  const [isClient, setIsClient] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !textRef.current || isComplete) return;

    scrambleRef.current = new TextScramble(textRef.current, speed);

    const next = () => {
      if (!scrambleRef.current) return;

      // Cek apakah sudah mencapai batas iterasi
      if (iterations !== undefined && iterationCountRef.current >= iterations) {
        setIsComplete(true);
        return;
      }

      scrambleRef.current.setText(phrases[counterRef.current]).then(() => {
        setTimeout(next, delay);
      });

      counterRef.current = (counterRef.current + 1) % phrases.length;

      // Increment iterasi hanya ketika cycle phrases selesai
      if (counterRef.current === 0) {
        iterationCountRef.current++;
      }
    };

    next();

    return () => {
      scrambleRef.current?.destroy();
    };
  }, [isClient, phrases, delay, speed, iterations, isComplete]);

  if (!isClient) {
    return (
      <div ref={ref} className={` ${className}`}>
        <div className={` ${className2}`}>Loading...</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={` ${className}`}>
      <div ref={textRef} className={` ${className2}`} />
    </div>
  );
}
