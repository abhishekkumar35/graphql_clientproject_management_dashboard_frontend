import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");
  const { data } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }, { query: GET_CLIENTS }],
    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleSubmitAddProject = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || clientId === "") {
      alert("Fill All The Details");
      return;
    }
    addProject({ variables: { name, description, status, clientId } });
  };
  return (
    <div className="mt-4">
      <>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addProject"
        >
          Add Project
        </button>

        <div
          className="modal fade"
          id="addProject"
          aria-labelledby="addClientLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addClientLabel">
                  Add Project
                </h1>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitAddProject}>
                  <div className="form-group">
                    <label htmlFor="exampleInputname1">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputname1"
                      aria-describedby="nameHelp"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputDescription1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleInputDescription1"
                      aria-describedby="DescriptionHelp"
                      placeholder="Enter Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputname1">Client Id</label>
                    <select
                      value={clientId}
                      onChange={(e) => {
                        setClientId(e.target.value);
                      }}
                      className="form-control"
                    >
                      <option value="">Select Client</option>
                      {data?.clients.map((client) => {
                        return (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputStatus1">Status</label>
                    <select
                      id="status"
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="new">Not Started</option>
                      <option value="progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-4 "
                    data-bs-dismiss="modal"
                  >
                    Add Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddProject;
