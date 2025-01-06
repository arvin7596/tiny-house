import { createContext, useContext, useState } from "react";

const GuestModeContext = createContext();

function GuestModeProvider({ children }) {
  const [isGuestMode, setIsGuestMode] = useState(false);

  function toggleGuestMode() {
    setIsGuestMode((pre) => !pre);
  }
  return (
    <GuestModeContext.Provider value={{ isGuestMode, toggleGuestMode }}>
      {children}
    </GuestModeContext.Provider>
  );
}

function useGuestMode() {
  const context = useContext(GuestModeContext);
  if (!context) throw new Error("Children are not in provider");
  return context;
}

export { useGuestMode, GuestModeProvider };
