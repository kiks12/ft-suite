
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Head from 'next/head';

import { signInWithGoogleHandler, getAccountFromAPI } from '../../../firebase/firebase';

import { RegisterContext } from '@/hooks/RegisterContext';
// import { UserContext } from '@/hooks/UserContext';

import GoogleRegisterButton from '@/components/login/googleRegisterButton';
import GoogleLoginButton from '@/components/login/googleLoginButton';


export default function Login() {

  const router = useRouter();
  const { setRegisterUser } = useContext(RegisterContext);
  // const { setUser } = useContext(UserContext);

  const googleSignIn = async (e: any) => {
    e.preventDefault();
    const user = await signInWithGoogleHandler();
    if (!user) return;
    const { res, status } = await getAccountFromAPI(user.email);
    if (res.user && status === 200) {
      // setUser(res.user);
      router.push('/');
    }
  }

  const registerWithGoogle = async (e: any) => {
    e.preventDefault();
    const user = await signInWithGoogleHandler();
    if (!user) return;
    const { res, status } = await getAccountFromAPI(user.email);
    if (res.user && status === 200) router.push('/');
    setRegisterUser(user);
    router.push('/register');
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      
      <form action="#" className="h-screen w-1/3 mx-auto flex flex-col justify-center align-center">
        <GoogleLoginButton onClick={googleSignIn} />
        <GoogleRegisterButton onClick={registerWithGoogle} />
      </form>
    </>
  );
}