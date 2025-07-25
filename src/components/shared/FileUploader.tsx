import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import type { FileWithPath } from 'react-dropzone';
import { Button } from '../ui/button';

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'
    >
      <input {...getInputProps()} className='cursor-pointer ' />
      {fileUrl ? (
        <>
          <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
            <img src={fileUrl} alt='image' className='file_uploader-img' />
          </div>
          <p className='file_uploader-label'>Click or drag image to replace</p>
        </>
      ) : (
        <div className='file_uploader-box'>
          <img
            src='/assets/icons/upload.png'
            alt='upload'
            width={96}
            height={77}
          />
          <h3 className='base-medium text-light-2'>Drag image here</h3>
          <p className='text-light-4 small-regular mb-6'>PNG, JPG and More</p>

          <Button className='shad-button_dark_4'>Select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
