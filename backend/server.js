const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rahulsaini8568677@gmail.com",      // अपनी gmail id
      pass: "mvuf argq bvsl easp",         // Gmail App password (16 character वाला)
    },
  });

  const mailOptions = {
    from: email,
    to: "rahulsaini8568677@gmail.com",         // अपनी gmail id
    subject: "Contact Form Entry",
    text: `नाम: ${name}\nईमेल: ${email}\nफोन: ${phone}\nसंदेश: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('Mail error:', error); // backend terminal में error पूरा दिखेगा
    res.status(500).json({ success: false, message: 'Error', error: error.toString() });
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));
