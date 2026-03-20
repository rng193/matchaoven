import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, product } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log('Email credentials not configured. Waitlist signup received:', email);
    return res.status(200).json({ message: 'Received.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ''),
    },
  });

  try {
    await transporter.sendMail({
      from: `"Matcha Oven" <${process.env.GMAIL_USER}>`,
      to: 'matchaoven@gmail.com',
      subject: 'New Waitlist Signup - Matcha Oven',
      html: `
        <h2>New Waitlist Signup</h2>
        <p>Someone signed up to be notified:</p>
        <p><strong>Email:</strong> ${email}</p>
        ${product ? `<p><strong>Product:</strong> ${product}</p>` : ''}
        <p><em>Signed up at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</em></p>
      `,
    });

    return res.status(200).json({ message: 'Added to waitlist.' });
  } catch (error) {
    console.error('Notify email error:', error);
    return res.status(500).json({ message: 'Failed to save email. Please try again.' });
  }
}
