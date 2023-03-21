/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { validation } from '../helpers/CredentialsValidation';
import { DangerLevel, DarkPatternType } from '../types';
import { useAuth } from './useAuth';
import useDatabase from './useDatabase';

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

  const { user } = useAuth();

  const { addReport, dbError } = useDatabase();

  useEffect(() => {
    if (siteLink && isUrlValid) {
      setSiteName(siteLink.hostname);
    }
  }, [siteLink]);

  useEffect(() => {
    if (dbError) {
      alert(dbError);
    }
  }, [dbError]);

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

  const submitReport =
    async (): Promise<DocumentReference<DocumentData> | null> => {
      // reset first
      setIsUrlValid(validation.VALID);
      setIsNameEmpty(validation.VALID);
      setIsImageEmpty(validation.VALID);
      setIsDarkPatternEmpty(validation.VALID);
      setIsDescriptionEmptiy(validation.VALID);

      if (!siteLink) {
        setIsUrlValid(validation.INVALID);
        return null;
      }

      if (siteName === '') {
        setIsNameEmpty(validation.EMPTY);
        return null;
      }

      if (!image) {
        setIsImageEmpty(validation.EMPTY);
        return null;
      }

      if (!darkPatternType) {
        setIsDarkPatternEmpty(validation.EMPTY);
        return null;
      }

      if (description === '') {
        setIsDescriptionEmptiy(validation.EMPTY);
        return null;
      }

      const report = await addReport(
        siteName,
        siteLink.toString(),
        description,
        darkPatternType,
        dangerLevel,
        image,
        user?.uid as string,
        new Date().toDateString(),
      );

      return report;
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
    dbError,
  };
};

export default useReport;
