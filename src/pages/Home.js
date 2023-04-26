import React from "react";
import AddClient from "../components/AddClient";
import AddProject from "../components/AddProject";
import DisplayClientData from "../components/DisplayClientData";
import DisplayProjects from "../components/DisplayProjects";

const Home = () => {
  return (
    <>
      <div className="d-flex  align-items-center gap-3">
        <AddClient />
        <AddProject />
      </div>
      <DisplayProjects />
      <DisplayClientData />
    </>
  );
};

export default Home;
