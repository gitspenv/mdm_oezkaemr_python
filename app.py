from flask import Flask, request, render_template, send_file
import pandas as pd
import requests

app = Flask(__name__, static_url_path='/', static_folder='web', template_folder='templates')

@app.route("/")
def indexPage():
    return send_file("web/index.html")

@app.route('/api', methods=['POST'])
def api_call():
    global table_html
    data = request.get_json()  # get the request data in JSON format
    response = requests.post('https://www.pxweb.bfs.admin.ch/api/v1/en/px-x-0204000000_104/px-x-0204000000_104.px', json=data)
    
    # Extract relevant data from the JSON response
    json_data = response.json()
    years = json_data["dataset"]["dimension"]["Jahr"]["category"]["label"]
    emissions = json_data["dataset"]["value"]

    # Create a DataFrame
    df = pd.DataFrame({"Year": years.values(), "Emissions": emissions})
    print (df)

    # Render the DataFrame as HTML table
    table_html = df.to_html(classes='table table-striped', index=False)

    print(table_html)

    return render_template("table.html", table_html=table_html)

@app.route('/table')
def show_table():
    global table_html
    return render_template("table.html", table_html=table_html)
