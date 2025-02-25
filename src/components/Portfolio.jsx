import React from "react";
import dsc from "../assets/arrayDestruct.jpg";
import dsc1 from "../assets/installNode.jpg";
import dsc2 from "../assets/navbar.jpg";
import dsc3 from "../assets/reactParallax.jpg";
import dsc4 from "../assets/reactSmooth.jpg";
import dsc5 from "../assets/reactWeather.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: dsc,
    },
    {
      id: 2,
      src: dsc1,
    },
    {
      id: 3,
      src: dsc2,
    },
    {
      id: 4,
      src: dsc3,
    },
    {
      id: 5,
      src: dsc4,
    },
    {
      id: 6,
      src: dsc5,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
