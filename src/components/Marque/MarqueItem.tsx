import { motion } from "framer-motion";
import { FC } from "react";

interface MarqueeItemProps {
  text: string[];
  from: number | string;
  to: number | string;
  className?: string;
  duration?: number;
}

const MotionMarquee: FC<{
  text: string[];
  from: number | string;
  to: number | string;
  duration: number;
  className?: string;
}> = ({ text, from, to, duration, className }) => (
  <motion.div
    initial={{ x: from }}
    animate={{ x: to }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
    className="flex flex-shrink-0"
  >
    {text.map((val, index) => (
      <p key={index} className={`pr-[2vw] ${className ?? ""}`}>
        {val}
      </p>
    ))}
  </motion.div>
);

const MarqueeItem: FC<MarqueeItemProps> = ({
  text,
  from,
  to,
  className = "",
  duration = 30,
}) => {
  return (
    <div className="flex">
      <MotionMarquee
        text={text}
        from={from}
        to={to}
        duration={duration}
        className={className}
      />
      <MotionMarquee
        text={text}
        from={from}
        to={to}
        duration={duration}
        className={className}
      />
    </div>
  );
};

export default MarqueeItem;
