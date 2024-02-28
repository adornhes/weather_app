import React, { createContext } from "react";
import { Context } from "react";
import { useState } from "react";
//şehir adı, gün adı, görsel,en yüksek ve en düşük sıcaklıklar
const MyContext = createContext({});
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('istanbul');
  
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
 
};
export default MyContext ;
