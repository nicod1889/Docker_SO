db = db.getSiblingDB('boardgames'); // Selecciona la base de datos

db.games.insertMany([
    {
        _id: "1",
        name: "Juego1",
        players: { min: 3, max: 4 },
        ageLimit: 10,
        originCountry: "Germany",
        cost: 50.99
    },
    {
        _id: "2",
        name: "Juego2",
        players: { min: 2, max: 8 },
        ageLimit: 8,
        originCountry: "USA",
        cost: 30.00
    },
    {
        _id: "3",
        name: "Juego3",
        players: { min: 20, max: 800 },
        ageLimit: 80,
        originCountry: "Argentina",
        cost: 300.00
    },
]);