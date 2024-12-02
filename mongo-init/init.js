db = db.getSiblingDB('boardgames');

db.games.insertMany([
    {
        gameId: "1",
        name: "Juego1",
        players: { min: 2, max: 4 },
        ageLimits: { min: 8, max: 12 },
        originCountry: "Alemania",
        cost: 25.99
    },
    {
        gameId: "2",
        name: "Juego2",
        players: { min: 3, max: 6 },
        ageLimits: { min: 10, max: 18 },
        originCountry: "Estados Unidos",
        cost: 35.50
    },
    {
        gameId: "3",
        name: "Juego3",
        players: { min: 1, max: 5 },
        ageLimits: { min: 7, max: 15 },
        originCountry: "Argentina",
        cost: 20.00
    },
    {
        gameId: "4",
        name: "Juego4",
        players: { min: 4, max: 8 },
        ageLimits: { min: 12, max: 20 },
        originCountry: "España",
        cost: 50.99
    },
    {
        gameId: "5",
        name: "Juego5",
        players: { min: 2, max: 2 },
        ageLimits: { min: 10, max: 99 },
        originCountry: "Italia",
        cost: 15.75
    },
    {
        gameId: "6",
        name: "Juego6",
        players: { min: 6, max: 12 },
        ageLimits: { min: 15, max: 25 },
        originCountry: "Francia",
        cost: 40.00
    },
    {
        gameId: "7",
        name: "Juego7",
        players: { min: 1, max: 1 },
        ageLimits: { min: 5, max: 10 },
        originCountry: "Japón",
        cost: 10.99
    },
    {
        gameId: "8",
        name: "Juego8",
        players: { min: 2, max: 6 },
        ageLimits: { min: 8, max: 16 },
        originCountry: "Canadá",
        cost: 27.49
    },
    {
        gameId: "9",
        name: "Juego9",
        players: { min: 3, max: 10 },
        ageLimits: { min: 18, max: 50 },
        originCountry: "Brasil",
        cost: 60.00
    },
    {
        gameId: "10",
        name: "Juego10",
        players: { min: 4, max: 8 },
        ageLimits: { min: 12, max: 18 },
        originCountry: "México",
        cost: 35.20
    },
    {
        gameId: "11",
        name: "Juego11",
        players: { min: 5, max: 10 },
        ageLimits: { min: 20, max: 40 },
        originCountry: "Reino Unido",
        cost: 55.00
    },
    {
        gameId: "12",
        name: "Juego12",
        players: { min: 2, max: 4 },
        ageLimits: { min: 6, max: 12 },
        originCountry: "Australia",
        cost: 18.75
    },
    {
        gameId: "13",
        name: "Juego13",
        players: { min: 3, max: 7 },
        ageLimits: { min: 10, max: 20 },
        originCountry: "India",
        cost: 45.99
    },
    {
        gameId: "14",
        name: "Juego14",
        players: { min: 4, max: 10 },
        ageLimits: { min: 14, max: 28 },
        originCountry: "China",
        cost: 30.50
    },
    {
        gameId: "15",
        name: "Juego15",
        players: { min: 2, max: 5 },
        ageLimits: { min: 8, max: 16 },
        originCountry: "Sudáfrica",
        cost: 22.00
    }
]);
