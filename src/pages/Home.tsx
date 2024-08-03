import React from "react";
import PostInputTemplate from "../components/social/PostInputTemplate";

const Home: React.FC = () => {
  return (
    <div className="h-full flex m-6 justify-center md_8:justify-between gap-5">
      <div className="hidden gap-5 md_9:flex">
        <section className="w-12 h-auto bg-overlay-background rounded-xl shadow-xl hidden md_9:flex lg:hidden lg_12:flex"></section>
        <section className="hidden lg:flex w-56 lg_11:w-60 h-[550px] bg-overlay-background rounded-xl shadow-xl"></section>
      </div>
      <section className="w-full sm:w-[500px] md_8:w-[490px] md_9:w-[500px] lg:w-[450px] lg_11:w-[500px] h-[550px] rounded-xl shadow-xl">
        <PostInputTemplate />
      </section>
      <section className="hidden md_8:flex w-[240px] lg:w-56 lg_11:w-[240px] lg_12:w-[308px] h-[550px] bg-overlay-background rounded-xl shadow-xl"></section>
    </div>
  );
};

export default Home;
