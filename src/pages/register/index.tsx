
import { getAccountFromAPI } from "../../../firebase/firebase";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { RegisterContext } from "@/hooks/RegisterContext";
import { UserContext } from "@/hooks/UserContext";

import RegisterAvatar from "@/components/register/avatar";


const INPUT_CLASSNAMES = "border border-black-200 rounded-md p-2 w-full mt-2";
const INPUT_DIV_CLASSNAMES = "my-3 w-full";


export default function Register() {
  
  const router = useRouter();
  const { registerUser } = useContext(RegisterContext);
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState<string>(registerUser?.displayName ?? "");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>(registerUser?.phoneNumber ?? "");

  const registerAccount = async (e: any) => {
    e.preventDefault();
    const resOne = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({
        email: registerUser?.email ?? "",
        username,
        firstName,
        lastName,
        contactNumber, 
      }),
    });
    
    if (resOne.status === 200) {
      const { res, status } = await getAccountFromAPI(registerUser?.email ?? "");
      if (res.user && status === 200) {
        setUser(res.user);
        router.push('/');
      }
    }
  }
  
  return (
    <>
      <form 
        onSubmit={registerAccount}
        className="flex flex-col w-1/3 h-screen mx-auto justify-center items-center"
      >
        <RegisterAvatar url={registerUser?.photoURL as string} />
        
        <div className={INPUT_DIV_CLASSNAMES}>
          <small>Email</small>
          <input 
            className={INPUT_CLASSNAMES}
            value={registerUser?.email as string}
            disabled  
          />
        </div>

        <div className={INPUT_DIV_CLASSNAMES}>
          <small>Username</small>
          <input 
            className={INPUT_CLASSNAMES}
            value={username} 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={INPUT_DIV_CLASSNAMES}>
          <small>First Name</small>
          <input 
            className={INPUT_CLASSNAMES}
            value={firstName} 
            placeholder="First Name" 
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={INPUT_DIV_CLASSNAMES}>
          <small>Last Name</small>
          <input 
            className={INPUT_CLASSNAMES}
            value={lastName} 
            placeholder="Last Name" 
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className={INPUT_DIV_CLASSNAMES}>
          <small>Contact Number</small>
          <input 
            className={INPUT_CLASSNAMES}
            value={contactNumber} 
            placeholder="Contact Number" 
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        <button
          onClick={registerAccount}
          onSubmit={registerAccount}
          className="py-4 mt-10 w-full rounded-md bg-pink-600"
        >
          Register
        </button>
      </form>
    </>
  );
}