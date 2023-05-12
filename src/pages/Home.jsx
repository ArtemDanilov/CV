import React from "react";

import Sidebar from "./sections/Sidebar/index";
import Main from "./sections/Main/index";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto md:grid md:grid-cols-[30%,70%] xl:my-8 xl:shadow-lg">
      <Sidebar />
      <Main />
    </main>
  );
};

export default Home;
