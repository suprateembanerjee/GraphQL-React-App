const UserList = [
    {
        id: 1,
        name: 'John',
        username: 'john',
        age: 20,
        nationality: 'Canada',
        friends: [
            {
                id: 2,
                name: 'Pedro',
                username: 'PedroTech',
                age: 20,
                nationality: 'Brazil'
            },
            {
                id: 3,
                name: 'Sarah',
                username: 'sarahcameron',
                age: 25,
                nationality: 'US'
            }
        ]
    },
    {
        id: 2,
        name: 'Pedro',
        username: 'PedroTech',
        age: 20,
        nationality: 'Brazil'
    },
    {
        id: 3,
        name: 'Sarah',
        username: 'sarahcameron',
        age: 25,
        nationality: 'US'
    },
    {
        id: 4,
        name: 'Rafe',
        username: 'rafe123',
        age: 60,
        nationality: 'Germany',
        friends: [
            {
                id: 5,
                name: 'Kelly',
                username: 'kelly2019',
                age: 5,
                nationality: 'Chile'
            }
        ]
    },
    {
        id: 5,
        name: 'Kelly',
        username: 'kelly2019',
        age: 5,
        nationality: 'Chile'
    },
    {
        id: 6,
        name: 'Andrew',
        username: 'andrewschulz',
        age: 32,
        nationality: 'US'
    }
];

// const UserList = null;  // This triggers the error message

const MovieList = [
    {
        id: 1,
        name: 'Oppenheimer',
        release: 2023,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'Barbie',
        release: 2023,
        isInTheaters: true
    },
    {
        id: 3,
        name: 'Once Upon a Time in Hollywood',
        release: 2022,
        isInTheaters: true
    },
    {
        id: 4,
        name: 'Roma',
        release: 2020,
        isInTheaters: false
    },
    {
        id: 5,
        name: 'Cinema Paradiso',
        release: 1988,
        isInTheaters: true
    }
];

module.exports = {UserList, MovieList};