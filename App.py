import os
from flask import Flask, request
from flask_cors import CORS, cross_origin
from twilio .rest import Client
username = os.environ['TWILIO_ACCOUNT_SID']
password = os.environ['TWILIO_AUTH_TOKEN']
phone = os.environ['TWILIO_PHONE_NUMBER']
app = Flask(__name__,static_folder='cityhive_FE/build',static_url_path='')
cors = CORS(app)

@app.route("/sms",methods=["GET", "POST"])
def sms():
    client = Client(username,password)
    if request.method == "POST":
      print(request.form)
      message = client.messages \
                .create(
                     body=request.form['Body'],
                     from_=phone,
                     to=request.form['To']
                 )
    elif request.method == "GET":
      res = []
      for message in client.messages.list():
        res.append({
          'from':message.from_,
          'to':message.to,
          'body':message.body,
          'time':message.date_sent
        })
      return res


if __name__ == "__main__":
  app.run()


