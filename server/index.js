const {ApolloServer} = require("apollo-server");
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers');

const server = new ApolloServer({typeDefs, resolvers, context :({req}) => {
    return {Example: 'This is an example context', req}
}});

server.listen().then(({url}) => {
    console.log(`Your API is running at ${url}`);
})