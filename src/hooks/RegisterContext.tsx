
import { User, UserCredential } from "firebase/auth";
import { createContext, useState } from "react";

interface RegisterContextType {
  registerUser: User | null,
  setRegisterUser: any,
}

export const RegisterContext = createContext<RegisterContextType>({
  registerUser: null,
  setRegisterUser: null,
});

export const RegisterProvider = ({children}: any) => {

  const [registerUser, setRegisterUser] = useState<User | null>(null);

  return (
    <RegisterContext.Provider value={{registerUser,setRegisterUser}}>
      {children}
    </RegisterContext.Provider>
  )
}