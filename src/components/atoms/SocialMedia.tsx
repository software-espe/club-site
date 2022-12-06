import SocialIcon from './SocialIcon';

const SocialMedia = () => {
  return (
    <div className="center gap-5">
      <SocialIcon
        src="/icons/linkedin.svg"
        size={32}
        alt="Linkedin icon"
        href={process.env.LINKEDIN_URL}
      />
      <SocialIcon
        src="/icons/whatsapp.svg"
        size={32}
        alt="WhatsApp icon"
        href={process.env.WHATSAPP_URL}
      />
      <SocialIcon
        src="/icons/telegram.svg"
        size={32}
        alt="Telegram icon"
        href={process.env.TELEGRAM_URL}
      />
    </div>
  );
};

export default SocialMedia;
