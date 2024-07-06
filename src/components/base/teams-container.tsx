import Image from "next/image";
import Link from "next/link";
import JoinUsForm from "./join-us-form";

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
                            Guiding Our Journey with Vision and Integrity
                            </h1>

                            <p className="w-full mt-6 text-gray-500 dark:text-gray-400 ">
                            Gaurav, or “G” as he is known by our clients and community partners, exemplifies a commitment to outstanding customer service and personalized care. With over fifteen years of experience, G’s dedication to ensuring each patient receives the highest level of attention and support is unmatched. His extensive knowledge of medications and therapeutic approaches enables him to provide tailored guidance and recommendations to meet individual needs effectively.
                            </p>
                            <p className="w-full mt-6 text-gray-500 dark:text-gray-400 ">
                            Under G’s leadership, our pharmacy has become synonymous with excellence and compassion, earning the trust and loyalty of countless patients. His unwavering dedication to delivering personalized care has made a profound impact on the lives of those we serve, reflecting his steadfast commitment to making a positive difference in healthcare. As a Pharmacy Manager, G not only excels in customer service but also prioritizes the well-being and satisfaction of every individual who walks through our doors.
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Gaurav Midha </h3>
                            <p className="text-gray-600 dark:text-gray-300">Pharmacy Manager</p>

                            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
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
                            </div> */}
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
                            Compassionate, dedicated, and empowering patients.
                            </h1>

                            <p className="max-full mt-6 text-gray-500 dark:text-gray-400">
                            Nandan is a pharmacist whose compassionate nature and dedication to personalized care are truly exceptional. He goes above and beyond to ensure that each patient receives the individualized attention they deserve, taking the time to listen attentively to their concerns and needs. Nandan is commited to providing comprehensive support and medication management for our clients. He actively seeks out additional resources and assistance to address any challenges his patients may face, embodying the true essence of patient-centered care. 
                            </p>
                            <p className="max-full mt-6 text-gray-500 dark:text-gray-400">
                            Nandan’s warm demeanor and attentive nature create a welcoming environment where patients feel valued and understood. He goes above and beyond to establish genuine connections, taking the time to listen attentively to patients' concerns and preferences. Nandan’s passion for serving the community extends beyond the pharmacy counter; he actively engages in outreach initiatives and health education programs to promote wellness and empowerment.
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Nandan Kumar </h3>
                            <p className="text-gray-600 dark:text-gray-300">Staff Pharmacist</p>

                            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"></i>
                                </Link>
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"></i>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <Image className="object-cover object-center lg:w-1/3 lg:mx-6 w-full h-72 rounded-full lg:h-[25rem]" width={500} height={500} src="/images/pages/landing/profile.jpg" alt="Member" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                            {/* Guiding Our Journey with Vision and Integrity */}
                            Dedicated to Personalized Care
                            </h1>

                            <p className="w-full mt-6 text-gray-500 dark:text-gray-400 ">
                            Frani, our compassionate pharmacy technician, embodies the epitome of patient-centric care. With a warm smile and genuine empathy, she fosters an environment where patients feel valued and understood. Frani’s dedication goes beyond filling prescriptions; she takes the time to know each patient by name, offering personalized support and reassurance, making every interaction a testament to our commitment to exceptional service.
                            </p>


                            <h3 className="mt-6 text-lg font-medium text-blue-500">Frani Herrington</h3>
                            <p className="text-gray-600 dark:text-gray-300">Pharmacy Technician</p>

                            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
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
                            </div> */}
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
                            Excellent customer service
                            </h1>

                            <p className="max-full mt-6 text-gray-500 dark:text-gray-400">
                            Meet Ashley, our exceptional pharmacy staff member who radiates warmth and friendliness. With a genuine smile and attentive demeanor, Ashley goes above and beyond to ensure every customer feels welcomed and valued. Her dedication to excellent customer service shines through in every interaction, making patients feel valued and cared for from the moment they walk through our doors.
                            </p>


                            <h3 className="mt-6 text-lg font-medium text-blue-500">Ashley Winton </h3>
                            <p className="text-gray-600 dark:text-gray-300">Pharmacy Technician </p>

                            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"></i>
                                </Link>
                                <Link href="#">
                                    <i aria-hidden className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"></i>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="pt-8">
                  <Link href="/contact" className="animated-button border-slate-200 ml-5 border-2">
                      Join Our Team
                    <i aria-hidden className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div> */}

            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <Image className="object-cover object-center lg:w-1/3 lg:mx-6 w-full h-72 rounded-full lg:h-[25rem]" width={500} height={500} src="/images/pages/landing/profile.jpg" alt="Member" />

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                            Pharmacy Logistics Coordinator with Care
                            </h1>

                            <p className="w-full mt-6 text-gray-500 dark:text-gray-400 ">
                            Always with a smile and a positive attitude, Steve goes above and beyond to ensure our patients receive their medications promptly and with care. His dedication to making each delivery experience pleasant and personalized has earned him high praise from our community. Whether navigating through construction zones or making extra trips to accommodate urgent needs, Steve consistently demonstrates reliability, professionalism, and a genuine commitment to our patients' well-being.
                            </p>


                            <h3 className="mt-6 text-lg font-medium text-blue-500">Steve Compton</h3>
                            <p className="text-gray-600 dark:text-gray-300">Pharmacy Logistics Coordinator
                            </p>

                            {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mt-8 h-[1px] bg-slate-300" />
            <JoinUsForm />
        </>
    );
};

export default TeamsContainer;
