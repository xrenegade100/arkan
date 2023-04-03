/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import { useState, useEffect, Ref, MutableRefObject } from 'react';

const useOutsideClick = (
  ref: Ref<HTMLDivElement>,
  isComponentVisibile: boolean,
) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (ref as MutableRefObject<HTMLDivElement>)?.current &&
        !(ref as MutableRefObject<HTMLDivElement>)?.current.contains(
          event.target as Node,
        ) &&
        isComponentVisibile
      ) {
        setIsClicked(true);
      }
    }

    if (!isComponentVisibile) {
      setIsClicked(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isComponentVisibile]);

  return isClicked;
};

export default useOutsideClick;
