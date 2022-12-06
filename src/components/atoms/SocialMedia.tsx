import LinkedinIcon from '../.././assets/icons/linkedin-icon.svg';
import SocialIcon from './SocialIcon';
import TelegramIcon from '../.././assets/icons/telegram-icon.svg';
import WhatsAppIcon from '../.././assets/icons/whatsapp-icon.svg';

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-x-5">
      <SocialIcon icon={LinkedinIcon} alt="Linkedin icon" url="#" />
      <SocialIcon icon={WhatsAppIcon} alt="WhatsApp icon" url="#" />
      <SocialIcon icon={TelegramIcon} alt="Telegram icon" url="#" />
    </div>
  );
};

export default SocialMedia;
