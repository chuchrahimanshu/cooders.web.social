import React from "react";
import Header from "../components/global/Header";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <main className="h-screen overflow-hidden w-auto bg-base-background text-base-text pt-1 scrollbar-none">
      <section className="max-w-[1500px] m-auto">
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default HomeLayout;
