import nodemailer from "nodemailer";

function sendEmail(email, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sonawaneshivtej12@gmail.com",
      pass: "gyomdzdzvmxrywax",
    },
  });

  var mailOptions = {
    from: "sonawaneshivtej12@gmail.com",
    to: email,
    subject: "Verification Email Tenders",
    html:
      "<h1>Welcome To Tenders</h1><a>you have successfully register to our applications, your login credentials are attached below</a><h2>Username : " +
      email +
      "</h2><h2>Password :" +
      password +
      " </h2><h1>Click on the link below to redirect</h1> http://localhost:3000/verifyuser/" +
      email,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendEmail;
