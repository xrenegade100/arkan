import { useEffect, useState } from 'react';
import { validation } from '../Helpers/CredentialsValidation';

const useReport = () => {
  const [siteLink, setSiteLink] = useState<URL>();
  const [isUrlValid, setIsUrlValid] = useState(validation.VALID);
  const [siteName, setSiteName] = useState<string>();
  const [darkPatternType, setDarkPatternType] = useState<
    | 'Nagging'
    | 'Obstruction'
    | 'Sneaking'
    | 'Interface Interference'
    | 'Forced Action'
  >('Nagging');
  const [description, setDescription] = useState<string>();
  const [dangerLevel, setDangerLevel] = useState<'1' | '2' | '3' | '4' | '5'>(
    '1',
  );

  useEffect(() => {
    console.log(isUrlValid);
    if (siteLink && isUrlValid) {
      setSiteName(siteLink.hostname);
    }
  }, [siteLink]);

  const setURL = (url: string) => {
    try {
      setSiteLink(new URL(url));
      setIsUrlValid(validation.VALID);
    } catch (error) {
      setIsUrlValid(validation.INVALID);
    }
  };

  return {
    siteLink,
    isUrlValid,
    setURL,
    siteName,
    dangerLevel,
    setDangerLevel,
  };
};

export default useReport;
