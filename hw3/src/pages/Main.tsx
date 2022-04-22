import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../App";

const Main = () => {
  const { language } = useLanguageContext();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {language === "en" ? "This is the Main Page" : "Это главная страница"}

      <Link to="/about">
        {language === "en" ? "Go To About Page" : 'Перейти на страницу "О нас"'}
      </Link>
      <Link to="/Users">
        {language === "en"
          ? "Go To Users Page"
          : 'Перейти на страницу "Пользователи"'}
      </Link>
    </div>
  );
};

export default Main;
