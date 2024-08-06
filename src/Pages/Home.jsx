import React from "react";
import temp from "../assets/images/Mypfp.jpeg";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Certificates from "./Certificates";
import ExperienceCard from "./Expcard";

function Home() {
  return (
    <>
      <div className="home-container h-screen m-10 ">
        <div className="home h-screen bg-slate-100 grid gap-4 grid-cols-2 p-4 ">
          <div className="Leftgrid flex justify-center items-center">
            <img
              className=" text-white h-1/2 py-2 px-4 rounded-full"
              src={temp}
            />
          </div>
          <div className="Rightgrid flex justify-center items-center">
            <section className=" text-slate-600 text-3xl py-2 px-4 rounded">
              As a tech enthusiast and designer at heart, my curiosity drives me
              to understand how things work. I thrive in team environments,
              whether as a member or a leader. Currently, exploring new domains
              while establishing networks to broaden my horizons.
            </section>
          </div>
        </div>
      </div>
      {/* <Projects /> */}
      <ExperienceCard />
      {/* <Certificates /> */}
      <Contact />
    </>
  );
}

export default Home;
