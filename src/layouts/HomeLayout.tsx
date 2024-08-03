import React from "react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <main className="h-auto w-screen bg-base-background text-base-text">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
