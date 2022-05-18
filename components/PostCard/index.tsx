import { Tooltip, Input, toast, useToast } from '@chakra-ui/react';
import clsx from 'clsx';
import moment from 'moment';
import React, { useState } from 'react';
import type { Post, Comment } from '../../types';
import Avatar from '../Avatar';

type Props = {
  post: Post;
  onComment?: (comment: string, post: Post) => void;
};

const darkPatternsNames = {
  HIDDEN_COSTS: 'Hidden Costs',
};

const POST_TYPE = {
  0: 'AUTO',
  1: 'REPORT',
};

const PostCard = ({ post }: Props) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<(Comment & { isLiked?: boolean })[]>(
    post.comments
  );
  const toast = useToast();

  return (
    <>
      <div
        key={post.id}
        className='flex flex-col mt-8 rounded-b-[15px] rounded-t-[15px]'
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className='w-[600px] flex flex-col bg-primary-main rounded-t-[15px] p-4 border-b-[1px] border-black'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <h1 className='font-bold text-secondary-main text-3xl'>
                {darkPatternsNames[post.dpName]}
              </h1>
              <a href={post.website} className='text-white underline'>
                {post.website}
              </a>
            </div>
            <div className='flex flex-col items-center'>
              <Tooltip
                fontFamily={'Inter'}
                hasArrow
                label={
                  POST_TYPE[post.type] === POST_TYPE[0]
                    ? 'Rilevato tramite analisi automatica'
                    : 'Segnalazione inserita da un utente'
                }
              >
                <div
                  className={clsx('rounded-full w-[18px] h-[18px] mb-2', {
                    'bg-[#6DFF7C]': POST_TYPE[post.type] === POST_TYPE[0],
                    'bg-[#FBFF49]': POST_TYPE[post.type] === POST_TYPE[1],
                  })}
                />
              </Tooltip>
              <h1 className='text-gray-200 -mb-2'>
                {moment(new Date(post.date)).fromNow(true)}
              </h1>
            </div>
          </div>
        </div>
        <div className='w-[600px] bg-[#f2f2f2] p-4 rounded-b-[15px]'>
          <h1 className='border-b-2 border-gray-300 pb-4'>
            {post.description}
          </h1>
          {/* Comments */}
          <div className='flex flex-col mt-4'>
            <div className='flex items-center mb-2'>
              <Avatar color='#ab4c2a' name='Antonio' />
              <Input
                onKeyDown={(e) => {
                  console.log(e.key);
                  if (e.key === 'Enter') {
                    comments.unshift({
                      user: {
                        name: 'Antonio',
                      },
                      text: e.currentTarget.value,
                      id: comments.length + 1,
                      likes: 0,
                    });
                    setComments([...comments]);
                    e.currentTarget.value = '';
                    toast({
                      title: 'Commento inserito',
                      position: 'bottom-left',
                      isClosable: true,
                      status: 'success',
                    });
                  }
                }}
                boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                bg={'white'}
                ml={4}
                placeholder='Inserisci commento'
                w='90%'
                borderRadius={'25'}
                p={6}
              />
            </div>
            {comments.map((comment, index) => {
              if (!showComments && index > 4) return <></>; // show 4 comments
              return (
                <div key={comment.id} className='flex my-2'>
                  <div className=''>
                    <Tooltip
                      hasArrow
                      label={comment.user.name}
                      shouldWrapChildren
                    >
                      <Avatar name={comment.user.name} color='#fa4c4b' />
                    </Tooltip>
                  </div>
                  <div
                    className='bg-gray-200 ml-3 w-[90%] rounded-[25px] p-4 flex items-center'
                    style={{
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <h1 className='flex-1'>{comment.text}</h1>
                    <div className='flex items-center'>
                      <h1 className='text-gray-600'>{comment.likes}</h1>
                      <span
                        onClick={() => {
                          if (comment.isLiked) {
                            comment.likes--;
                          } else comment.likes++;
                          comment.isLiked = !comment.isLiked;
                          setComments([...comments]);
                        }}
                        className={clsx(
                          'select-none cursor-pointer material-icons-outlined',
                          {
                            'hover:text-gray-700 text-gray-600':
                              !comment.isLiked,
                            'hover:text-red-500 text-red-500': comment.isLiked,
                          }
                        )}
                      >
                        {!comment.isLiked ? 'favorite_border' : 'favorite'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {comments.length > 4 && (
            <span
              onClick={() => {
                setShowComments(!showComments);
              }}
              className='font-semibold cursor-pointer hover:underline'
            >
              {showComments ? 'Nascondi' : 'Mostra altri commenti'}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;