'use server'
import {transporter} from "@/lib/nodemailer";

export async function sendDeleteRequest(formData: FormData) {
    const app = formData.get('app')
    const userId = formData.get('userId')
    const email = formData.get('email')
    const confirmation = formData.get('confirmation')
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: "info@mytechys.co.uk",
        subject: "Wheel-Line login OTP",
        html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>Account delete request</head>
      <body>
      <div>
      <p>App: ${app}</p>
      <p>User ID: ${userId}</p>
      <p>Email: ${email}</p>
      <p>Confirmation: ${confirmation}</p>
</div>
</body>
</html>
`,
    };

    transporter.sendMail(mailOptions);
}