const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "milindnagne@gmail.com",
            pass: "YOUR_APP_PASSWORD"   // use Gmail App Password
        }
    });

    const mailOptions = {
        from: email,
        to: "milindnagne@gmail.com",
        subject: `Portfolio Message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Message sent successfully!" });
    } catch (err) {
        res.json({ message: "Failed to send message." });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
