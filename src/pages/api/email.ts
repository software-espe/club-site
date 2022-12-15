import { NextApiRequest, NextApiResponse } from 'next';
import ApiHandler from '../../lib/middlewares/apiHandler';
import mail from '@sendgrid/mail';
import sendgridConfig from '../../lib/sendgrid/config';

mail.setApiKey(sendgridConfig.apiKey);

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
  const { to, templateData } = req.body;

  const dynamicTemplateData = {
    base_url: sendgridConfig.baseUrl,
    subject: templateData.subject,
    message: templateData.message
  };

  const message = {
    to,
    from: sendgridConfig.sender,
    templateId: sendgridConfig.joinTemplateId,
    dynamic_template_data: dynamicTemplateData
  };
  return mail
    .send(message)
    .then(() => {
      res.status(200).json({ status: 'success' });
    })
    .catch((error) => {
      res.status(400).json({
        error: `Error in sendgrid Service. ${error}`,
        status: 'error'
      });
    });
};

export default ApiHandler({
  post: sendEmail
});
