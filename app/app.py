from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os

app = Flask(__name__)

# Configuración de MongoDB
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://root:password@mongo:27017/boardgames")
mongo = PyMongo(app)
db = mongo.db

# Modelo de datos: Juegos de mesa
@app.route('/games', methods=['POST'])
def create_game():
    data = request.json
    game = {
        "name": data['name'],
        "players": data.get('players', {"min": 0, "max": 0}),
        "ageLimit": data.get('ageLimit', 0),
        "originCountry": data.get('originCountry', ""),
        "cost": data.get('cost', 0.0)
    }
    result = db.games.insert_one(game)
    return jsonify({"id": id, **game}), 201


@app.route('/games', methods=['GET'])
def get_games():
    games = db.games.find()
    result = []
    for game in games:
        result.append({
            "id": str(game["_id"]),
            "name": game["name"],
            "players": game["players"],
            "ageLimit": game["ageLimit"],
            "originCountry": game["originCountry"],
            "cost": game["cost"]
        })
    return jsonify(result), 200


#@app.route('/games/<id>', methods=['PUT'])
#def update_game(id):
#    data = request.json
#    updated_game = {
#        "name": data.get('name'),
#        "players": data.get('players'),
#        "ageLimit": data.get('ageLimit'),
#        "originCountry": data.get('originCountry'),
#        "cost": data.get('cost')
#    }
#    db.games.update_one({"_id": ObjectId(id)}, {"$set": updated_game})
#    return jsonify({"id": id, **updated_game}), 200


@app.route('/games/<id>', methods=['DELETE'])
def delete_game(id):
    db.games.delete_one({"_id": ObjectId(id)})
    return jsonify({"id": id, "message": "Juego eliminado"}), 204


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
