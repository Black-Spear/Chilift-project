import { Variants } from "framer-motion";

export const animationStart = 5;

export const reveal: Variants = {
  hiddenVariant: { y: 50, opacity: 0 },
  revealedVariant: {
    y: 0,
    opacity: 1,
  },
};
