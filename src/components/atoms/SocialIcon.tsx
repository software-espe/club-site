import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SizeProps } from '../../models/misc.interfaces';

interface baseProps {
  src: string;
  alt: string;
  href: string | undefined;
}

type Props = baseProps & SizeProps;

const SocialIcon: FC<Props> = ({
  src,
  alt,
  width,
  height,
  size,
  href = '#'
}) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={width || size}
        height={height || size}
      />
    </Link>
  );
};

export default SocialIcon;
