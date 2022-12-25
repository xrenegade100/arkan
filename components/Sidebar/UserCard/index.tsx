import React from "react";
import Avatar from "../../Avatar";

interface Props {
    username: string;
    email: string;
    className?: string
}

const UserCard: React.FC<Props> = ({ username, email, className }: Props) => {
    return (
        <div className={`${className} w-fit md:w-10/12 lg:w-11/12 bg-secondary-main flex justify-center items-center py-4 px-2 shadow-md rounded-md`}>
            <Avatar dimen="sm" user={username} imageUrl="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"/>
            <div className="ml-2 flex flex-col justify-center items-start overflow-hidden">
                <span className="text-sm font-bold font-body" title={username}>{username}</span>
                <span className="text-xs text-gray-700 font-body" title={email}>{email}</span>
            </div>
        </div>
    )
}

export default UserCard;