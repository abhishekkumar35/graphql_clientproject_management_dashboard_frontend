import React from "react";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">
        <ul className="list-group">
          <li className="list-group-item">name {client.name}</li>
          <li className="list-group-item">email {client.email}</li>
          <li className="list-group-item">phone {client.phone}</li>
        </ul>
      </h5>
    </>
  );
};

export default ClientInfo;
