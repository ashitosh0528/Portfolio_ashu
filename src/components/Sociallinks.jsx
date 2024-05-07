import React from "react";
import { FaGithub, FaLinkedin, FaAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Sociallinks() {
  const links = [
    {
      Id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkdin.com",
      style: "rounded-tr-md",
    },
    {
      Id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://linkdin.com",
      // style:'rounded-md'
    },
    {
      Id: 3,
      child: (
        <>
          Mail
          <IoIosMail size={30} />
        </>
      ),
      href: "https://linkdin.com",
      // style:'rounded-md'
    },
    {
      Id: 4,
      child: (
        <>
          Resume
          <FaAddressCard size={30} />
        </>
      ),
      href: "https://linkdin.com",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({Id, child, href, style, download }) => (
          <li
            key={Id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sociallinks;
