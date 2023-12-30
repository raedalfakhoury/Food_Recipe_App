/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import photo from "../src/picture/meat.jpg";
import "./App.css";
import { Food } from "../src/App";

const Recipelist = () => {
  const {
    recipe,
    CATEGORY_NAME,
    setMoreItem,
    moreItem,
    setShow,
    show,
    details,
    setDetails,
    toggle,
    setToggle,
  } = useContext(Food);
  console.log(show);
  useEffect(() => {
    setDetails();
  }, [moreItem, details]);
  return (
    <div className={show ? "generalDynamicList" : "generalDynamicListHide"}>
      <div className="sreachBar">
        <button onClick={()=>{
          setToggle(!toggle)
        }} className="Home">Home</button>
        <p className="dynamicparagraph">{CATEGORY_NAME} Recipes</p>
        <input className="input" type="text" placeholder="search"></input>
      </div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="dynamic"
      >
        {recipe?.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setDetails((setDetails.Fat = item.recipe.totalNutrients.FAT));
                setDetails(
                  (setDetails.Carbs = item.recipe.totalNutrients.CHOCDF)
                );
                setDetails(
                  (setDetails.Protein = item.recipe.totalNutrients.PROCNT)
                );
                setDetails(
                  (setDetails.Cholesterol = item.recipe.totalNutrients.CHOLE)
                );
                setDetails((setDetails.Sodium = item.recipe.totalNutrients.NA));
                setDetails(
                  (setDetails.Calcium = item.recipe.totalNutrients.CA)
                );
                setDetails(
                  (setDetails.Magnesium = item.recipe.totalNutrients.MG)
                );
                console.log(item.recipe.totalNutrients.MG);

                setDetails((setDetails.label = item.recipe.label));

                setDetails((setDetails.calories = item.recipe.calories));

                setDetails((setDetails.dishtype = item.recipe.dishType[0]));

                setDetails((setDetails.cusine = item.recipe.cuisineType[0]));
                setDetails((setDetails.image = item.recipe.image));
                setDetails(
                  (setDetails.ingredientLines = item.recipe.ingredientLines)
                );
                setShow(!show);
              }}
              className="dynamicList"
            >
              <p className="dynamic">{item.recipe.label}</p>
              <img
                key={i}
                onClick={() => {
                  setShow(!show);
                }}
                className="dynamicImg"
                src={item.recipe.image}
                alt=""
              ></img>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setMoreItem(moreItem + 4);
        }}
        className="buttonDownload"
      >
        Show More Recipe
      </button>
    </div>
  );
};

export default Recipelist;
