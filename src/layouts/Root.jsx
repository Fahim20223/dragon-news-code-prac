import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 my-2 gap-6">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
