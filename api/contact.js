import nodemailer from 'nodemailer';

const requiredEnvVars = [
    'OVH_SMTP_HOST',
    'OVH_SMTP_PORT',
    'OVH_SMTP_USER',
    'OVH_SMTP_PASS',
    'CONTACT_TO_EMAIL',
];

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, message: 'Method not allowed' });
    }

    const missing = requiredEnvVars.filter((key) => !process.env[key]);
    if (missing.length) {
        return res.status(500).json({
            ok: false,
            message: `Missing environment variables: ${missing.join(', ')}`,
        });
    }

    const {
        firstName = '',
        lastName = '',
        email = '',
        subject = '',
        accountType = '',
        message = '',
    } = req.body || {};

    if (!firstName || !lastName || !email || !subject || !accountType || !message) {
        return res.status(400).json({ ok: false, message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.OVH_SMTP_HOST,
        port: Number(process.env.OVH_SMTP_PORT),
        secure: Number(process.env.OVH_SMTP_PORT) === 465,
        auth: {
            user: process.env.OVH_SMTP_USER,
            pass: process.env.OVH_SMTP_PASS,
        },
    });

    const html = `
        <h2>Nouvelle demande d'information - MyBestMetrics</h2>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type de compte:</strong> ${accountType}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `;

    try {
        await transporter.sendMail({
            from: `"MyBestMetrics Contact" <${process.env.OVH_SMTP_USER}>`,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `[Demande info] ${subject}`,
            text: `Nouvelle demande d'information - MyBestMetrics

Prénom: ${firstName}
Nom: ${lastName}
Email: ${email}
Type de compte: ${accountType}
Sujet: ${subject}

Message:
${message}
`,
            html,
        });

        return res.status(200).json({ ok: true, message: 'Message sent successfully' });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Unable to send message',
            error: error?.message || 'Unknown error',
        });
    }
}
