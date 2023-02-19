import React from 'react';
import { useRecoilState } from 'recoil';
import pdfList from '../../data/images';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

interface Props {
  index: number;
  name: string;
}

const FileHolder: React.FC<Props> = ({ index, name }: Props) => {
  const [list, setList] = useRecoilState(pdfList);
  const image = URL.createObjectURL(list[index]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const del = () => {
    setList(list.filter((v, i, a) => i !== index));
  };

  return (
    <div
      className="relative h-52 w-96 border border-primary-main flex justify-center items-center m-2 rounded-md shadow-md"
      title={name}
    >
      <img className='w-full h-full object-contain' src={image}/>
      <div className="absolute w-full h-1/5 px-2 rounded-b-md flex justify-between items-center bottom-0 bg-primary-main/25 overflow-hidden">
        <span className="font-bold">
          {name.length <= 10 ? name : `${name.substring(0, 8)}...`}
        </span>
        <div className='flex justify-end items-center'>
          <button
            type="button"
            className="rounded-full flex justify-center items-center hover:cursor-pointer bg-secondary-main mx-1 p-1 shadow-sm"
            onClick={onOpen}
          >
            <span className="material-icons md-20">open_in_full</span>
          </button>
          <button
            type="button"
            className="rounded-full flex justify-center items-center hover:cursor-pointer bg-secondary-main mx-1 p-1 shadow-sm"
            onClick={del}
          >
            <span className="material-icons md-20">clear</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <img className='w-full h-full object-contain' src={image}/>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FileHolder;
