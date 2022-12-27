import { FC } from 'react';
import SocialIcon from '../atoms/SocialIcon';

interface Props {
  linkedin?: string;
  whatsapp?: string;
  twitter?: string;
}

const UserSocials: FC<Props> = ({ linkedin, twitter, whatsapp }) => {
  return (
    <div className="center gap-2">
      <SocialIcon
        href={linkedin}
        src="/icons/linkedin.svg"
        size={20}
        alt="Linkedin"
      />
      <SocialIcon
        href={twitter}
        src="/icons/twitter.svg"
        size={20}
        alt="Twitter"
      />
      <SocialIcon
        href={whatsapp}
        src="/icons/whatsapp.svg"
        size={20}
        alt="Whatsapp"
      />
    </div>
  );
};

export default UserSocials;
