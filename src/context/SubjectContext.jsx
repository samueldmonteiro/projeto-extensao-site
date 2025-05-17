import { createContext, useContext, useState } from "react"

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {

  const [currentSubject, setCurrentSubject] = useState();

  return (
    <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
      {children}
    </SubjectContext.Provider>
  )
}

export const useSubjectContext = () => useContext(SubjectContext)