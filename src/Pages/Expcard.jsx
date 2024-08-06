import React, { useState, useRef, useEffect } from "react";
import circle from "../assets/images/circle.svg";

const experiences = [
  {
    title: "Senior Core - Operations",
    date: "Apr 2024 - Present",
    organization: "Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India",
    details: [
      "Spearheading the operations team",
      "Managing and optimizing processes to ensure smooth execution of all departmental functions",
    ],
  },
  {
    title: "Core Committee Member",
    date: "Feb 2023 - Apr 2024",
    organization: "Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India",
    details: [
      "Assisted in planning and executing various events",
      "Ensured effective coordination and engagement within the committee",
    ],
  },
  {
    title: "Person of Contact",
    date: "Jun 2023 - Mar 2024",
    organization: "ICETITE'24, VIT Vellore, Tamil Nadu, India",
    details: [
      "Organized Technext, a prominent technology exhibition for the International Conference on Emerging Trends in Information Technology and Engineering 2024",
    ],
  },
  {
    title: "Organizing Committee Member",
    date: "Feb 2024",
    organization: "AGAAZ 7.0, VIT Vellore, Tamil Nadu, India",
    details: [
      "Contributed to the successful execution of Riviera's largest comedy show as part of the organizing team",
    ],
  },
];

const ExperienceTimeline = () => {
  const [currentExperience, setCurrentExperience] = useState(experiences[0]);
  const dateColumnRef = useRef(null);

  useEffect(() => {
    const dateColumn = dateColumnRef.current;
    if (!dateColumn) return;

    const handleScroll = () => {
      const scrollPosition = dateColumn.scrollTop;
      const dateHeight = 70; // Adjust this value as needed
      const index = Math.floor(scrollPosition / dateHeight);
      setCurrentExperience(
        experiences[Math.min(index, experiences.length - 1)]
      );
    };

    dateColumn.addEventListener("scroll", handleScroll);
    return () => dateColumn.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="expbox bg-green-400 m-10 p-5 gap-10">
        <h1 className=" text-5xl mb-5 text-center font-bold">Experience</h1>
        <div className="flex h-64 justify-center rounded-2xl  ">
          <div className="Exp_section  bg-gray-100 p-8 m-6 w-4/5 rounded-2xl ">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentExperience.title}
            </h2>
            <span className="text-sm text-gray-600 block mt-1">
              {currentExperience.date}
            </span>
            <p className="mt-2 text-gray-700">
              {currentExperience.organization}
            </p>
            <ul className="list-disc list-inside mt-2">
              {currentExperience.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div
            ref={dateColumnRef}
            className="scroller grid w-10 m-6 gap-2"
            style={{ scrollSnapType: "y mandatory" }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                // className={`h-10 m-1  rounded-full flex items-center justify-center cursor-pointer transition duration-200 ease-in-out
                // ${
                //   exp === currentExperience
                //     ? "bg-blue-300 text-white"
                //     : "bg-gray-300 text-gray-800"
                // }`}
                // onClick={() => setCurrentExperience(exp)}
              >
                <img src="{circle}" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceTimeline;
