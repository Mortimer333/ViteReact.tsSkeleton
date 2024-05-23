import React from 'react';
import { RootContextType } from '@type/context';

export const RootContext = React.createContext<RootContextType | null>(null);

const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <RootContext.Provider value={{ test: '' }}>
      {children}
    </RootContext.Provider>
  );
}

export default ContextProvider;
