import clsx from "clsx";
import React, { useRef, useEffect } from "react";

interface Props {
    icon: string;
    text?: string;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'base' | 'lg';
    showTextOnHover?: boolean;
    className?: string,
}

const IconButton: React.FC<Props> = ({
  icon,
  text,
  variant,
  size,
  showTextOnHover,
  className,
}: Props) => {
  const span = useRef<HTMLSpanElement>(null);

  if(text === '')
    showTextOnHover = false;

  return (
    <button className={clsx(`${className} rounded-full p-2 shadow-md transition-all ease-in flex justify-start items-center`,
    {
      "bg-secondary-main hover:bg-secondary-accent": variant === 'secondary',
      "bg-primary-main hover:bg-primary-accent": variant === 'primary',
    })}

    onMouseEnter={() => {
      if(showTextOnHover === true) {
        span?.current?.classList.add("w-auto", "mx-1", "visible");
        span?.current?.classList.remove("w-0", "mx-0", "hidden");
      }
    }}
    onMouseLeave={() => {
      if(showTextOnHover === true) {
        span?.current?.classList.add("w-0", "mx-0", "hidden");
        span?.current?.classList.remove("w-auto", "mx-1", "visible");
      }
    }}>
      <div className="flex justify-center items-center">
        <span className={clsx("material-symbols-rounded text-white",
          {
            "md-24": size === 'base',
            "md-18": size === 'sm',
            "md-32": size === 'lg',
          }
        )}>{icon}</span>
        { text && <span ref={span} className={clsx("font-body text-white uppercase transition-width",
          {
            'w-0 mx-0 hidden': showTextOnHover,
            "mx-1": !showTextOnHover,
          },
          {
            "text-base": size === 'base',
            "text-xs": size === 'sm',
            "text-2xl": size === 'lg',
          })}>{text}</span> }
      </div>
    </button>
  )
}

IconButton.defaultProps = {
    text: '',
    variant: 'secondary',
    size: 'base',
    showTextOnHover: false,
}

export default IconButton;