"use client"
import { Variants, isBrowser, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
      return scrollYProgress.on('change', (latestValue) => {
          if (latestValue > 0.1) {
              controls.start('show');
          } else {
              controls.start('hide');
          }
      });
  });

  function scrollToTop() {
    if (!isBrowser) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
      <motion.button
          className="fixed bottom-4 right-4 px-5 py-[14px] bg-primary text-white rounded-full"
          variants={ScrollToTopContainerVariants}
          initial="hide"
          animate={controls}
          onClick={scrollToTop}>
          <i className="fa fa-arrow-up" aria-hidden></i>
      </motion.button>
  );
}

export default ScrollToTopButton;