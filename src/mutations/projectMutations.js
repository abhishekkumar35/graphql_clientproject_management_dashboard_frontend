import { gql } from "@apollo/client";

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation AddProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
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
