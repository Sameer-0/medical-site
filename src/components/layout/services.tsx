import { ServiceSlider } from "../base";

const Services = () => {
  return (
    <section className="px-10">
      <div className="text-center">
        <h3 className="text-lg md:text-xl text-custom pb-2">Our Best Services</h3>
        <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold xl:px-40">We Provide The Best Pharmacy Services For You And Your Family.</h1>
      </div>
      <ServiceSlider />
    </section>
  );
};

export default Services;
