from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Test route
@app.route("/tempRoute")
def tempRoute():
    return {"items": ["this", "is", "data"]}

if __name__ == "__main__":
    app.run(debug=True)