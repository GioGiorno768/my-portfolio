import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface MarqueeItem {
  image: string;
  title: string;
}

interface MarqueeElementProps {
  element: MarqueeItem[];
  from: number | string;
  to: number | string;
  className?: string;
  duration?: number;
}

const MotionMarquee: FC<{
  element: MarqueeItem[];
  from: number | string;
  to: number | string;
  duration: number;
  className?: string;
}> = ({ element, from, to, duration, className }) => (
  <motion.div
    initial={{ x: from }}
    animate={{ x: to }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
    className="flex items-center flex-shrink-0"
  >
    {element.map((val, index) => (
      <div
        key={index}
        className={`px-[3em] py-[2em] mr-[2vw] flex justify-center items-center ${className ?? ""}`}
      >
        <div className="w-[30em] h-[25em]">
          <div className="relative w-full h-full">
            <Image
              src={val.image}
              alt={val.title}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    ))}
  </motion.div>
);

const MarqueeElement: FC<MarqueeElementProps> = ({
  element,
  from,
  to,
  className = "",
  duration = 30,
}) => {
  return (
    <div className="flex">
      <MotionMarquee
        element={element}
        from={from}
        to={to}
        duration={duration}
        className={className}
      />
      <MotionMarquee
        element={element}
        from={from}
        to={to}
        duration={duration}
        className={className}
      />
    </div>
  );
};

export default MarqueeElement;
