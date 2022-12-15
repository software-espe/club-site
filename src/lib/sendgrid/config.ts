const config = {
  apiKey: process.env.SENDGRID_API_KEY,
  joinTemplateId: process.env.SENDGRID_JOIN_TEMPLATE_ID,
  baseUrl: process.env.SENDGRID_BASE_URL,
  sender: process.env.SENDGRID_EMAIL_SENDER
};

export default config as Record<string, string>;
