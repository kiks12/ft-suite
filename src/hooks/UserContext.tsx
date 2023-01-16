
import { User } from "@prisma/client";
import { createContext, useState } from "react";

interface UserContextType {
  user: User | null;
  setUser: any;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: null,
});

export const UserProvider = ({children}: any) => {

  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}