db = db.getSiblingDB('boardgames');

db.games.insertMany([
    {
        gameId: "1",
        name: "Juego1",
        players: { min: 3, max: 4 },
        ageLimits: { min: 10, max: 20 },
        originCountry: "Germany",
        cost: 50.99
    },
    {
        gameId: "2",
        name: "Juego2",
        players: { min: 2, max: 8 },
        ageLimits: { min: 30, max: 40 },
        originCountry: "USA",
        cost: 30.00
    },
    {
        gameId: "3",
        name: "Juego3",
        players: { min: 20, max: 800 },
        ageLimits: { min: 50, max: 60 },
        originCountry: "Argentina",
        cost: 300.00
    },
]);