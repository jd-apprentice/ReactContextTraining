import { useState, createContext } from "react";

const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}

export default UserContext;