import clsx from "clsx";
import React from "react";

interface Props {
    icon: string;
    text?: string;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'base' | 'lg';
}

const IconButton: React.FC<Props> = ({
  icon,
  text,
  variant,
  size,
}: Props) => {
  return (
    <button className={clsx("rounded-full p-2 shadow-md transition-colors ease-in",
    {
      "bg-secondary-main hover:bg-secondary-accent": variant === 'secondary',
      "bg-primary-main hover:bg-primary-accent": variant === 'primary',
    })}>
      <div className="flex justify-center items-center">
        <span className={clsx("material-symbols-rounded font-bold text-white",
          {
            "md-24": size === 'base',
            "md-18": size === 'sm',
            "md-32": size === 'lg',
          }
        )}>{icon}</span>
        { text && <span className={clsx("mx-1 font-bold font-body text-white uppercase",
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
}

export default IconButton;