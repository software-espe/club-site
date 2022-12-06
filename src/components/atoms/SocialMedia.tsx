import Image from 'next/image';
import Link from 'next/link';
import LinkedinIcon from '../.././assets/icons/linkedin-icon.svg';
import TelegramIcon from '../.././assets/icons/telegram-icon.svg';
import WhatsAppIcon from '../.././assets/icons/whatsapp-icon.svg';

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-x-5">
      <Link href="#">
        <Image src={LinkedinIcon} alt="Linkedin icon" width="32" height="32" />
      </Link>
      <Link href="#">
        <Image src={WhatsAppIcon} alt="WhatsApp icon" width="32" height="32" />
      </Link>
      <Link href="#">
        <Image src={TelegramIcon} alt="Telegram icon" width="32" height="32" />
      </Link>
    </div>
  );
};

export default SocialMedia;
