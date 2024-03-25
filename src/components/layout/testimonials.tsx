"use client";
import useKeenSlider from "@/hooks/keen-slider";

const Testimonials = () => {
  useKeenSlider();
  return (
    <>
      <section className="bg-gray-50 overflow-x-hidden">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-10">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-custom sm:text-4xl">
                Don't just take our word for it...
              </h2>

              <p className="mt-4 text-muted">
                Google Review's
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-custom/70 p-3 text-custom transition hover:bg-custom hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-custom/70 p-3 text-custom transition hover:bg-custom hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-primary">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg
                              key={i}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-custom sm:text-3xl">
                            Great pharmacy.
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                          Friendly informative staff is always quick to get my prescription filled and stay in communication with me along the way
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; J.D. Andros II
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-primary">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg
                              key={i}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-custom sm:text-3xl">
                          Super friendly
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                          Fast, Super friendly and most important NO long lines like those chain Pharmacys where you stand for Hours to get meds.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Josh Rios
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-primary">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg
                              key={i}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-custom sm:text-3xl">
                          Best pharmacies on the island
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                          Absolutely One of the best pharmacies on the island. Professional, knowledgeable, and dedicated. The young lady in the front I believe her name is  “Fran” she’s such a Gem!!!
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Yada Ross Director
                      </footer>
                    </blockquote>
                  </div>

              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-custom/70 p-4 text-custom transition hover:bg-custom hover:text-white"
            >
              <svg
                className="size-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-custom/70 p-4 text-custom transition hover:bg-custom hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
