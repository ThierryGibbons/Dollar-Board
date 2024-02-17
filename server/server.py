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
        print(data["message"])
        match data["message"]:
            case "Hello":
                return {"name": "Server", "text": "Hello there"}
            case "1":
                return {"name": "Server", "text": "You selected 1"}
            case "2":
                return {"name": "Server", "text": "You selected 2"}
            case other:
                return {"name": "Server", "text": "I don't understand"}
    else:
        return {"name": "Server", "text": "Hello from the server!"}

if __name__ == "__main__":
    app.run(debug=True)