import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {CreateUser, DeleteUser, DisplayMovies, DisplayUsers, SearchMovie} from './DisplayData'



loadErrorMessages()
loadDevMessages()

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  })
  return <ApolloProvider client = {client}>
    <div className="App">
      <DisplayUsers />
      {/* <DisplayMovies /> */}
      {/* <SearchMovie /> */}
      {/* <CreateUser /> */}
      <DeleteUser />

    </div>
    </ApolloProvider>
}

export default App
