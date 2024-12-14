import React, { createContext, useState, useContext } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employeeId, setEmployeeId] = useState(null);

  return (
    <EmployeeContext.Provider value={{ employeeId, setEmployeeId }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  return useContext(EmployeeContext);
};
