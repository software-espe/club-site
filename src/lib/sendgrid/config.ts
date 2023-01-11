const config = {
  apiKey: process.env.SENDGRID_API_KEY,
  baseUrl: process.env.SENDGRID_BASE_URL,
  sender: process.env.SENDGRID_EMAIL_SENDER
};

export default config as Record<string, string>;
