/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import React from 'react';
// eslint-disable-next-line import/extensions
import Avatar from '../Avatar';
// eslint-disable-next-line import/extensions
import IconButton from '../IconButton';
// eslint-disable-next-line import/extensions
import Toast from '../Toast';

interface Props {
  username: string;
  siteName: string;
  siteLink: string;
  description: string;
  dangerLevel: number;
  darkPatternType: string;
  date: string;
  imageLink: string;
  detectionMode: 'rilevato tramite segnalazione' | 'rilevato tramite analisi';
}

const UserDetectedCard: React.FC<Props> = ({
  username,
  siteName,
  siteLink,
  description,
  dangerLevel,
  darkPatternType,
  date,
  imageLink,
  detectionMode,
}: Props) => (
  <div className="w-11/12 lg:w-2/5 rounded-md shadow-md bg-opacity-50 bg-primary-accent">
    <div className="w-full flex flex-col-reverse justify-between items-start md:flex-row md:justify-between md:items-center p-4">
      <div className="w-1/2 flex justify-start items-center mt-2 md:mt-0">
        <Avatar
          dimen="xs"
          imageUrl="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
        />
        <span className="ml-2 md:ml-4  font-body text-lg md:text-xl font-bold">
          {username}
        </span>
      </div>
      <Toast
        text={detectionMode.toUpperCase()}
        className="uppercase"
        onClick={() => {}}
      />
    </div>
    {detectionMode === 'rilevato tramite segnalazione' ? (
      <div className="relative w-full">
        <img
          src={imageLink}
          className="w-full object-cover"
          height={100}
          alt={darkPatternType}
        />
        <Toast
          text={darkPatternType.toUpperCase()}
          className="absolute bottom-0 right-0 m-4 uppercase"
          onClick={() => {}}
        />
      </div>
    ) : (
      <div className="mx-4 mt-4">
        <Toast text={darkPatternType.toUpperCase()} onClick={() => {}} />
      </div>
    )}
    <div className="mx-4 my-1 md:my-2 flex justify-start items-center">
      <span
        className={clsx('w-6 h-6 rounded-full', {
          'bg-green-600': dangerLevel === 1,
          'bg-yellow-600': dangerLevel >= 2 && dangerLevel <= 3,
          'bg-red-600': dangerLevel >= 4,
        })}
        title={`livello di pericolo: ${dangerLevel}`}
      />
      <a
        href={siteLink}
        className="ml-1 md:ml-2 font-body text-xl md:text-2xl font-bold"
      >
        {siteName}
      </a>
    </div>
    <div className="mx-4">
      {detectionMode === 'rilevato tramite segnalazione' && (
        <span className="font-body">{description}</span>
      )}
    </div>
    <div className="py-1 md:py-2 w-full flex justify-between items-end">
      <div className="flex justify-start items-center ml-4">
        <IconButton icon="favorite" className="mr-1 md:mr-2" />
        <IconButton icon="share" className="mr-1 md:mr-2" />
        <IconButton icon="add_comment" />
      </div>
      <span className="mr-4 text-sm font-light font-body">{date}</span>
    </div>
  </div>
);

export default UserDetectedCard;
