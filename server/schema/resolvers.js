const {UserList, MovieList} = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: (parent, args, context, info) => {
            // console.log(context.req.headers)
            // console.log(info)
            if (UserList) return {users: UserList}
            return {message: "There was an error"}
        },
        user: (parent, args) => {
            // This is where you can use SQL queries if querying from a database
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name});
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.release >= 2000 && movie.release <= 2020)
        }
    },

    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "UsersSuccessfulResult"
            }

            if (obj.message) {
                return "UsersErrorResult"
            }
            
            return null;
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastID = UserList[UserList.length - 1].id
            user.id = lastID + 1
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const {id, newUsername} = args.input
            let userUpdated
            UserList.forEach((user) => {
                if (user.id == Number(args.input.id)) {
                    user.username = args.input.username
                    userUpdated = user
                }
            })
            return userUpdated
        },
        deleteUser: (parent, args) => {
            const user = _.find(UserList, {id: Number(args.input.id)});
            _.remove(UserList, (user) => user.id == Number(args.input.id))
            console.log(user)
            return user
        }
    }
}

module.exports = {resolvers};