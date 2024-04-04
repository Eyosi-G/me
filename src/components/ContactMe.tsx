import React from "react";
import Footer from "./Footer";

const ContactMe = () => {
  return (
    <section className="px-10 md:pl-36 md:pr-20 py-40 bg-white" id="contact_me">
      <div className="flex justify-center ">
        <div className="w-fit flex flex-col items-center">
          <h1 className="font-bold text-3xl uppercase">Get In Touch</h1>
          <div className="flex w-full">
            <span className="block mt-2 w-[40%] h-1 bg-gradient-to-l from-[#facf0f]"></span>
            <span className="block mt-2 w-[40%] h-1 bg-gradient-to-r from-[#facf0f]"></span>
          </div>
        </div>
      </div>
      <p className="text-center w-full md:w-[80%] m-auto mt-5">
        I am currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:eyosiyasgirma0@gmail.com"
          className="bg-[#facf0f] px-9 py-3 uppercase mt-5 font-bold rounded-sm shadow-[5px_5px]"
        >
          Say Hello
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default ContactMe;
