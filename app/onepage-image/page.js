"use client";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, banner_type_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    banner_type_function("image");
  }, []);
  return (
    <TrueManLayout onePage={true}>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story />
      {/* text end */}
      {/* video resume */}
      <VideoResume />
      {/* video resume end */}
      {/* services */}
      <Services />
      {/* services end */}
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="portfolio-triger"
      />
      <Portfolio />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="resume-triger"
      />
      <Skills />
      <History />
      {/* price plans */}
      <Price />
      {/* price plans end */}
      {/* testimonials */}
      <Testimonials />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="contact-triger"
      />

      <Contact />
    </TrueManLayout>
  );
};
export default Index;
