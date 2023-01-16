
import Head from "next/head";
import { useRouter } from "next/router";

// import Header from "@/components/home/header";


export default function Home() {

  const router = useRouter();

  // const logout = async () => {
  //   const res = await fetch('/api/auth/logout/');
  //   if (res.status === 200) router.push('/login');
  // }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* <Header /> */}
      {/* <button onClick={logout}>
        Logout
      </button> */}
    </>
  )
}
