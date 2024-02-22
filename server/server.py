from flask import Flask, request
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)

# Test route
@app.route("/tempRoute", methods=["GET", "POST"])
def tempRoute():
    if request.method == "POST":
        data = request.json
        # Process the data here
        print(data["message"])
        match data["message"].lower():
            case "hello":
                return {"name": "Server", "text": "Hello there"}
            case "budget":
                # Read the JSON file
                with open("budget.json", "r") as file:
                    data = json.load(file)
                    # Convert data to string
                    data_str = json.dumps(data)

                # Put the data here
                return {"name": "Server", "text": data_str}
            case "2":
                return {"name": "Server", "text": "You selected 2"}
            case other:
                return {"name": "Server", "text": "I don't understand"}
    else:
        return {"name": "Server", "text": "Hello from the server!"}

# If there is no json file, create one
if not os.path.isfile("budget.json"):
    with open("budget.json", "w") as file:
        file.write('{"House Bills": 0, "Personal Bills": 0, "Food": 0, "House Other": 0, "Entertainment": 0, "Savings": 0}')


if __name__ == "__main__":
    app.run(debug=True)