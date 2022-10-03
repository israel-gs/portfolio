import React from "react";
import Button from "./Button";
import LinkedinLogo from "../assets/images/linkedin.svg";
import GitHubLogo from "../assets/images/github.svg";
import IconButton from "./IconButton";

export default function ContactInfo() {
  let handleDownload = () => {};

  return (
    <section className="font-satoshi bg-dark-800 text-white py-28 px-14 lg:py-40 lg:px-20 flex justify-center gap-16 flex-wrap">
      <div className="w-full lg:w-auto">
        <h2 className="text-5xl font-bold mb-12">Get in touch</h2>
        <Button onClick={handleDownload}>Download resume</Button>
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-auto">
        <div className="flex gap-12 flex-wrap">
          <p className="mb-4 flex flex-col flex-1">
            <span className="font-bold text-3xl">Email</span>
            <a
              href="mailto:israelgs83@gmail.com"
              className="text-white hover:text-primary-500 transition-colors text-2xl"
            >
              israelgs83@gmail.com
            </a>
          </p>
          <p className="mb-4 flex flex-col flex-1">
            <span className="font-bold text-3xl">Phone</span>
            <a
              href="tel:51934090580"
              className="text-white hover:text-primary-500 transition-colors text-2xl"
            >
              +51 934090580
            </a>
          </p>
        </div>
        <div className="flex gap-12 flex-wrap">
          <p className="mb-4 flex flex-col flex-1">
            <span className="font-bold text-3xl">Social</span>
            <div className="flex">
              <IconButton
                href="https://www.linkedin.com/in/israel-gs/"
                src={LinkedinLogo}
              />
              <IconButton
                href="https://github.com/israel-gs"
                src={GitHubLogo}
              />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
