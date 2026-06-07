from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS
from parking_data import parking_lots
from route_engine import get_route
from chatbot import ask_ai

import joblib

app = Flask(__name__)
CORS(
    app,
    resources={
        r"/*": {
            "origins": "*"
        }
    }
)

model = joblib.load("traffic_model.pkl")

@app.route("/")
def home():
    return {
        "message": "MahaMove AI Backend Running"
    }

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    vehicle_count = data["vehicle_count"]
    crowd_count = data["crowd_count"]
    hour = data["hour"]

    prediction = model.predict(
        [[
            vehicle_count,
            crowd_count,
            hour
        ]]
    )[0]

    return jsonify({
        "congestion": prediction
    })
    
@app.route("/parking")
def parking():

    recommendations = []

    for lot in parking_lots:

        occupancy = (
            lot["occupied"] /
            lot["capacity"]
        ) * 100

        recommendations.append({
            "id": lot["id"],
            "occupancy": round(
                occupancy,
                2
            )
        })

    return jsonify(
        recommendations
    )

@app.route("/route")
def route():

    source = request.args.get(
        "source"
    )

    destination = request.args.get(
        "destination"
    )

    path = get_route(
        source,
        destination
    )

    return jsonify({
        "route": path
    })

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json

    question = data["question"]

    answer = ask_ai(question)

    return {
        "answer": answer
    }
if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )