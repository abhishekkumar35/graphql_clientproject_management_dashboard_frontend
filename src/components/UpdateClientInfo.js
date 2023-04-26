import React, { useState, useEffect } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { UPDATE_CLIENT } from "../mutations/clientMutations";

const UpdateClientInfo = ({ client, onUpdate }) => {
  const [updateClient] = useMutation(UPDATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  console.log(client);
  useEffect(() => {
    setEmail(client.email);
    setName(client.name);
    setId(client.id);
    setPhone(client.phone);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient({
      variables: {
        id,
        name,
        email,
        phone,
      },
    });
    onUpdate(false);
  };
  return (
    <>
      <div className="m-4 border p-4">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateClientLabel">
                Update Client Information
              </h1>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputUpdatename1">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputUpdatename1"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                    value={client.name ? name : ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputUpdateemail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputUpdateemail1"
                    placeholder="email"
                    value={client.email ? email : ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputUpdatePhone1">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUpdatePhone1"
                    placeholder="Phone"
                    value={client.phone ? phone : ""}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-warning mt-2 ">
                  update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mt-2 mx-2"
                  onClick={() => {
                    onUpdate(false);
                  }}
                >
                  back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateClientInfo;
