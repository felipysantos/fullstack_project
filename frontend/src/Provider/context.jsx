import { createContext, useState } from "react";

export const ListContext = createContext([]);

export const ListProvider = ({ children }) => {
  const [isList, setList] = useState([]);
  const [isTrue, setTrue] = useState(false);

  return (
    <ListContext.Provider value={{ isList, setList, isTrue }}>
      {children}
    </ListContext.Provider>
  );
};
