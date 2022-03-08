const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedlocations: [Location]
  }

  type Location{
    cityName: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  input LocationInput{
    cityName: String!
  }
 
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveLocation(location: LocationInput!):User
    removeLocation(_id: ID): User
  }

`;

module.exports = typeDefs;
