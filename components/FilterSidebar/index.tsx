import {
  Button,
  Input,
  IconButton,
  Select,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  className?: string;
};

const FilterSidebar = ({ className }: Props) => {
  return (
    <div className={`w-1/5 bg-gray-300 fixed h-screen right-0 ${className}`}>
      <div className='flex flex-col h-full mt-8 px-4'>
        <div>
          {/* First section */}
          <h1 className='font-bold'>Filtra per sito</h1>
          <div className='flex mt-2 w-full justify-between border-b-[1px] border-black pb-4'>
            <Input
              background={'#fff'}
              size={'lg'}
              w={'80%'}
              borderColor='transparent'
              placeholder='http://example.com'
            />
            <IconButton
              bgColor={'#1976D2'}
              _hover={{
                bgColor: '#63A4FF',
              }}
              borderRadius={'50%'}
              aria-label='Search'
              size='lg'
              icon={
                <span className='text-xl text-white material-icons-outlined'>
                  search
                </span>
              }
            />
          </div>
        </div>
        <div className='mt-4'>
          {/* First section */}
          <h1 className='font-bold'>Filtra per dark pattern</h1>
          <div className='flex mt-2 w-full justify-between pb-4'>
            <Select backgroundColor={'#fff'}>
              <option value='nagging'>Nagging</option>
              <option value='separator' disabled>
                *** Obstruction ***
              </option>
              <option value='roachmotel'>Roach Motel</option>
              <option value='pricecompprevention'>
                Price Comparison Prevention
              </option>
              <option value='intermediatecurrency'>
                Intermadiate Currency
              </option>
              <option value='separator' disabled>
                *** Sneaking ***
              </option>
              <option value='forcedcontinuity'>Forced Continuity</option>
              <option value='hiddencosts'>Hidden Costs</option>
              <option value='sneakintobasket'>Sneak Into Basket</option>
              <option value='baitandswitch'>Bait and Switch</option>
              <option value='separator' disabled>
                *** Forced Action ***
              </option>
              <option value='socialpyramid'>Social Pyramid</option>
              <option value='privacyzuckering'>Privacy Zuckering</option>
              <option value='gamification'>Gamification</option>
              <option value='separator' disabled>
                *** Interface Interference ***
              </option>
              <option value='hiddeinfo'>Hidden Information</option>
              <option value='preselection'>Preselection</option>
              <option value='aestheticman'>Aesthetic Manipulation</option>
              <option value='toyingwithemotion'>Toying with Emotion</option>
              <option value='falsehierarchy'>False Hierarchy</option>
              <option value='disguisedad'>Disguised Ad</option>
              <option value='trickquestions'>Trick Questions</option>
            </Select>
          </div>
          <RadioGroup defaultValue='analysis'>
            <Radio my={'1'} background={'#fff'} value='analysis'>
              <span className='font-bold'>Rilevato tramite analisi</span>
            </Radio>
            <Radio my={'1'} background={'#fff'} value='report'>
              <span className='font-bold'>Segnalazione di un utente</span>
            </Radio>
          </RadioGroup>
          <div className='w-full flex justify-center'>
            <Button
              my='2'
              color='#fff'
              bgColor={'#1976D2'}
              _hover={{
                bgColor: '#63A4FF',
              }}
              w='75%'
            >
              Applica
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
