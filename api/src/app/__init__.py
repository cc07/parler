import os.path
import youtube_dl
import yaml
from flask import Flask, request, jsonify, send_from_directory
from app.logger import Logger

app = Flask(__name__)

def hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')

with open('./app/config.yml', 'r') as ymlfile:
    ydl_opts = yaml.load(ymlfile)
    ydl_opts['logger'] = Logger()
    ydl_opts['progress_hooks'] = [hook]

@app.route('/download', methods=['post'])
def download():

    data = request.get_json(silent=True)
    print('Request for download videoId: {}'.format(data['url']))

    with youtube_dl.YoutubeDL(ydl_opts) as ydl:

        info_dict = ydl.extract_info(data['url'], download=False)
        filename = '{}.mp3'.format(info_dict.get('title', None))

        if os.path.isfile('./storage/{}'.format(filename)):
            print('The same file exist, skip convertion.')
        else:
            ydl.download([data['url']])

    return jsonify({
        'status': 'completed',
        'filename': filename
    })

@app.route('/file/<filename>', methods=['get'])
def file(filename):
    return send_from_directory('../storage', filename)
