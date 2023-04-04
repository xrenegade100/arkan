import clsx from 'clsx';
import React, { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[];
  sidePosition?: 'left' | 'right';
}

const PostItem: React.FC<Props> = ({
  title,
  children,
  sidePosition,
}: Props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div
      className={clsx('bg-slate-400 transition-all', {
        'w-full rounded-none': visibility,
        'w-4/5 lg:w-4/6 xl:w-3/5 rounded-r-full':
          !visibility && sidePosition === 'left',
        'w-4/5 lg:w-4/6 xl:w-3/5 rounded-l-full':
          !visibility && sidePosition === 'right',
      })}
    >
      <div
        className={clsx('w-full flex items-center py-2 lg:py-3 xl:py-4', {
          'justify-start': sidePosition === 'left',
          'flex-row-reverse': sidePosition === 'right',
        })}
      >
        <span
          className={clsx(
            'font-body text-xl lg:text-2xl xl:text-4xl font-bold hover:cursor-pointer',
            {
              'pl-4 lg:pl-6 xl:pl-8': sidePosition === 'left',
              'pr-4 lg:pr-6 xl:pr-8': sidePosition === 'right',
            },
          )}
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          {title}
        </span>
        <span
          className={clsx(
            'material-symbols-rounded md-36 lg:md-64 xl:md-64 hover:cursor-pointer',
            {
              'pr-4 lg:pr-6 xl:pr-8': sidePosition === 'left',
              'pl-4 lg:pl-6 xl:pl-8': sidePosition === 'right',
            },
          )}
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          {visibility ? 'expand_less' : 'expand_more'}
        </span>
      </div>

      {visibility && (
        <div
          className={clsx('w-full flex flex-col', {
            'justify-start items-start': sidePosition === 'left',
            'justify-end items-end': sidePosition === 'right',
          })}
        >
          <div className="w-3/4 border-t border-t-gray-600 mx-4 lg:mx-6 xl:mx-8" />
          <div className="w-full mt-4 lg:mt-6 xl:mt-8">
            <div className="mx-4 lg:mx-6 xl:mx-8">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

PostItem.defaultProps = {
  sidePosition: 'left',
};

export default PostItem;
