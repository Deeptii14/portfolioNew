const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: process.env.HOST,

  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});
exports.sendMessage = async (req, res) => {
    const { name, email, message,phone } = req.body;

    try {
        let info = await transporter.sendMail({
          from: email, // sender address
          to: `deeptii1403@gmail.com`, // list of receivers
          subject: `Message from ${name} via Portfolio`, // Subject line
          text: `
          name:${name}
          email:${email},
          Message : ${message}
          Phone Number : ${phone}`,
          
        });
    
        console.log("Message sent: %s", info.messageId);
        return res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
      } catch (error) {
        console.log("Error while sending Mail", error);
        return res
        .status(500)
        .json({ success: false, message: "Could not send email" });
      }
  
  };