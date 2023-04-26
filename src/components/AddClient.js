import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClient = () => {
  const [addclient] = useMutation(ADD_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addclient({
      variables: {
        name: name,
        email: email,
        phone: phone,
      },
    });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-success mt-4"
        data-bs-toggle="modal"
        data-bs-target="#addClient"
      >
        Add Client
      </button>

      <div
        className="modal fade"
        id="addClient"
        aria-labelledby="addClientLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientLabel">
                Add Client
              </h1>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="exampleInputemail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputemail1"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPhone1">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone1"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
