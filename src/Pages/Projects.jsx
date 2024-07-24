import React, { useState } from "react";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      content: "Project 1: Web Application",
      description: "A responsive web app built with React and Node.js...",
    },
    {
      id: 2,
      content: "Project 2: Mobile App",
      description: "An iOS and Android app developed using React Native...",
    },
    {
      id: 3,
      content: "Project 3: Data Analysis",
      description: "A data analysis project using Python and Pandas...",
    },
    {
      id: 4,
      content: "Project 4: Machine Learning Model",
      description: "A machine learning model for image classification...",
    },
  ];

  return (
    <div className="flex h-screen m-10">
      <div className="w-1/4 bg-black text-white p-4 flex flex-col">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <ul className="space-y-2">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className={`cursor-pointer ${
                index === currentSlide ? "text-cyan-300" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              {slide.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 bg-gray-200 p-4 flex flex-col">
        <div className="flex-grow bg-cyan-300 container xl p-4 mb-4 overflow-auto">
          {slides[currentSlide].content}
        </div>
        <div className="flex justify-center space-x-2">
          {/* Navigation dots */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
