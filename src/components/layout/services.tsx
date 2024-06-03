import { ServiceSlider } from "../base";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="px-10">
      {/* <div className="text-center">
        <h3 className="text-lg md:text-xl text-custom pb-2">Our Best Services</h3>
        <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold xl:px-40">We Provide The Best Pharmacy Services For You And Your Family.</h1>
      </div> */}
      {/* <ServiceSlider /> */}
      <br /><br />
      <div className="text-center">

<section className="py-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our Community Partners</h1>
		<p className="max-w-2xl text-center dark:text-gray-600">Our valued community partners play an indispensable role in providing exceptional patient support services. With their unwavering dedication and expertise, they offer invaluable resources and assistance that complement our healthcare efforts seamlessly. Their commitment to enhancing patient well-being reflects a shared vision of empowering individuals to lead healthier and more fulfilling lives.</p>
		<div className="grid grid-cols-1 md:grid-cols-2">
        <Link href="https://www.accttexas.org" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-full md:w-[80%] h-32 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/acct.png" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">ACCT</p>
            <p className="dark:text-gray-600">Assess Care Of Costal Texas, Inc.</p>
          </div>
        </Link>
        <Link href="https://www.coastalhw.org" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-full md:w-[80%] h-32 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/chaw.png" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">CHW</p>
            <p className="dark:text-gray-600">Costal Health & Wellness</p>
          </div>
        </Link>
        <Link href="https://www.utmb.edu" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-full md:w-[80%] h-32 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/umat.png" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">UTMB Health</p>
            <p className="dark:text-gray-600">The University of Texas Medical Branch</p>
          </div>
        </Link>
        <Link href="https://aidsetc.org/about/aetc-ncrc" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-full md:w-[80%] h-32 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/aets.jpg" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">AETC South Center</p>
            <p className="dark:text-gray-600">AIDS Education & Training Center Program</p>
          </div>
        </Link>
        <Link href="https://www.stvhope.org/" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-full md:w-[80%] h-32 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/hope.webp" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">HOPE</p>
            <p className="dark:text-gray-600">St. Vincent's House</p>
          </div>
        </Link>
        <Link href="https://www.gchd.org" target="_blank">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover dark:bg-gray-500 hover:scale-105 transition-all duration-400 hover:bg-gray-200" src="/images/pages/landing/gche.png" width={1000} height={1000}/>
            <p className="text-xl font-semibold leading-tight">GCHD</p>
            <p className="dark:text-gray-600">Galveston Country Health District</p>
          </div>
        </Link>
      </div>
	</div>
</section>



        
      </div>
    </section>
  );
};

export default Services;
