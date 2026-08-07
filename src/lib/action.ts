'use server'
import {transporter} from "@/lib/nodemailer";

export async function sendDeleteRequest(formData: FormData) {
    try {
        const app = formData.get('app')
        const userId = formData.get('userId')
        const email = formData.get('email')
        const confirmation = formData.get('confirmation')
        console.log(`App: ${app}, User ID: ${userId}, Email: ${email}, Confirmation: ${confirmation} `)
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: "info@mytechys.co.uk",
            subject: "Techys App Support",
            html: `
      <!DOCTYPE html>
      <html lang="en">
      <h1>Account delete request</h1>
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
        await transporter.sendMail(mailOptions);
    } catch (e) {
        console.error(e);
    }
}