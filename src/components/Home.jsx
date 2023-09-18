import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
return (
  <div name="home" className="w-full h-screen bg-slate-800">
    {/*Container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
      <p className="text-yellow-600">Hi, my name is </p>
      <h1 className="text-white text-4xl sm:text-7xl font-bold">
        Ebrahim Beiati-Asl
      </h1>
      <h2 className="text-[#8892b0] text-4xl sm:text-7xl font-bold">
        I am Full Stack Developer.
      </h2>
      <p className="text-[#8892b0] py-4 mx-w-[700px] ">
        I am a passionate Fullstack Developer with expertise in front-end and
        back-end technologies. My portfolio demonstrates dynamic web apps and UI
        mastery using HTML, CSS, and JavaScript with frameworks like
        React,Angular, or Vue.js. I am proficient in server-side programming and
        database management, creating robust APIs and ensuring seamless
        communication between systems.
      </p>
      <div>
        
        <Link to="project" smooth={true} duration={500}>
          <button
          className="text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500"
          type="button"
        >
          View Projects{" "}
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
          </span>
        </button>
        </Link>
        
      </div>
    </div>
  </div>
);
}

export default Home;