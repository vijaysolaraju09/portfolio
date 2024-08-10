import React from "react";

const EducationCard = ({ image, title, description, cgpa, year }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full rounded-t-lg h-auto object-cover "
        src={image}
        alt=""
      />

      <div className="p-4 sm:p-6">
        <a href="https://manacity.netlify.app/signin" target="_blank">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex justify-between w-full gap-2 pl-2">
          <div className="flex ">
            <label className="text-orange-500 font-bold">CGPA :&nbsp;</label>
            <p className="text-lime-500"> {cgpa}</p>
          </div>
          <div>
            <p className="text-fuchsia-500">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center mt-12 p-12">
        {education.map((item, index) => (
          <EducationCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.websiteUrl}
            cgpa={item.cgpa}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

export const education = [
  {
    title: "RGUKT, AP IIIT",
    description: "Bachelor of Technology in Computer Science and Engineering",
    cgpa: "8.61 / 10.00",
    year: "2015 – 2019",
    image: "https://www.rguktrkv.ac.in/images/DSC_2107.jpg",
    websiteUrl: "https://www.rguktrkv.ac.in/",
  },
  {
    title: "Trine University, Angola",
    description: "Master of Science in Information Studies",
    cgpa: "3.70 / 5.00",
    year: "2023 – 2024",
    image: "https://www.trine.edu/news/images/reston-media.jpg",
    websiteUrl: "https://www.trine.edu/",
  },
];

export default Projects;
