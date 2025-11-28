from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "milindnagne@gmail.com"
app.config["MAIL_PASSWORD"] = "YOUR_APP_PASSWORD"

mail = Mail(app)

@app.post("/contact")
def contact():
    data = request.json
    msg = Message(
        subject=f"Message from {data['name']}",
        sender=data["email"],
        recipients=["milindnagne@gmail.com"],
        body=data["message"]
    )
    mail.send(msg)
    return jsonify({"message": "Message sent successfully!"})

app.run(port=5000)
