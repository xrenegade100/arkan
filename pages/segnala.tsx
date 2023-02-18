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
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '../components';
import FileInput from '../components/FileInput';
import FileHolder from '../components/FileHolder';
import { useRecoilState } from 'recoil';
import pdfList from '../data/images';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';

const Segnala: NextPage = () => {
  const router = useRouter();
  const [list, setList] = useRecoilState(pdfList);

  const { getRootProps, isDragActive } = useDropzone({
    accept: 'image/png image/jpeg',
    onDrop: (acceptedFiles) => {
      setList([...list, ...acceptedFiles]);
    },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className='flex flex-col items-center w-3/4'>
      <h1 className='text-secondary-main text-4xl font-semibold mt-4'>
        Segnala Dark Pattern
      </h1>
      <div className='flex flex-col items-center w-full md:flex-row md:justify-between md:w-2/4 mt-4'>
        <FormControl w={{ sm: '100%', md: '45%' }}>
          <FormLabel htmlFor='link'>
            <span className='font-bold'>Link sito</span>
          </FormLabel>
          <Input size='md' placeholder='Link' id='link' type='text' />
        </FormControl>
        <FormControl w={{ sm: '100%', md: '45%' }}>
          <FormLabel htmlFor='nome'>
            <span className='font-bold'>Nome sito</span>
          </FormLabel>
          <Input size='md' placeholder='Sito' id='nome' type='text' />
        </FormControl>
      </div>
      <div className='mt-8 w-full flex justify-center'>
        <Select
          placeholder='Scegli dark pattern'
          w={{ sm: '100%', md: '40%' }}
          style={{
            fontWeight: 'bold',
          }}
        >
          <option className='font-bold' value='option1'>
            Nagging
          </option>
          <option className='font-bold' value='option2'>
            Obstruction
          </option>
          <option className='font-bold' value='option3'>
            Sneaking
          </option>
          <option className='font-bold' value='option3'>
            Interface Interference
          </option>
          <option className='font-bold' value='option3'>
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
          />
        </div>
      </div>
      <Button onClick={() => router.push('/conferma-segnalazione')}>
        Segnala
      </Button>
    </div>
  );
};

export default Segnala;
