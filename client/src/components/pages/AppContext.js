import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  return (
    <AppContext.Provider values={values}>
      <>
        {name}
      </>
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };