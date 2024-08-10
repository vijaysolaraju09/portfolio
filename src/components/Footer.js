import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { about } from "../data/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4 footer" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} {about.name}. All rights reserved.
        </p>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href={`mailto:${about.mail}`}
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FiMail className="text-xl" />
          </a>

          <a
            href={about.linkedIn}
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
