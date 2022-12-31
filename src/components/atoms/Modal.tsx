import { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';

interface Modal {
  isOpen: boolean;
  onClose?: () => void;
  title?: string | JSX.Element;
  center?: boolean;
  showHeader?: boolean;
  className?: string;
  closeButtonTestId?: string;
  children?: ReactNode;
  titleStyle?: string;
  showCloseButton?: boolean;
}

const Modal: FC<Modal> = ({
  children,
  isOpen,
  onClose,
  title,
  className,
  showHeader = true,
  showCloseButton = true
}) => {
  if (isOpen) {
    return (
      <Fragment>
        <div className="center overflow-hidden fixed inset-0 z-50">
          <div className="min-w-[300px]">
            <div className="rounded-lg shadow-lg flex flex-col w-full bg-gray p-2">
              {showHeader && (
                <section id="Modal Header" className="relative center p-4">
                  {title}
                  {showCloseButton && (
                    <Image
                      src="/icons/close.svg"
                      width={25}
                      height={25}
                      alt="close"
                      onClick={onClose}
                      className={`absolute my-auto right-4 p-[6px] cursor-pointer opacity-40 
                      rounded-full hover:bg-gray-light hover:opacity-100`}
                    />
                  )}
                </section>
              )}
              <section id="Modal Body" className={`p-4  ${className}`}>
                {children}
              </section>
            </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-30 bg-black" />
      </Fragment>
    );
  }
  return <></>;
};

export default Modal;
