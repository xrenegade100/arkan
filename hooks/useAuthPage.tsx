import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

const useAuthPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      router.push('/');
    }
  }, [auth.isLoggedIn, router]);
};

export default useAuthPage;
