import { createContext, useContext } from 'react';

export const SelectContext = createContext(null);

export const useSelectContext = () => useContext(SelectContext);
