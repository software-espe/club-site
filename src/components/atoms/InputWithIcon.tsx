import React from 'react'
import Image from 'next/image';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  src: string;
  alt: string;
}

const InputWithIcon = ({ ...props }: Props) => {
  return (
    <div className="flex flex-row gap-x-8">
      <Image
        src={props.src}
        alt={props.alt}
        width={28}
        height={28}
      />
      <input
        type="text"
        className="bg-gray-light no-outline rounded-md px-5 py-2 w-full placeholder:text-gray-placeholder"
        {...props}
      />
    </div>
  )
}

export default InputWithIcon
