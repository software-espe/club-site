import { ChangeEvent } from 'react';
import { ErrorMessage, useField } from 'formik';
import { isFileUrl } from '../../lib/tools/file.utils';
import { useFile } from '../../hooks/useFile';
import FieldError from '../atoms/FieldError';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  inputId: string;
  name: string;
  acceptedExtensions: string[];
  width?: number;
  height?: number;
}

const FormPhotoInput = ({
  inputId,
  name,
  acceptedExtensions,
  width,
  height
}: Props) => {
  const [fileIsInvalid, setFileIsInvalid] = useState(false);
  const [field, , { setValue }] = useField(name);
  const errorMessage = 'La imagen no es válida';

  const handleImageChange = (value: File | string | undefined) => {
    setValue(value);
  };

  const preventDefault = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const getImageName = (name: string) => {
    const extension = `${name.split('.').pop()}`;
    const date = new Date();
    return `${name}-${date.toDateString()}.${extension}`;
  };

  const isValidExtensions = (extension: string): boolean => {
    return acceptedExtensions.includes(extension);
  };

  const fileIsAccepted = (file: File): boolean => {
    const extension = file.name.split('.').pop();
    return isValidExtensions(`.${extension?.toLowerCase()}`);
  };

  const handleAddPhoto = async (fileList: FileList) => {
    const acceptedFiles: File[] = Array.from(fileList).filter((file) =>
      fileIsAccepted(file)
    );
    if (acceptedFiles.length > 0) {
      const file = new File(acceptedFiles, getImageName(acceptedFiles[0].name));
      handleImageChange(file);
    } else {
      setFileIsInvalid(true);
    }
  };

  const handleUpdateProfilePhoto = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files as FileList;
    if (fileList.length > 0) {
      setFileIsInvalid(false);
      handleRemoveFile();
      await handleAddPhoto(fileList);
    }
  };

  const handleRemoveFile = () => {
    //TODO remove file from server
    if (isFileUrl(field.value)) {
      console.error('file removed');
    }
    handleImageChange(undefined);
  };

  const inputWithFile = () => {
    const { displayFileOrUrlSrc, displayFileOrUrlAlt } = useFile(field.value);

    return (
      <div
        className="relative rounded-lg overflow-hidden "
        style={{ width: width, height: height }}
      >
        <img
          className="object-cover w-full h-full"
          src={displayFileOrUrlSrc()}
          alt={displayFileOrUrlAlt()}
        />
        <label
          htmlFor={inputId}
          className="absolute center-col cursor-pointer w-full
          h-full bottom-0 bg-[rgba(32,32,32,0.6)] opacity-0 hover:opacity-100
          transition-all ease-in-out"
        >
          <Image src="/icons/upload.svg" alt="upload" width={60} height={60} />
          <span className="text-xs mt-2">Cambiar foto</span>
        </label>
        <input
          id={inputId}
          name={name}
          type="file"
          className="hidden"
          onChange={handleUpdateProfilePhoto}
          accept={acceptedExtensions.join(', ')}
        />
      </div>
    );
  };

  const inputWithoutFile = () => (
    <div className="flex flex-col">
      <div
        className="border rounded-full"
        onDrop={async (event: React.DragEvent<HTMLDivElement>) => {
          preventDefault(event);
          const fileList: FileList = event.dataTransfer.files;
          await handleAddPhoto(fileList);
        }}
        onDragOver={preventDefault}
        style={{ width: width, height: height }}
      >
        <label
          htmlFor={inputId}
          className=" w-full h-full center-col cursor-pointer opacity-25 hover:opacity-100 transition-all ease-in-out"
        >
          <Image src="/icons/upload.svg" alt="upload" width={60} height={60} />
          <span className="mt-2 text-xs">Sube tu foto</span>
        </label>
        <input
          id={inputId}
          name={name}
          type="file"
          className="hidden w-full"
          onChange={async (event) => {
            const fileList = event.target.files as FileList;
            await handleAddPhoto(fileList);
          }}
          accept={acceptedExtensions.join(', ')}
        />
      </div>
      {fileIsInvalid && <div>{FieldError(errorMessage)}</div>}
      <ErrorMessage name={field.name} render={FieldError} />
    </div>
  );

  return field.value ? inputWithFile() : inputWithoutFile();
};

export default FormPhotoInput;
