import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query Get_Clients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
