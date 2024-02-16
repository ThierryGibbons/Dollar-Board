from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Test route
@app.route("/tempRoute", methods=["GET", "POST"])
def tempRoute():
    if request.method == "POST":
        data = request.json
        # Process the data here
        print(data)
    return {"items": ["this", "is", "data"]}

if __name__ == "__main__":
    app.run(debug=True)