import { gql } from "@apollo/client";
export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation updateClientInfo(
    $id: ID!
    $name: String
    $email: String
    $phone: String
  ) {
    updateClient(id: $id, name: $name, email: $email, phone: $phone) {
      name
      email
      phone
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
    }
  }
`;
