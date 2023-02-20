import moment from 'moment';
import type { NextPage } from 'next';
import 'moment/locale/it';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import data from '../data/posts.json';
import { useAuthPage } from '../hooks';
import UserReportCard from '../components/UserReportCard';

const Analisi: NextPage<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  const [postList, setPostList] = useState<Post[]>([]);
  moment.locale('it');
  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  useAuthPage();

  return (
    <div className='flex flex-col items-center w-full'>
      <span className='text-secondary-main font-semibold text-5xl'>
        Analisi recenti
      </span>

      <div className='flex flex-col flex-1 items-center justify-between w-3/4 overflow-auto'>
        {posts.map((post) => (
          <UserReportCard key={post.id} report={post}/>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Analisi;
