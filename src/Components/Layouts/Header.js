import React from "react";
import classes from "./Header.module.css";
import HeaderImage from "../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="A table of delicious foods" />
      </div>
    </>
  );
}
export default Header;
