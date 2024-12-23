import nodemailer from "nodemailer";

exports.sendPasswordResetEmail = async (email, resetToken) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {F
      user: "your_email@gmail.com",
      pass: "your_email_password",
    },
  });

  const resetUrl = `https://your-frontend-url.com/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: "your_email@gmail.com",
    to: email,
    subject: "Password Reset Request",
    text: `You requested a password reset. Click this link to reset your password: ${resetUrl}`,
    html: `<p>You requested a password reset. Click this link to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};
