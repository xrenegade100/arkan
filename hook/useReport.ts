/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { validation } from '../Helpers/CredentialsValidation';
import { DangerLevel, DarkPatternType } from '../types';

const useReport = (image: File) => {
  const [siteLink, setSiteLink] = useState<URL>();
  const [isUrlValid, setIsUrlValid] = useState(validation.VALID);
  const [siteName, setSiteName] = useState('');
  const [isNameEmpty, setIsNameEmpty] = useState(validation.VALID);
  const [darkPatternType, setDarkPatternType] = useState<DarkPatternType>();
  const [isDarkPatternEmpty, setIsDarkPatternEmpty] = useState(
    validation.VALID,
  );
  const [description, setDescription] = useState('');
  const [isDescriptionEmpty, setIsDescriptionEmptiy] = useState(
    validation.VALID,
  );
  const [dangerLevel, setDangerLevel] = useState<DangerLevel>('1');
  const [isImageEmpty, setIsImageEmpty] = useState(validation.VALID);

  useEffect(() => {
    if (siteLink && isUrlValid) {
      setSiteName(siteLink.hostname);
    }
  }, [siteLink]);

  const setURL = (url: string) => {
    try {
      if (url !== '') {
        setSiteLink(new URL(url));
        setIsUrlValid(validation.VALID);
      } else {
        setIsUrlValid(validation.EMPTY);
      }
    } catch (error) {
      setIsUrlValid(validation.INVALID);
    }
  };

  const submitReport = () => {
    // reset first
    setIsUrlValid(validation.VALID);
    setIsNameEmpty(validation.VALID);
    setIsImageEmpty(validation.VALID);
    setIsDarkPatternEmpty(validation.VALID);
    setIsDescriptionEmptiy(validation.VALID);

    if (!siteLink) {
      setIsUrlValid(validation.INVALID);
      return;
    }

    if (siteName === '') {
      setIsNameEmpty(validation.EMPTY);
      return;
    }

    if (!image) {
      setIsImageEmpty(validation.EMPTY);
      return;
    }

    if (!darkPatternType) {
      setIsDarkPatternEmpty(validation.EMPTY);
      return;
    }

    if (description === '') {
      setIsDescriptionEmptiy(validation.EMPTY);
    }
  };

  return {
    siteLink,
    isUrlValid,
    setURL,
    siteName,
    setSiteName,
    isNameEmpty,
    dangerLevel,
    setDangerLevel,
    darkPatternType,
    setDarkPatternType,
    isDarkPatternEmpty,
    description,
    setDescription,
    isDescriptionEmpty,
    isImageEmpty,
    submitReport,
  };
};

export default useReport;
