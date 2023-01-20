import { HTMLAttributes } from 'react';

const SessionBadge = ({ ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="center gap-2">
      <strong className="text-gray-super text-small font-normal">
        ¿Ya formas parte del Club?
      </strong>
      <button
        className="opacity-50 hover:opacity-100 text-small font-semibold"
        {...props}
      >
        Ingresa Aquí
      </button>
    </div>
  );
};

export default SessionBadge;
