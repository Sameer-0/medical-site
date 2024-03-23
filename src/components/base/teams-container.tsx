import Image from "next/image";
import Link from "next/link";

const TeamsContainer = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <Image className="object-cover object-center lg:w-1/3 lg:mx-6 w-full h-72 rounded-full lg:h-[25rem]" width={500} height={500} src="/images/pages/landing/profile.jpg" alt="Member" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Help us improve our productivity
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a. ”
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link href="#">
                                    <i
                                        aria-hidden
                                        className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"
                                    ></i>
                                </Link>
                                <Link href="#">
                                    <i
                                        aria-hidden
                                        className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2 lg:order-2 lg:ml-6">
                            <Image className="object-cover object-center w-500 lg:w-3/4 sm:w-full h-72 rounded-full lg:h-[25rem]" width={500} height={500} src="/images/pages/landing/profile.jpg" alt="Member" />
                        </div>

                        <div className="lg:w-1/2 lg:order-1 lg:px-6">
                            <p className="text-5xl font-semibold text-blue-500">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Help us improve our productivity
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a. ”
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"></i>
                                </Link>
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
          <div className="pt-8">
            <Link href="/contact" className="animated-button border-solid ml-5 border-2">
                Join Us
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
            </section>


        </>
    );
};

export default TeamsContainer;
