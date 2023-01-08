import { NextApiRequest, NextApiResponse } from 'next';
import ApiHandler from '../../lib/middlewares/apiHandler';
import mail from '@sendgrid/mail';
import sendgridConfig from '../../lib/sendgrid/config';

mail.setApiKey(sendgridConfig.apiKey);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { to, mailDetails, templateId } = req.body;

  const dynamicTemplateData = {
    base_url: sendgridConfig.baseUrl,
    mailDetails
  };

  const message = {
    to,
    from: sendgridConfig.sender,
    templateId: templateId,
    dynamic_template_data: dynamicTemplateData
  };

  try {
    await mail.send(message);
    return res.status(200).json({ status: 'success' });
  } catch (e) {
    res.status(400).json({
      error: `Error in sendgrid Service. ${e}`,
      status: 'error'
    });
  }
};

export default ApiHandler({
  post: sendEmail
});
