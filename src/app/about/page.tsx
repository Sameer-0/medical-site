import { Divider } from "@/components/base";
import { AboutContainer, PageBreadCrumb, Services } from "@/components/layout";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="pb-20">
      <PageBreadCrumb heading="About Us" label="About Us" />
      <AboutContainer />
      <Divider />
      <Services />
    </section>
  );
};

export default AboutPage;
