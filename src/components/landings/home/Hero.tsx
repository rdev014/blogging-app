import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/nethunt.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video> */}
       <img
            src="/assets/images/screenshotog.png"
            alt="Inspiration"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50 px-4">
        {/* <h1 className="text-4xl md:text-6xl font-bold"> Explore Ideas, Share Stories</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          A platform to explore, write, and share your understanding with the world.
          Connect, grow, and inspire.
        </p> */}
        <button className=" mt-52 ml-10 px-8 py-4 bg-brand-600  text-white text-lg md:text-xl font-medium rounded-full shadow-lg hover:bg-brand-700 focus:ring-4 focus:ring-brand-500 focus:outline-none transition-all">
          Start Reading
        </button>
       
      </div>
    
    </section>
  );
}
