from logging import getLogger, _nameToLevel
from flask import Flask

from modules import fread

getLogger("werkzeug").setLevel(_nameToLevel["ERROR"])

app = Flask(
    "AttAditya",
    static_folder="res",
    static_url_path="/res"
)

@app.route("/")
def home():
    return fread("index.html")

if __name__ == "__main__":
    host = input("Host IP: ")
    port = input("Port: ")

    app.run(host=host, port=port)

