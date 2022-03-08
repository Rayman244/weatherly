import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_LOCATION = gql`
  mutation saveLocation(
    $location: LocationInput!) {
    saveLocation(location: $location) {
      _id
      username
      email
     
    }
  }
`;
export const REMOVE_LOCATION = gql`
  mutation removeLocation($locationId: ID!) {
    removeRecipe(locationId: $loctionId) {
      _id
      username
      email
    }
  }
`;
