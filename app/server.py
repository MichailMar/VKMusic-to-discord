from flask import Flask, request
from flask_cors import CORS, cross_origin
from pypresence import Presence
from time import time

presence = Presence("")  # client id here
presence.connect()

app = Flask(__name__)
cors = CORS(app)

@app.route("/", methods=["POST"])
@cross_origin()
def index():
    print(request.json)
    
    presence.update(  # the first line in the status is the application name
        state=request.json['title'],  # third line in status
        details=request.json['artist'],  # second line in the status
        start=time(),  # start timer
        large_image=request.json['img'],  # large image, enter its name in large_image
        small_image=request.json['img'],  # small image, enter its name in small_image
    )

    return "1"

app.run(port=1221)