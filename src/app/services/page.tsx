import { PageBreadCrumb } from '@/components/layout'
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ServicePage = () => {
  return (
    <>
      <section>
        <PageBreadCrumb heading="Our Services" label="Our Services" />
      </section>


      <section className="bg-white dark:bg-gray-900 " >
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center ">
            {/* <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"><b>HIV</b> - Human immunodeficiency virus</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
              quia tempore delect
            </p> */}
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 ">
            <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/hiv.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <b className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Human immunodeficiency virus
                </b>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we are committed to providing personalized HIV care that addresses the specific needs of each individual living with HIV. Our team of experienced pharmacists specializes in HIV management and offers tailored medication regimens, adherence support, and counseling services to optimize treatment outcomes. We understand the importance of comprehensive care and strive to empower our patients to lead healthy and fulfilling lives while managing their HIV diagnosis.</p>
                  <p className="text-muted pt-1 mt-2 m text-gray-500">Community Engagement Talk about our partnership with ACCT and all the services we support like testing and free delivery.</p>
                </p>
                <div className='flex mt-6 justify-center align-middle gap-20'>
                    <a className='flex gap-2 cursor-pointer' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum' target="_blank">
                      <img
                        src="/images/pages/landing/govhin.webp"
                        alt="HIV"
                        width={80}
                        height={80}
                      />
                      {/* <h1 className="pt-2 text-blue-500">HIV Care Continuum</h1> */}
                    </a>
                    <a className='flex gap-2 cursor-pointer' href='https://www.hhs.gov/oidp/initiatives/index.html' target="_blank">
                      <img className='w-[240px]'
                        src="/images/pages/landing/hahs.svg"
                        alt="HIV"
                        width={80}
                        height={80}
                      />
                      {/* <h1 className="pt-2 text-blue-500">US Department of HHS The Office of Infectious Disease and HIV/AIDS </h1> */}
                    </a>
                  </div>
                {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
              </div>
            </div>         

            <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/pcare2.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <b className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    Personalized care
                </b>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className='text-muted pt-1 mt-2'> At Galveston Specialty Pharmacy, we pride ourselves on offering personalized pharmacy care that prioritizes the individual needs and preferences of each patient. Our team of dedicated pharmacists takes the time to understand our patients' unique health concerns, lifestyle factors, and treatment goals to provide tailored medication management and support. From medication counseling to adherence monitoring, we strive to empower our patients to make informed decisions about their health and well-being.</p>
                </p>

                {/* <p className="mt-3 text-sm text-blue-500">20 October 2019</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            {/* <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Exposure Prophylaxis</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              <p className="text-muted pt-1 mt-2">PEP (post-exposure prophylaxis) means taking medicine to prevent HIV after a possible exposure. PEP should be used only in emergency situations and must be started within 72 hours after a recent possible exposure to HIV.</p>
            </p> */}
          </div>
          

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/prep1.png" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Pre-Exposure Prophylaxis
                </a>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">PrEP (pre-exposure prophylaxis) is medicine that reduces your chances of getting HIV from sex or injection drug use. When taken as prescribed, PrEP is highly effective for preventing HIV.</p>
                  <br />
                  <h3>Is PrEP safe?</h3>
                  <ul className='list-disc'>
                    <li>PrEP is safe, but some people experience side effects like diarrhea, nausea, headache, fatigue, and stomach pain. These side effects usually go away over time.</li>
                    <li>Tell your health care provider about any side effects that are severe or do not go away.</li>
                  </ul>
                </p>
                <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://www.cdc.gov/hiv/risk/prep/index.html#:~:text=Print-,Pre%2DExposure%20Prophylaxis%20(PrEP),use%20by%20at%20least%2074%25'>
                  <img
                    src="/images/pages/landing/linkIcon.png"
                    alt="HIV"
                    width={30}
                    height={30}
                  />
                  <h1 className="pt-2 text-blue-500">Click here for more Information </h1>
                </a>
                {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
              </div>
            </div>

            <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/pep.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <b className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Post-Exposure Prophylaxis
                </b>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">PEP- PEP stands for post-exposure prophylaxis. The word “prophylaxis” means to prevent or control the spread of an infection or disease. PEP means taking HIV medicines within 72 hours (3 days) after a possible exposure to HIV to prevent HIV.</p>
                  <br />
                  <p className="text-muted pt-1 mt-2 m text-gray-500">PEP should be used only in emergency situations. It is not meant for regular use by people who may be exposed to HIV frequently. PEP is not intended to replace regular use of other HIV prevention methods, such as consistent and proper use of condoms during sex or pre-exposure prophylaxis (PrEP). PrEP is different than PEP, in that people at risk for HIV take a specific HIV medicine daily or an injection every two months to prevent getting HIV</p>
                  <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://hivinfo.nih.gov/understanding-hiv/fact-sheets/post-exposure-prophylaxis-pep#:~:text=What%20is%20PEP%3F,to%20HIV%20to%20prevent%20HIV'>
                    <img
                      src="/images/pages/landing/linkIcon.png"
                      alt="HIV"
                      width={30}
                      height={30}
                    />
                    <h1 className="pt-2 text-blue-500">Click here for more Information</h1>
                  </a>
                </p>

                {/* <p className="mt-3 text-sm text-blue-500">20 October 2019</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 !mb-16">

          <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/care.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <b className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  <p>Linkage to Care</p>
                </b>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we take pride in bridging the gap to care for patients affected by HIV/AIDS. We offer a vital link to essential healthcare services, including medication management, free medication delivery, and ongoing support. Our dedicated team ensures seamless coordination and access to comprehensive care, empowering patients to navigate their HIV/AIDS journey with confidence and dignity.</p>
                </p>
                <div className='flex mt-6 justify-center align-middle gap-20'>
                    {/* <a className='flex gap-2 cursor-pointer' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                      <img
                        src="/images/pages/landing/govhin.webp"
                        alt="HIV"
                        width={40}
                        height={40}
                      />
                      <h1 className="pt-2 text-blue-500">HIV Care Continuum</h1>
                    </a> */}
                  </div>
                {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
              </div>
            </div>

            <div className="hover:scale-105 transition-all duration-400 rounded-lg hover:bg-gray-200">
              <img width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/fd.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <b className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  <p>Free Delivery</p>
                </b>

                <p className="text-muted mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">We always prioritize your health and convenience. That’s why we offer free home delivery for all your medications, ensuring timely and secure access to the prescriptions you need. We provide delivery all over Galveston, Brazoria, and Matagorda counties for FREE! If you prefer us to bring your order to your work or an alternate location, please speak with the pharmacy staff. Let us bring your medications directly to your door at no extra cost—because your well-being matters. 
                  Choose Galveston Specialty Pharmacy, your trusted local pharmacy, for hassle-free healthcare!</p>
                </p>
                <div className='flex mt-6 justify-center align-middle gap-20'>
                    {/* <a className='flex gap-2 cursor-pointer' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                      <img
                        src="/images/pages/landing/govhin.webp"
                        alt="HIV"
                        width={40}
                        height={40}
                      />
                      <h1 className="pt-2 text-blue-500">HIV Care Continuum</h1>
                    </a> */}
                  </div>
                {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
              </div>
            </div>
        </div>
      </section>

      {/* <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Linkage to Care... <span className="text-blue-500">next level.</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we take pride in bridging the gap to care for patients affected by HIV/AIDS. We offer a vital link to essential healthcare services, including medication management, free medication delivery, and ongoing support. Our dedicated team ensures seamless coordination and access to comprehensive care, empowering patients to navigate their HIV/AIDS journey with confidence and dignity.</p>
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
          <div className="pt-8">
            <Link href="/contact" className="animated-button">
              Contact Us
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          </div>
        </div>
      </section> */}


    </>
  )
}

export default ServicePage
