import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputDate = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col m-4">
      <label className="text-small mb-2">{props.label}</label>
      <input type="date" className="bg-gray-light no-outline rounded-md p-2 w-full" {...props} />
    </div>
  )
}

export default InputDate
