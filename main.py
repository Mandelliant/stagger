from flask import Flask, render_template, request, jsonify
from threading import Thread
from urllib.request import urlopen

app = Flask('stagger-1', static_folder='static', template_folder='template')


@app.route('/random', methods=['POST'])
def ajax_request():
    page = request.get_json()
    print('random page', page.get('name'))
    #fetch url
    url = urlopen('https://'+page.get('url'))
    content = url.read()
    return jsonify(content=content.decode("utf-8"))


@app.route('/')
def home():
    return render_template('index.html')


def start_server():
    app.run(host='0.0.0.0', port=8080)


flask_thread = Thread(target=start_server)
flask_thread.start()
