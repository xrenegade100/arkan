import moment from 'moment';
import type { NextPage } from 'next';
import 'moment/locale/it';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import data from '../data/posts.json';

const Analisi: NextPage<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  const [postList, setPostList] = useState<Post[]>([]);
  moment.locale('it');
  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  return (
    <div className='flex flex-col items-center w-full'>
      <span className='text-secondary-main font-semibold text-5xl'>
        Risultato analisi
      </span>
      <div className='flex flex-wrap w-full justify-evenly'>
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
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
