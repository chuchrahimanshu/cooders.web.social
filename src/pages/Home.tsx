import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-full flex m-6 justify-center md_8:justify-between gap-5">
      <div className="hidden gap-5 md_9:flex">
        <section className="min-w-12 h-auto bg-red-900 rounded-xl shadow-xl hidden md_9:flex lg:hidden lg_12:flex"></section>
        <section className="hidden lg:flex min-w-56 lg_11:min-w-60 h-[550px] bg-red-900 rounded-xl shadow-xl"></section>
      </div>
      <section className="min-w-full sm:min-w-[500px] md_8:min-w-[490px] md_9:min-w-[500px] lg:min-w-[450px] lg_11:min-w-[500px] h-[550px] bg-red-900 rounded-xl shadow-xl"></section>
      <section className="hidden md_8:flex min-w-[240px] lg:min-w-56 lg_11:min-w-[240px] lg_12:min-w-[308px] h-[550px] bg-red-900 rounded-xl shadow-xl"></section>
    </div>
  );
};

export default Home;
