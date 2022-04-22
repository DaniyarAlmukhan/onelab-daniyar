import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Users from "./pages/Users";
import User from "./pages/User";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type LanguageContextType = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
} as LanguageContextType);

export const useLanguageContext = () => useContext(LanguageContext);

function App() {
  const [language, setLanguage] = useState<string>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about/*" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<User />}></Route>
      </Routes>
    </LanguageContext.Provider>
  );
}

export default App;
