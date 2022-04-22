import React, { useContext } from "react";
import { useLanguageContext } from "../App";
import { Routes, Route, Link } from "react-router-dom";
const Users = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {language === "en"
        ? "This is the Users Page"
        : "Это страница 'Пользователи'"}

      <Link to="/users/1">
        {language === "en"
          ? "Go to User with an id 1"
          : "Перейти к пользователю с id 1"}
      </Link>
      <Link to="/users/2">
        {language === "en"
          ? "Go to User with an id 2"
          : "Перейти к пользователю с id 2"}
      </Link>
      <Link to="/users/3">
        {language === "en"
          ? "Go to User with an id 3"
          : "Перейти к пользователю с id 3"}
      </Link>
      <Link to="/">
        {language === "en" ? "Go to Main" : "Перейти на главную"}
      </Link>
      <button onClick={() => setLanguage("ru")}>Change To Russian</button>
      <button onClick={() => setLanguage("en")}>Change To English</button>
    </div>
  );
};

export default Users;
