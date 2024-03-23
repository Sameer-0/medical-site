import { PageBreadCrumb } from '@/components/layout'
import React from 'react'
import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <section>
        <PageBreadCrumb heading="Our Services" label="Our Services" />
      </section>


      <section className="bg-white dark:bg-gray-900" >
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center ">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"><b>HIV</b> - Human immunodeficiency virus</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
              quia tempore delect
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 ">
            <div className="hover:scale-105 transition-all duration-400 hover:bg-gray-200">
              <Image width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/hiv.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  <b>HIV</b> - Human immunodeficiency virus
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we are committed to providing personalized HIV care that addresses the specific needs of each individual living with HIV. Our team of experienced pharmacists specializes in HIV management and offers tailored medication regimens, adherence support, and counseling services to optimize treatment outcomes. We understand the importance of comprehensive care and strive to empower our patients to lead healthy and fulfilling lives while managing their HIV diagnosis.</p>
                  <p className="text-muted pt-1 mt-2 text-green-800">Community Engagement Talk about our partnership with ACCT and all the services we support like testing and free delivery.</p>
                </p>

                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>

            <div className="hover:scale-105 transition-all duration-400 hover:bg-gray-200">
              <Image width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/hiv1.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  HIV Care Continuum
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p> The HIV care continuum is a public health model that outlines the steps or stages that people with HIV go through from diagnosis to achieving and maintaining viral suppression (a very low or undetectable amount of HIV in the blood) through care and treatment with HIV medicine called antiretroviral therapy or ART</p>
                  <div className='flex mt-6 justify-center align-middle gap-20'>
                    <a className='flex gap-2 cursor-pointer' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                      <Image
                        src="/images/pages/landing/govhin.webp"
                        alt="HIV"
                        width={40}
                        height={40}
                      />
                      <h1 className="pt-2 text-blue-500">HIV Care Continuum</h1>
                    </a>
                    <a className='flex gap-2 cursor-pointer' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                      <Image
                        src="/images/pages/landing/hahs.svg"
                        alt="HIV"
                        width={50}
                        height={50}
                      />
                      <h1 className="pt-2 text-blue-500">US Department of HHS The Office of Infectious Disease and HIV/AIDS </h1>
                    </a>
                  </div>
                </p>

                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Exposure Prophylaxis</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              <p className="text-muted pt-1 mt-2">PEP (post-exposure prophylaxis) means taking medicine to prevent HIV after a possible exposure. PEP should be used only in emergency situations and must be started within 72 hours after a recent possible exposure to HIV.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div className="hover:scale-105 transition-all duration-400 hover:bg-gray-200">
              <Image width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/prep1.png" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  <b>PrEP</b>  - pre-exposure prophylaxis
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">PrEP (pre-exposure prophylaxis) is medicine that reduces your chances of getting HIV from sex or injection drug use. When taken as prescribed, PrEP is highly effective for preventing HIV.</p>
                  <br />
                  <h3>Is PrEP safe?</h3>
                  <ul className='list-disc'>
                    <li>PrEP is safe, but some people experience side effects like diarrhea, nausea, headache, fatigue, and stomach pain. These side effects usually go away over time.</li>
                    <li>Tell your health care provider about any side effects that are severe or do not go away.</li>
                  </ul>
                </p>
                <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                  <Image
                    src="/images/pages/landing/cdc.png"
                    alt="HIV"
                    width={50}
                    height={40}
                  />
                  <h1 className="pt-2 text-blue-500">Central of Disease Control and preventaion </h1>
                </a>
                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>

            <div className="hover:scale-105 transition-all duration-400 hover:bg-gray-200">
              <Image width={500} height={500} className="relative z-10 object-cover w-full rounded-md h-96" src="/images/pages/landing/microscopepharma.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  <b>PEP</b> Post-Exposure Prophylaxis
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p className="text-muted pt-1 mt-2">PEP (post-exposure prophylaxis) means taking medicine to prevent HIV after a possible exposure. PEP should be used only in emergency situations and must be started within 72 hours after a recent possible exposure to HIV.</p>
                  <br />
                  <h3><b>O</b> How well does PEP work?</h3>
                  <p className="text-muted pt-1 mt-2 text-green-800">If taken within 72 hours after possible exposure, PEP is highly effective in preventing HIV. But to be safe, you should take other actions to protect your partners while you are taking PEP.  This includes always using condoms with sexual partners and not sharing needles, syringes, or other equipment to inject drugs.</p>
                  <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
                    <Image
                      src="/images/pages/landing/cdc.png"
                      alt="HIV"
                      width={50}
                      height={40}
                    />
                    <h1 className="pt-2 text-blue-500">Central of Disease Control and preventaion </h1>
                  </a>
                </p>

                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Linkage to Care... <span className="text-blue-500">next level.</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we take pride in bridging the gap to care for patients affected by HIV/AIDS. We offer a vital link to essential healthcare services, including medication management, free medication delivery, and ongoing support. Our dedicated team ensures seamless coordination and access to comprehensive care, empowering patients to navigate their HIV/AIDS journey with confidence and dignity.</p>
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Sign Up
            </a>
          </div>
        </div>
      </section>


    </>
  )
}

export default ServicePage
