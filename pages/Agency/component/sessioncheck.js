import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('Email');
    if (!session) {
      router.push('/Agency/signin');
    }
  }, []);

  return null;
};


