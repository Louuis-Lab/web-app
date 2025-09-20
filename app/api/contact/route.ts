// /app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Configuração para Outlook/Office365
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"LoouisLab Site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Novo contato de ${name}`,
      text: `${message}\n\nDe: ${name} (${email})`,
      html: `<p>${message}</p><p><strong>De:</strong> ${name} (${email})</p>`,
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro detalhado:", error);
    return NextResponse.json(
      { 
        message: "Erro ao enviar email. Por favor, tente novamente mais tarde.",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Método não permitido" }, { status: 405 });
}