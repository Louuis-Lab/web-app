import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // seu Gmail
        pass: process.env.SMTP_PASS, // App Password do Gmail
      },
    });

    await transporter.sendMail({
      from: `"LoouisLab Site" <${process.env.SMTP_USER}>`, // remetente sempre seu email
      to: process.env.CONTACT_EMAIL, // seu email (pode ser o mesmo)
      subject: `Novo contato de ${name}`,
      text: `${message}\n\nDe: ${name} (${email})`,
      html: `<p>${message}</p><p>De: ${name} (${email})</p>`,
    });

    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
