import { useState, createContext } from "react";

export const ColorModeContext = createContext({
  mode: "dark",
  toggleMode: () => {},
});

export default function ColorModeProvider({ children, initalMode }) {
  const [mode, setMode] = useState(initalMode);
  function toggleMode() {
    mode === "light" ? setMode("dark") : setMode("light");
  }
  return (
    <ColorModeContext.Provider value={{ mode: mode, toggleMode: toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
