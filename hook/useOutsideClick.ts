import {
  useState, useEffect, Ref, MutableRefObject,
} from 'react';

const useOutsideClick = (ref: Ref<HTMLDivElement>, isSidebarVisibile: boolean) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (ref as MutableRefObject<HTMLDivElement>)?.current
        && !(ref as MutableRefObject<HTMLDivElement>)?.current.contains(event.target as Node)
        && isSidebarVisibile) {
        setIsClicked(true);
      }
    }

    if (!isSidebarVisibile) {
      setIsClicked(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isSidebarVisibile]);

  return isClicked;
};

export default useOutsideClick;
