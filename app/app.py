from flask import Flask, request, jsonify, render_template
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson import ObjectId
import os

app = Flask(__name__)

# Configuración de MongoDB
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://root:password@mongo:27017/boardgames")
mongo = PyMongo(app)
db = mongo.db


# Página principal
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/juegos', methods=['GET'])
def juegos():
    games = db.games.find()
    return render_template('juegos.html', games=games)


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
    return jsonify({"id": id, **updated_game}), 200


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


@app.route('/games/<id>', methods=['PUT'])
def update_game(id):
    data = request.json
    updated_game = {
        "name": data.get('name'),
        "players": data.get('players'),
        "ageLimit": data.get('ageLimit'),
        "originCountry": data.get('originCountry'),
        "cost": data.get('cost')
    }
    db.games.update_one({"_id": ObjectId(id)}, {"$set": updated_game})
    return jsonify({"id": id, **updated_game}), 200


@app.route('/games/<id>', methods=['DELETE'])
def delete_game(id):
    try:
        result = db.games.delete_one({'_id': ObjectId(id)})
        if result.deleted_count == 0:
            return jsonify({"error": "Juego no encontrado"}), 404
        return jsonify({"message": "Juego eliminado exitosamente"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
