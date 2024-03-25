"use client"

import KeenSlider from "keen-slider";
import { useEffect } from "react";

const useKeenSlider = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 2,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop?.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop?.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
      keenSliderPrevious?.removeEventListener("click", () => keenSlider.prev());
      keenSliderNext?.removeEventListener("click", () => keenSlider.next());
      keenSliderPreviousDesktop?.removeEventListener("click", () =>
        keenSlider.prev()
      );
      keenSliderNextDesktop?.removeEventListener("click", () =>
        keenSlider.next()
      );
    };
  });
  return;
}

export default useKeenSlider
