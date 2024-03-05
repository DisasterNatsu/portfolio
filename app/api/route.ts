import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json(); // res now contains body

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json({ message: "Invalid Request" });
  }

  // Use your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "shilajitdutta514@gmail.com",
      pass: process.env.APP_PASSWORD_SMTP,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "shilajitdutta514@gmail.com",
      subject: `New Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, error: "Internal Server Error" });
  }
}
