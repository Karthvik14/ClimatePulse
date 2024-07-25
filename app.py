import subprocess
# Run data.ipynb using subprocess before starting the Flask app
subprocess.run(['jupyter', 'nbconvert', '--execute', '--to', 'notebook', 'data.ipynb'])

import json
from flask import Flask, render_template
import requests
from datetime import datetime


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/visualizations')
def visualizations():
    # Load the sentimentCounts data from the JSON file
    with open('sentimentCounts.json') as json_file:
        sentimentCounts = json.load(json_file)
    return render_template('visualizations.html', sentimentCounts=sentimentCounts)

@app.route('/news')
def news():
    # Make a request to NewsAPI to fetch the news articles
    api_key = '251809f87af04b0999658476f153f7de'
    current_date = datetime.now().strftime("%Y-%m-01")
    url = f'https://newsapi.org/v2/everything?q=climate%20change&from={current_date}&sortBy=popularity&apiKey={api_key}'

    print('Current Date:', current_date)  # Print the current date
    print('URL:', url)  # Print the URL in the console

    response = requests.get(url)
    articles = response.json().get('articles', [])
    top_10_articles = articles[:10]  # Slice the articles list to include only the first 10 items

    return render_template('news.html', articles=top_10_articles)


if __name__ == '__main__':
    app.run(debug=True)
