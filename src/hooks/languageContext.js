import { createContext, useContext } from 'react'

export const LanguageContext = createContext('en');

export function useLang () {
  return useContext(LanguageContext)
}

export function LanguageProvider ({ children }) {
  return (
    <LanguageContext.Provider value={'en'}>
      {children}
    </LanguageContext.Provider>
  )
}