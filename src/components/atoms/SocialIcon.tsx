import Image from 'next/image';
import Link from 'next/link';

interface Props {
  icon: string;
  alt: string;
  url: string;
}

const SocialIcon = ({ icon, alt, url }: Props) => {
  return (
    <Link href={url}>
      <Image src={icon} alt={alt} width="32" height="32" />
    </Link>
  );
};

export default SocialIcon;
