import React, { useContext } from "react";
import { useLanguageContext } from "../App";
import { useParams } from "react-router-dom";

const User = () => {
  const { language } = useLanguageContext();
  const params = useParams();
  return (
    <div>
      {language === "en"
        ? `This is the User with id : ${params.id}`
        : `Это пользователь с id : ${params.id}`}
    </div>
  );
};

export default User;
