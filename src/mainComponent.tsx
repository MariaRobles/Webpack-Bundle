import React from "react";
const logo = require("./content/logo_1.png");
import classes from "./mainComponentStyles.scss";

export const LogoComponent: React.FC = () => {
  return (
    <div>
       <div className={classes.imgContainer}>
      <img src={logo} className={classes.logo} />
    </div>
    </div>
  );
};

export const TextComponent: React.FC = () => {
  return (
    <div className={classes.textContainer}>
      <h2 className={classes.text}>¡Hola Mundo!</h2>
    </div>
  );
};

export const CheckComponent: React.FC = () => {
  
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')  {
      return <div><h2>Estoy en development</h2></div>
    } else {
      return <div><h2>Estoy en producción</h2></div>
    }
  ;
};
