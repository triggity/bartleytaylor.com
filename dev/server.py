from flask import Flask, request
app = Flask(__name__)

@app.route("/email", methods=['POST', 'GET'])
def email():
    if request.method == 'POST':
        print request.form
        return "from flask"
    return request.method
if __name__ == "__main__":
    app.run(debug=True)
