import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderMark,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '../components';
import FileInput from '../components/FileInput';
import FileHolder from '../components/FileHolder';
import { useRecoilState } from 'recoil';
import imageList from '../data/images';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Post, Image } from '../types';

const Segnala: NextPage = () => {
  const router = useRouter();
  const [list, setList] = useRecoilState(imageList);
  const [link, setLink] = useState<string>("");
  const [siteName, setSiteName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dpType, setDpType] = useState<string>("Scegli dark pattern");
  const [dangerLevel, setDangerLevel] = useState(3);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { getRootProps, isDragActive } = useDropzone({
    accept: 'image/png image/jpeg',
    onDrop: (acceptedFiles) => {
      setList([...list, ...acceptedFiles]);
    },
    noClick: true,
    noKeyboard: true,
  });

  const makeReport = async () => {

    if(list && link && siteName && description && dpType !== 'Scegli dark pattern'){
      const report = {
        id: 0,
        dpName: dpType,
        website: link,
        images: convertFile(list),
        siteName: siteName,
        date: new Date().toISOString().slice(0, 10),
        dangerLevel: dangerLevel,
        type: 1,
        description: description,
        comments: [],
      } as Post;

      const response = await fetch('/api/addreport', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(report),
      });

      if(response.status === 200){
        router.push({pathname: '/conferma-segnalazione', query: {
            report: JSON.stringify(report)
          }
        });
        setList([]);
      }
    }else{
      onOpen();
    }
  }

  return (
    <div className='flex flex-col items-center w-3/4'>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              COMPLETA TUTTI I CAMPI!
            </AlertDialogHeader>

            <AlertDialogBody>
              Alcuni dei campi relativi alla segnalazione non sono completati. Per effettuafre la segnalazione è necessario completare tutti i campi nella pagina
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                OK
              </Button>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <h1 className='text-secondary-main text-4xl font-semibold mt-4'>
        Segnala Dark Pattern
      </h1>
      <div className='flex flex-col items-center w-full md:flex-row md:justify-between md:w-2/4 mt-4'>
        <FormControl w={{ sm: '100%', md: '45%' }}>
          <FormLabel htmlFor='link'>
            <span className='font-bold'>Link sito</span>
          </FormLabel>
          <Input size='md' placeholder='Link' id='link' type='text' value={link} 
          onChange={(e) => {
            setLink(e.target.value);
          }}
          
          onBlur={ () => {
            try{
              let domain = (new URL(link as string));
              setSiteName(domain.hostname);
            } catch(e: TypeError) {
              //TODO find something to do
            }
            }
          }
          required
        />
        </FormControl>
        <FormControl w={{ sm: '100%', md: '45%' }}>
          <FormLabel htmlFor='nome'>
            <span className='font-bold'>Nome sito</span>
          </FormLabel>
          <Input size='md' placeholder='Sito' id='nome' type='text' value={siteName} onChange={(e) => {
            setSiteName(e.target.value);
          }}
          required/>
        </FormControl>
      </div>
      <div className='mt-8 w-full flex justify-center'>
        <Select
          placeholder='Scegli dark pattern'
          w={{ sm: '100%', md: '40%' }}
          style={{
            fontWeight: 'bold',
          }}
          value={dpType}
          onChange={(e) => {
            setDpType(e.target.value);
          }}
        >
          <option className='font-bold' value='Nagging'>
            Nagging
          </option>
          <option className='font-bold' value='Obstruction'>
            Obstruction
          </option>
          <option className='font-bold' value='Sneaking'>
            Sneaking
          </option>
          <option className='font-bold' value='Interface Interference'>
            Interface Interference
          </option>
          <option className='font-bold' value='Forced Action'>
            Forced Action
          </option>
        </Select>
      </div>
      <div className='mt-4 w-full flex flex-col items-center'>
        <h1 className='font-bold'>Livello di rischio</h1>
        <Slider
          defaultValue={3}
          min={1}
          max={5}
          step={1}
          w={{ sm: '100%', md: '40%' }}
          value={dangerLevel}
          onChange={(e) => { setDangerLevel(e);}}
        >
          <SliderMark value={1} mt='2' fontSize='sm' fontWeight={'bold'}>
            1
          </SliderMark>
          <SliderMark value={2} mt='2' fontSize='sm' fontWeight={'bold'}>
            2
          </SliderMark>
          <SliderMark value={3} mt='2' fontSize='sm' fontWeight={'bold'}>
            3
          </SliderMark>
          <SliderMark value={4} mt='2' fontSize='sm' fontWeight={'bold'}>
            4
          </SliderMark>
          <SliderMark value={5} mt='2' fontSize='sm' fontWeight={'bold'}>
            5
          </SliderMark>
          <SliderTrack bg='gray.200'>
            <Box position='relative' right={10} />
            <SliderFilledTrack bg='blue.600' />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </div>
      <div className='w-full mt-8 flex-col justify-center items-center'>
        <div className='w-full flex flex-wrap justify-center items-center'>
          {list.map((pdf, position) => (
            <FileHolder key={position} index={position} name={pdf.name} />
          ))}
        </div>
        <div className='w-full flex justify-center items-center' {...getRootProps()}>
          <FileInput className={clsx({
            'border-primary-main': isDragActive,
          })}
          
          isDragActive={isDragActive}/>
        </div>
        <div className='w-full'>
          <h1 className='font-bold'>Descrizione</h1>
          <Textarea
            placeholder='Here is a sample placeholder'
            size='md'
            resize="vertical"
            value={description}
            onChange={(e) => {setDescription(e.target.value);}}
            required
          />
        </div>
      </div>
      <Button onClick={makeReport}>
        Segnala
      </Button>
    </div>
  );
};

const convertFile = (fileList: File[]): Image[] => {
  let images: Image[] = [];

  fileList.forEach(file => {
    const toInsert: Image = {
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
      webkitRelativePath: file.webkitRelativePath,
    };

    images.push(toInsert);
  });

  return images;
}

export default Segnala;
