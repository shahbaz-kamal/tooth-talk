import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className=" bg-color-secondary">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </main>

      <footer className="bg-base-200">
        <section className="container mx-auto">
          <Footer></Footer>
        </section>
      </footer>
    </div>
  );
};

export default MainLayout;
