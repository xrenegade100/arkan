import clsx from "clsx";
import React, { useState } from "react";

interface Props {
    title: string;
    children: React.ReactElement | React.ReactElement[];
    
}

const PostItem: React.FC<Props> = ({title, children}: Props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className={clsx("bg-slate-400 transition-all",
      {
        'w-full rounded-none': visibility,
        'w-4/5 lg:w-4/6 xl:w-3/5 rounded-r-full': !visibility,
      }
    )}>
      <div className="w-fit flex justify-start items-center px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4">
        <span className="font-body text-xl lg:text-2xl xl:text-4xl font-bold">{title}</span>
        <span 
          className="material-symbols-rounded md-36 lg:md-64 xl:md-64"
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          {visibility ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      
      {visibility && (
        <>
          <div className="w-3/4 border-t border-t-gray-600 ml-4 lg:ml-6 xl:ml-8" />
          <div className="mx-4 mt-4 lg:ml-6 lg:mt-6 xl:ml-8 xl:mt-8">
            {children}
          </div> 
        </>)
      }
    </div>
  );
}

export default PostItem;