import { PageBreadCrumb } from '@/components/layout'
import React from 'react'
import Image from "next/image";

const ServicePage = () => {
  return (
    <>
    <section>
      <PageBreadCrumb heading="Our Services" label="Our Services" />
    </section>
    
    <div className='mt-4 bg-blue-200 flex justify-center align-middle rounded-2xl'>
    <Image    
              src="/images/pages/landing/hiv-logo.png"
              alt="HIV"
              width={40}
              height={40}
            />
      <h4 className="font-semibold text-xl pt-2"><b>HIV</b> - Human immunodeficiency virus</h4>
    </div>
    <div>
    <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we are committed to providing personalized HIV care that addresses the specific needs of each individual living with HIV. Our team of experienced pharmacists specializes in HIV management and offers tailored medication regimens, adherence support, and counseling services to optimize treatment outcomes. We understand the importance of comprehensive care and strive to empower our patients to lead healthy and fulfilling lives while managing their HIV diagnosis.</p>
    <p className="text-muted pt-1 mt-2 text-green-800">Community Engagement Talk about our partnership with ACCT and all the services we support like testing and free delivery.</p>
    </div>
    
    <div className='mt-4 bg-green-200 flex justify-center align-middle rounded-2xl'>
    <Image    
              src="/images/pages/landing/hiv-logo.png"
              alt="HIV"
              width={40}
              height={40}
            />
      <h4 className="font-semibold text-xl pt-2 "><b>HIV Care Continuum</b></h4>
    </div>
    <div>
    <p className="text-muted pt-1 mt-2">The HIV care continuum is a public health model that outlines the steps or stages that people with HIV go through from diagnosis to achieving and maintaining viral suppression (a very low or undetectable amount of HIV in the blood) through care and treatment with HIV medicine called antiretroviral therapy or ART</p>
      
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
    </div>
    
    <div className='mt-4 bg-orange-400 flex justify-center align-middle rounded-2xl'>
    <Image    className='rounded-full p-1'
              src="/images/pages/landing/pepicon.png"
              alt="HIV"
              width={40}
              height={40}
            />
      <h4 className="font-semibold text-xl pt-2"><b>PrEP</b> - pre-exposure prophylaxis</h4>
    </div>
    <div>
    <p className="text-muted pt-1 mt-2">PrEP (pre-exposure prophylaxis) is medicine that reduces your chances of getting HIV from sex or injection drug use. When taken as prescribed, PrEP is highly effective for preventing HIV.</p>
    
    <br />
    <h3>Is PrEP safe?</h3>
    <ul className='list-disc'>
      <li>PrEP is safe, but some people experience side effects like diarrhea, nausea, headache, fatigue, and stomach pain. These side effects usually go away over time.</li>
      <li>Tell your health care provider about any side effects that are severe or do not go away.</li>
    </ul>
    <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
          <Image    
                    src="/images/pages/landing/cdc.png"
                    alt="HIV"
                    width={50}
                    height={40}
                  />
          <h1 className="pt-2 text-blue-500">Central of Disease Control and preventaion </h1>
       </a>
    </div>

    <div className='mt-4 bg-blue-200 flex justify-center align-middle rounded-2xl'>
    <Image    className='rounded-full p-1'
              src="/images/pages/landing/pepicon.png"
              alt="HIV"
              width={40}
              height={40}
            />
      <h4 className="font-semibold text-xl pt-2"><b>PEP</b> Post-Exposure Prophylaxis</h4>
    </div>
    <div>
    <p className="text-muted pt-1 mt-2">PEP (post-exposure prophylaxis) means taking medicine to prevent HIV after a possible exposure. PEP should be used only in emergency situations and must be started within 72 hours after a recent possible exposure to HIV.</p>
    <br />
    <h3><b>O</b> How well does PEP work?</h3>
    <p className="text-muted pt-1 mt-2 text-green-800">If taken within 72 hours after possible exposure, PEP is highly effective in preventing HIV. But to be safe, you should take other actions to protect your partners while you are taking PEP.  This includes always using condoms with sexual partners and not sharing needles, syringes, or other equipment to inject drugs.</p>
    </div>

    <a className='flex gap-2 cursor-pointer justify-center align-middle mt-3' href='https://www.hiv.gov/federal-response/policies-issues/hiv-aids-care-continuum'>
          <Image    
                    src="/images/pages/landing/cdc.png"
                    alt="HIV"
                    width={50}
                    height={40}
                  />
          <h1 className="pt-2 text-blue-500">Central of Disease Control and preventaion </h1>
       </a>

    <div className='mt-4 bg-orange-300 flex justify-center align-middle rounded-2xl'>
    <Image    
              src="/images/pages/landing/hiv-logo.png"
              alt="HIV"
              width={40}
              height={40}
            />
      <h4 className="font-semibold text-xl pt-2">Linkage to Care</h4>
    </div>
    <div>
    <p className="text-muted pt-1 mt-2">At Galveston Specialty Pharmacy, we take pride in bridging the gap to care for patients affected by HIV/AIDS. We offer a vital link to essential healthcare services, including medication management, free medication delivery, and ongoing support. Our dedicated team ensures seamless coordination and access to comprehensive care, empowering patients to navigate their HIV/AIDS journey with confidence and dignity.</p>
   
    </div>
    
    </>
  )
}

export default ServicePage
