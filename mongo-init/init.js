db = db.getSiblingDB('boardgames');

db.games.insertMany([
    {
        gameId: "1",
        name: "Monopoly",
        players: { min: 3, max: 8 },
        ageLimits: { min: 8, max: 12 },
        originCountry: "Alemania",
        cost: 25.99
    },
    {
        gameId: "2",
        name: "TEG",
        players: { min: 3, max: 6 },
        ageLimits: { min: 10, max: 18 },
        originCountry: "Estados Unidos",
        cost: 35.50
    },
    {
        gameId: "3",
        name: "Crisis",
        players: { min: 1, max: 5 },
        ageLimits: { min: 7, max: 15 },
        originCountry: "Argentina",
        cost: 20.00
    },
    {
        gameId: "4",
        name: "Clue",
        players: { min: 4, max: 8 },
        ageLimits: { min: 12, max: 20 },
        originCountry: "España",
        cost: 50.99
    },
    {
        gameId: "5",
        name: "Life",
        players: { min: 2, max: 2 },
        ageLimits: { min: 10, max: 99 },
        originCountry: "Italia",
        cost: 15.75
    },
    {
        gameId: "6",
        name: "Ajedrez",
        players: { min: 6, max: 12 },
        ageLimits: { min: 15, max: 25 },
        originCountry: "Francia",
        cost: 40.00
    },
    {
        gameId: "7",
        name: "Damas",
        players: { min: 1, max: 1 },
        ageLimits: { min: 5, max: 10 },
        originCountry: "Japón",
        cost: 10.99
    },
    {
        gameId: "8",
        name: "Ludo",
        players: { min: 2, max: 6 },
        ageLimits: { min: 8, max: 16 },
        originCountry: "Canadá",
        cost: 27.49
    },
    {
        gameId: "9",
        name: "Backgammon",
        players: { min: 3, max: 10 },
        ageLimits: { min: 18, max: 50 },
        originCountry: "Brasil",
        cost: 60.00
    },
    {
        gameId: "10",
        name: "El Estanciero",
        players: { min: 4, max: 8 },
        ageLimits: { min: 12, max: 18 },
        originCountry: "México",
        cost: 35.20
    },
    {
        gameId: "11",
        name: "Quién Es Quién",
        players: { min: 5, max: 10 },
        ageLimits: { min: 20, max: 40 },
        originCountry: "Reino Unido",
        cost: 55.00
    },
    {
        gameId: "12",
        name: "Truco",
        players: { min: 2, max: 4 },
        ageLimits: { min: 6, max: 12 },
        originCountry: "Australia",
        cost: 18.75
    },
    {
        gameId: "13",
        name: "Dominó",
        players: { min: 3, max: 7 },
        ageLimits: { min: 10, max: 20 },
        originCountry: "India",
        cost: 45.99
    },
    {
        gameId: "14",
        name: "Jenga",
        players: { min: 4, max: 10 },
        ageLimits: { min: 14, max: 28 },
        originCountry: "China",
        cost: 30.50
    },
    {
        gameId: "15",
        name: "Carrera de Mente",
        players: { min: 2, max: 5 },
        ageLimits: { min: 8, max: 16 },
        originCountry: "Sudáfrica",
        cost: 22.00
    }
]);
