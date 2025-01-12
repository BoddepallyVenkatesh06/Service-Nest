import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      // className="flex items-center gap-3 flex-col justify-center pt-24 pb-7 bg-gradient-to-r from-blue-500 to-purple-500"
      className="relative flex items-center gap-3 flex-col justify-start md:justify-center md:pt-24 md:pb-7"
    >

      <video
        src="/assets/images/background-video.mp4" loop muted autoPlay
        className='absolute w-full bg-cover bg-top -z-50'
      >
      </video>

      <h2 className="font-bold text-2xl leading-[50px] md:leading-[60px] md:text-[46px] text-center text-white">
        Find Home
        <span className="text-purple-500 bg-neutral-100 p-1 md:py-2 px-4 rounded-xl text-center mx-7">Services</span>
        <br />
        Near You
      </h2>

      <h2 className="text-xl text-center text-white/80">
        Explore Best Home Service & Repair near you
      </h2>

      <div className="mt-4 flex gap-4 items-center pb-24">
        <Input
          placeholder="Search"
          className="rounded-full md:w-[350px] bg-white text-black" // Change input styles
        />
        <button className="rounded-full h-[46px] w-[3rem] flex justify-center items-center bg-white text-black">
          {" "}
          {/* Change button styles */}
          <Search className="h-4 w-4 bg-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;