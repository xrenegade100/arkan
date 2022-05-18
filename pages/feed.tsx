import type { GetServerSideProps, NextPage } from 'next';
import moment from 'moment';
import 'moment/locale/it';
import clsx from 'clsx';
import {
  Button,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Select,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { Avatar } from '../components';
import { useEffect, useState } from 'react';
import data from '../data/posts.json';
import FilterSidebar from '../components/FilterSidebar';
import PostCard from '../components/PostCard';
import type { Post } from '../types';

const Feed: NextPage<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  moment.locale('it');
  const [postsList, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return (
    <>
      <FilterSidebar className='hidden md:block' />
      <div className='flex flex-col flex-1 items-center justify-between w-3/4 overflow-auto'>
        {postsList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Feed;
