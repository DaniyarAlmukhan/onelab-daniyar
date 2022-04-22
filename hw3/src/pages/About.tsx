import React, { useContext } from "react";
import { useLanguageContext } from "../App";
import { Routes, Route, Link } from "react-router-dom";
import Contacts from "./Contacts";

const About = () => {
  const { language } = useLanguageContext();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {language === "en" ? "About" : "О нас"}
      <Link to="/about/contacts">
        {language === "en"
          ? "Go To Contacts Page"
          : 'Перейти на страницу "Контакты"'}
      </Link>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default About;
