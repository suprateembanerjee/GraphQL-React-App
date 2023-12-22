const {gql} = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie!]
    }

    type Movie {
        id: ID!
        name: String!
        release: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: UsersResult
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }    

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = US

    }

    input updateUsername {
        id: ID!
        username: String!
    }
    input deleteUser {
        id: ID!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: updateUsername!): User
        deleteUser(input: deleteUser!): User
    }

    enum Nationality {
        Canada
        Brazil
        Germany
        Chile
        US
    }

    # Error Handling

    type UsersSuccessfulResult {
        users : [User!]!
    }

    type UsersErrorResult {
        message: String!
    }

    union UsersResult = UsersSuccessfulResult | UsersErrorResult
`;



module.exports = {typeDefs};