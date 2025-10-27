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
      user: "rahulsaini8568677@gmail.com",     
      pass: "mvuf argq bvsl easp",        
    },
  });

  const mailOptions = {
    from: email,
    to: "rahulsaini8568677@gmail.com",        
    subject: "Contact Form Entry",
    text: `नाम: ${name}\nईमेल: ${email}\nफोन: ${phone}\nसंदेश: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('Mail error:', error); 
    res.status(500).json({ success: false, message: 'Error', error: error.toString() });
  }
});
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// --------- Yeh sirf ak baar rakho, hardcoded 5000 hatao ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));