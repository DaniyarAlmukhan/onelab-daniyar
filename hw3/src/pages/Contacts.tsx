import React, { useContext } from "react";
import { useLanguageContext } from "../App";
const Contacts = () => {
  const { language } = useLanguageContext();
  return (
    <div>
      {language === "en"
        ? "This is the Contacts Page"
        : 'Это страница "Контакты"'}
    </div>
  );
};

export default Contacts;
