import React, { useState } from "react";
import { Image, Post } from "../../types";
import Toast from "../Toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
    Tooltip,
    Input,
    useToast,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Divider,
    ButtonGroup,
    useDisclosure
  } from '@chakra-ui/react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import clsx from "clsx";

interface Props {
    report: Post,
}

/*{report.images.map((image) => {
    const render = URL.createObjectURL(image as File);

    return (
        <div className="w-full" key={0}>
            <img className="w-full object-contain" src={render}/>
        </div>
    )
})}*/

const UserReportCard: React.FC<Props> = ({ report }: Props) => {
    const [shareOpen, setShareOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
        <Modal
        isOpen={shareOpen}
        onClose={() => {
          setShareOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Condividi</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <div className='flex flex-col'>
              <span>Condividi tramite:</span>
              <ButtonGroup size='lg' variant='outline' mt={'4'}>
                <Button colorScheme='facebook'>
                  <FontAwesomeIcon size='2x' icon={faFacebook} />
                </Button>
                <Button colorScheme='twitter'>
                  <FontAwesomeIcon size='2x' icon={faTwitter} />
                </Button>
                <Button colorScheme='whatsapp'>
                  <FontAwesomeIcon size='2x' icon={faWhatsapp} />
                </Button>
                <Button colorScheme='pink'>
                  <FontAwesomeIcon size='2x' icon={faInstagram} />
                </Button>
                <Button colorScheme='telegram'>
                  <FontAwesomeIcon size='2x' icon={faTelegram} />
                </Button>
              </ButtonGroup>
              <span className='mt-4 mb-2'>Oppure copia il link</span>
              <div className='flex items-center justify-between'>
                <span className='material-icons-outlined'>link</span>
                <Input
                  width='65%'
                  readOnly
                  value={`https://projectarkan.com/analisi/${report.website}`}
                />
                <Button
                  color='white'
                  style={{
                    fontWeight: 'bold',
                  }}
                  bgColor={'#1976D2'}
                  _hover={{
                    bgColor: '#63A4FF',
                  }}
                >
                  Copia
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
        <div className="w-1/2 bg-slate-200 rounded-lg shadow-md">
            <div className="w-full flex justify-between items-center rounded-t-lg bg-primary-main p-4">
                <span className="text-xl font-bold text-white">USER</span>
                <Toast disabled>
                    {report.type === 1 ? "RILEVATO TRAMITE SEGNALAZIONE" : "RILEVATO TRAMITE ANALISI"}
                </Toast>
            </div>
            {
                report.images.length === 1 ? 
                <div className="w-full relative" key={0}>
                    <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{report.images[0].name}</ModalHeader>
                            <ModalCloseButton />
                        <img className='w-full h-full object-contain' src={report.images[0].path}/>
                        </ModalContent>
                    </Modal>
                    <img className="w-full h-60 object-cover" src={report.images[0].path}/>
                    <div className="absolute bottom-0 left-0 w-full flex justify-end items-center p-2">
                        <Toast disabled>{report.dpName}</Toast>
                        <button
                            type="button"
                            className="rounded-full flex justify-center items-center hover:cursor-pointer bg-secondary-main mx-1 p-1 shadow-sm"
                            onClick={onOpen}
                        >
                        <span className="material-icons text-white">open_in_full</span>
                        </button>
                    </div>
                  </div>
                :
                <Carousel>
              {report.images.map((image) => {
                return (
                  <div className="w-full relative" key={0}>
                    <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{image.name}</ModalHeader>
                            <ModalCloseButton />
                        <img className='w-full h-full object-contain' src={image.path}/>
                        </ModalContent>
                    </Modal>
                    <img className="w-full object-contain" src={image.path}/>
                    <div className="absolute">
                        <Toast disabled>{report.dpName}</Toast>
                        <button
                            type="button"
                            className="rounded-full flex justify-center items-center hover:cursor-pointer bg-secondary-main mx-1 p-1 shadow-sm"
                            onClick={onOpen}
                        >
                        <span className="material-icons text-white">open_in_full</span>
                        </button>
                    </div>
                  </div>
                )
              })}
            </Carousel> 
            }
            <div className="w-full flex flex-col justify-start items-start px-4 py-2">
                <div className="flex justify-start items-center">
                    <div className={clsx("w-5 h-5 rounded-full mr-1", {
                        'bg-green-600': report.dangerLevel === 1 || report.dangerLevel === 2,
                        'bg-yellow-400': report.dangerLevel === 3 || report.dangerLevel === 4,
                        'bg-red-700': report.dangerLevel === 5,
                    })}></div>
                    <span className="text-xl font-semibold">{report.dangerLevel + "/5"} </span>
                </div>
                <span className="text-xl font-semibold">{report.siteName}</span>
                <span>{report.description}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex justify-around items-center">
                    <button
                      className='flex justify-center items-center p-2 text-white bg-primary-main cursor-pointer hover:bg-primary-accent rounded-full mx-1'
                    >
                      <span className="flex justify-center items-center material-icons">favorite</span>
                    </button>
                    <button
                      onClick={() => {
                        setShareOpen(true);
                      }}
                      className='flex justify-center items-center p-2 text-white bg-primary-main cursor-pointer hover:bg-primary-accent rounded-full mx-1'
                    >
                      <span className="flex justify-center items-center material-icons">share</span>
                    </button>
                    <button
                      className='flex justify-center items-center p-2 text-white bg-primary-main cursor-pointer hover:bg-primary-accent rounded-full mx-1'
                    >
                      <span className="flex justify-center items-center material-icons">chat</span>
                    </button>
                </div>
                <span className="text-sm">{report.date}</span>
            </div>
        </div>
        </>
    )
}

export default UserReportCard;