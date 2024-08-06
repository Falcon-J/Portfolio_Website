import React from "react";

const Timeline = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>
      <div className="timeline relative border-l-2 border-gray-200 pl-4">
        <div className="timeline-item mb-8 ml-4">
          <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="timeline-content relative p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Senior Core - Operations</h2>
            <span className="text-sm text-gray-600">Apr 2024 - Present</span>
            <p className="mt-2">
              Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Spearheading the operations team</li>
              <li>
                Managing and optimizing processes to ensure smooth execution of
                all departmental functions
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item mb-8 ml-4">
          <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="timeline-content relative p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Core Committee Member</h2>
            <span className="text-sm text-gray-600">Feb 2023 - Apr 2024</span>
            <p className="mt-2">
              Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Assisted in planning and executing various events</li>
              <li>
                Ensured effective coordination and engagement within the
                committee
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item mb-8 ml-4">
          <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="timeline-content relative p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Person of Contact</h2>
            <span className="text-sm text-gray-600">Jun 2023 - Mar 2024</span>
            <p className="mt-2">ICETITE'24, VIT Vellore, Tamil Nadu, India</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Organized Technext, a prominent technology exhibition for the
                International Conference on Emerging Trends in Information
                Technology and Engineering 2024
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item mb-8 ml-4">
          <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="timeline-content relative p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              Organizing Committee Member
            </h2>
            <span className="text-sm text-gray-600">Feb 2024</span>
            <p className="mt-2">AGAAZ 7.0, VIT Vellore, Tamil Nadu, India</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Contributed to the successful execution of Riviera's largest
                comedy show as part of the organizing team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
