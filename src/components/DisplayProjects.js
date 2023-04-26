import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

const DisplayProjects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error : {error.message}</div>;
  return (
    <ul className="d-flex flex-wrap">
      {data.projects.map((project) => {
        // console.log(project.id);
        return (
          <li
            key={project.id}
            className="card d-flex flex-wrap p-4 border-3"
            style={{ maxWidth: "300px", minWidth: "200px", margin: "10px" }}
          >
            <p>
              <b>Name</b> {project.name}
            </p>
            <p>
              <b>Status</b> {project.status}
            </p>
            <p>
              <b>client Name</b> {project?.client?.name}
            </p>

            <Link to={`/project/${project.id}`} className="btn btn-success">
              details
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayProjects;
