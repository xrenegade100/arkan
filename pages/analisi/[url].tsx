import moment from 'moment';
import type { NextPage } from 'next';
import 'moment/locale/it';
import { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';
import { Post } from '../../types';
import data from '../../data/posts.json';
import { useAuthPage } from '../../hooks';
import { useRouter } from 'next/router';

const Analisi: NextPage<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
  const [postList, setPostList] = useState<Post[]>([]);
  moment.locale('it');
  const router = useRouter();
  useEffect(() => {
    posts.forEach((post) => {
      post.website = 'https://' + router.query.url;
    });
    setPostList(posts);
  }, [router, posts]);

  return (
    <div className='flex flex-col items-center w-full'>
      <span className='text-secondary-main font-semibold text-5xl'>
        Riepilogo analisi
      </span>
      <p className='text-secondary-gray-almost-black text-xl font-semibold'>
        {router.query.url}
      </p>
      <div className='flex flex-col flex-1 items-center justify-between w-3/4 overflow-auto'>
        {posts.map((post) => (
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
