import React from "react";

function Experience() {
  return (
    <>
      <div className="Experience-section  m-20">
        <div className="Timeline m-10">
          <h1 className="text-4xl font-bold text-center mb-10">Experience</h1>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="Timeline-item bg-slate-100 text-slate-600 p-4 rounded">
              <h2 className="text-2xl font-bold">Senior Core - Operations</h2>
              <h4 className="text-lg font-semibold">Apr 2024 - Present</h4>
              <h3 className="text-lg font-semibold">
                Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India
              </h3>
              <p className="text-slate-600 mt-2">
                Working as operations executive handling roles and
                responsiblities under the operations department
              </p>
            </div>
            <div className="Timeline-item bg-slate-100 text-slate-600 p-4 rounded">
              <h2 className="text-2xl font-bold">Core Commitee Member</h2>

              <h4 className="text-lg font-semibold">Feb 2023 - Apr 2024</h4>
              <h3 className="text-lg font-semibold">
                Entrepreneurship Cell, VIT Vellore, Tamil Nadu, India
              </h3>
              <p className="text-slate-600 mt-2">
                Assisted in management of various events conducted by the
                Entrepreneurship Cell, VIT.
              </p>
            </div>
            <div className="Timeline-item bg-slate-100 text-slate-600 p-4 rounded">
              <h2 className="text-2xl font-bold">Person of contact</h2>
              <h4 className="text-lg font-semibold">Jun 2023 - Mar 2024</h4>
              <h3 className="text-lg font-semibold">
                ICETITE'24 Vellore, Tamil Nadu, India
              </h3>
              <p className="text-slate-600 mt-2">
                Worked to organize Technext, a technology exhibition, for the
                International Conference on Emerging Trends in Information
                Technology and Engineering 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
