from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/", methods=["GET"])
def bienvenue():
    return jsonify({"msg": "Projet ProgWeb de Ziad HASNI et Yacine AHMED YAHIA"})


if __name__ == "__main__":
    app.run(debug=True)
