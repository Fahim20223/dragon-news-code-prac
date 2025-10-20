import React from "react";
import Header from "./Header";
import LatestNews from "./LatestNews";
import Navbar from "./Navbar";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
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
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
