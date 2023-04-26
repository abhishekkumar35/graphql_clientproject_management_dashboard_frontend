import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import UpdateClientInfo from "./UpdateClientInfo";

const DisplayClientData = () => {
  const [selectedClientId, setSelectedClientId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    onError: (error) => {
      console.log(error.message);
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  const handleDelete = (id) => {
    console.log(id);
    deleteClient({ variables: { id } });
    setShowModal(false);
  };
  const handleModal = (c) => {
    setSelectedClientId(c.id);
    setShowModal(true);
  };
  return (
    <table className="w-100 ">
      <thead>
        <tr>
          <th>Client Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map((client) => {
          return (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                {
                  <>
                    {!showModal && (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={(e) => handleModal(client)}
                      >
                        Update Client
                      </button>
                    )}
                    {showModal && selectedClientId === client.id && (
                      <UpdateClientInfo
                        key={client.id}
                        client={client}
                        onUpdate={setShowModal}
                      />
                    )}
                  </>
                }
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger px-4"
                  onClick={() => {
                    handleDelete(client.id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayClientData;
