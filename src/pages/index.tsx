import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const logout = async () => {
    const res = await fetch('/api/auth/logout/');
    if (res.status === 200) router.push('/login');
  }

  return (
    <>
      <button onClick={logout}>
        Logut
      </button>
    </>
  )
}
