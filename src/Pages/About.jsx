import React from 'react';
import Typical from 'react-typical';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded shadow-lg">
      <img
        src="path-to-your-image.jpg" // Update this to the correct path to your image
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4"
      />
      <div className="text-center md:text-left">
        <Typical
          steps={[
            'As a tech enthusiast and designer at heart, my curiosity drives me to understand how things work.', 2000,
            'I thrive in team environments, whether as a member or a leader.', 2000,
            'Currently, exploring new domains while establishing networks to broaden my horizons.', 2000
          ]}
          loop={Infinity}
          wrapper="p"
          className="text-lg text-gray-700"
        />
      </div>
    </div>
  );
};

export default About;
