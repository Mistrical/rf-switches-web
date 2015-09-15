#!/usr/bin/python
from flask import Flask

app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    response = app.send_static_file("index.html")
    print response
    return response


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')
