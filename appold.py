
#Import libraries
from flask import Flask, render_template, url_for, request
import pandas as pd
import pickle 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.externals import joblib


#Create the application.
app = Flask(__name__)

# Load the model
model = pickle.load(open('./model/model.pkl','rb'))

@app.route('/')
def home():
    return render_template("index.html")


@app.route('/predict',methods=['POST'])
def predict():
    # Get the data from the POST request.
    if request.method == "POST":
        print(request.form['exp'])
        data = request.form['exp']
        #print("Data", model.predict([[data]]))
        # Make prediction using model loaded from disk as per the data.
        #prediction = model.predict([[data]])

        # Take the first value of prediction
        #output = prediction[0]

        return render_template("results.html", exp=data)


if __name__ == '__main__':
    app.run(debug=True)
