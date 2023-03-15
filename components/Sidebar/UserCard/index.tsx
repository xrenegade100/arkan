/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Avatar from '../../Avatar';

interface Props {
  profilePicture?: string;
  username: string;
  email: string;
  className?: string;
}

const UserCard: React.FC<Props> = ({
  profilePicture,
  username,
  email,
  className,
}: Props) => (
  <div
    className={`${className} w-fit md:w-10/12 lg:w-11/12 bg-gradient-to-br from-secondary-main to-secondary-accent flex justify-start items-center py-4 px-2 shadow-md rounded-md`}
  >
    <Avatar dimen="sm" user={username} imageUrl={profilePicture as string} />
    <div className="ml-2 flex flex-col justify-center items-start overflow-hidden">
      <span className="text-sm font-bold font-body" title={username}>
        {username}
      </span>
      <span
        className="w-full truncate text-xs text-gray-700 font-body"
        title={email}
      >
        {email}
      </span>
    </div>
  </div>
);

export default UserCard;
