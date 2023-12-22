import React, { useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";

function DisplayUsers() {

    const QUERY_ALL_USERS = gql `
        query GetAllUsers {
            users {
                name
                id
                username
                age
            }
        }
    `

    const {data: userData, loading: userDataLoading, error: userDataError, refetch: refetch} = useQuery(QUERY_ALL_USERS);

    if (userDataLoading) {
        return <h1>Data is Loading...</h1>
    }

    if (userData) {
        console.log(userData)
    }

    if (userDataError) {
        console.log(userDataError)
    }

    return <div>
        {userData && 
            userData.users.map((user) => {
                return <div>
                    <h1>{user.name}</h1>
                    <h2>ID: {user.id}</h2>
                    <h2>Age: {user.age}</h2>
                    <h2>@{user.username}</h2>
                    </div>
            })
        }

        </div>
}

function DisplayMovies() {
    
    const QUERY_ALL_MOVIES = gql `
        query GetAllUsers {
            movies {
                name
                release
            }
        }
    `

    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);

    return <div>
        {movieData &&
            movieData.movies.map((movie) => {
                return <div>
                    <h1>{movie.name}</h1> <h2>was released in {movie.release}</h2>
                    </div>
            })
        }
        </div>
}

function SearchMovie() {

    const QUERY_MOVIE = gql `
        query Movie($name: String!) {
        movie(name: $name) {
            name
            release
            isInTheaters
            }
        }
    `;

    const [movieSearched, setMovieSearched] = useState("");
    const [
        fetchMovie, 
        {data: movieSearchedData, error: MovieError}
    ] = useLazyQuery(QUERY_MOVIE);

    if (MovieError) {
        console.log(MovieError)
    }

    return <div>
        <div>
            <input type='text' placeholder="Name of Movie" onChange={(event) => {
                setMovieSearched(event.target.value)
                }}/>
            <button onClick={() => {
                fetchMovie({variables: {
                    name: movieSearched,
                }})
            }}>Fetch Data</button>
            <div>{movieSearchedData && (
                <div> 
                    {" "}<h3> Movie Name: {movieSearchedData.movie.name}</h3>{" "}
                    {" "}<h3> Movie release: {movieSearchedData.movie.release}</h3>{" "}
                </div>
                )}
                {MovieError && <h3>Movie not found.</h3>}
            </div>
            
        </div>

        </div>
}

function CreateUser() {

    const CREATE_USER = gql `mutation CreateUser($input: CreateUserInput!){
        createUser(input: $input) {
          id
          name
          age
      
        }
      }
    `
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");

    const[createUser] = useMutation(CREATE_USER)

    return <div>
            <div>
                <input type='text' placeholder='Name' onChange={(event) => {setName(event.target.value)}}/>
                <input type='number' placeholder='Age' onChange={(event) => {setAge(event.target.value)}}/>
                <input type='text' placeholder='Username' onChange={(event) => {setUserName(event.target.value)}}/>
                <input type='text' placeholder='Nationality' onChange={(event) => {setNationality(event.target.value)}}/>

                <button onClick={() => {
                    createUser({variables: {input: {name, username, age:Number(age), nationality}}
                    })
                }}>Create User</button>
            </div>
        </div>
}

function DeleteUser() {

    const DELETE_USER = gql `mutation deleteUser($input: deleteUser!) {
        deleteUser(input: $input) {
          id
          username
          friends {
            name
          }
        }
      }
    `
    const [id, setID] = useState(0);

    const[deleteUser] = useMutation(DELETE_USER)

    return <div>
            <div>
                <input type='number' placeholder='ID' onChange={(event) => {setID(event.target.value)}}/>

                <button onClick={() => {
                    deleteUser({variables: {input: {id:Number(id)}}
                    })
                }}>Delete User</button>
            </div>
        </div>
}

export {DeleteUser, DisplayMovies, DisplayUsers, SearchMovie, CreateUser}