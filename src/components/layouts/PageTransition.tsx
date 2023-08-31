import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ChildrenProps } from "./types";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.3,
    },
  },
};

const PageTransition = ({ children }: ChildrenProps) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
