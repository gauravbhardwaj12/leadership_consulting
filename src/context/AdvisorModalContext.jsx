import { createContext, useContext, useState } from "react";

const AdvisorModalContext = createContext();

export function AdvisorModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPractice, setDefaultPractice] = useState("");

  const openAdvisorModal = (practice = "") => {
    setDefaultPractice(practice);
    setIsOpen(true);
  };

  const closeAdvisorModal = () => {
    setIsOpen(false);
    setDefaultPractice("");
  };

  return (
    <AdvisorModalContext.Provider value={{ isOpen, openAdvisorModal, closeAdvisorModal, defaultPractice }}>
      {children}
    </AdvisorModalContext.Provider>
  );
}

export function useAdvisorModal() {
  const context = useContext(AdvisorModalContext);
  if (!context) {
    throw new Error("useAdvisorModal must be used within an AdvisorModalProvider");
  }
  return context;
}
