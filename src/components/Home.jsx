import React from "react";
import mypic from "../assets/DSC_0009.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col mr-3 justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold  text-white">I am a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            dignissimos recusandae eligendi culpa, eius explicabo delectus quia
            provident animi quidem accusamus, cum dolores quae ea blanditiis
            earum, unde harum rerum.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={mypic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
