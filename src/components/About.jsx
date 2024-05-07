import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia et
          culpa veritatis nostrum dolor dicta obcaecati praesentium facilis
          iusto autem exercitationem, voluptatem blanditiis molestiae, officia,
          eos quod iste delectus accusamus? Voluptatem fugiat nesciunt, impedit
          aspernatur magni eveniet ad ea harum similique id eum saepe provident.
          Corporis, ducimus. Neque, natus officiis!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          temporibus magni molestiae illum provident id asperiores reprehenderit
          corrupti corporis aut! Odio maxime itaque corrupti esse consequatur
          quos. Maxime inventore provident obcaecati numquam esse. Corrupti quae
          voluptates possimus architecto suscipit, sapiente laborum recusandae
          consequuntur, adipisci, minima autem voluptas veritatis saepe
          quisquam.
        </p>
      </div>
    </div>
  );
};

export default About;
