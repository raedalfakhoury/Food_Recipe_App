/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext } from "react";

import "./App.css";
import photo from "../src/picture/meat.jpg";
import StaticList from "./StaticList";
import Recipelist from "./recipeList";
import axios from "axios";
import DetailList from "./DetailList";
export const Food = createContext();
const Application_Keys = "aa74084701a25c705d751f92fb3e0bb9";
const Application_ID = "e83f17fd";
function App() {
  const [CATEGORY_NAME, setCATEGORY_NAME] = useState("");
  const [recipe, setRecipes] = useState([]);
  const [moreItem, setMoreItem] = useState(4);
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(true);
  const [table, setTable] = useState(false);
  const [details, setDetails] = useState({
    label: "",
    calories: "",
    dishType: "",
    cuisineType: "",
    image: "",
    ingredientLines: [],
    Fat:"",
    Carbs:"",
    Protein:"",
    Cholesterol:"",
    Sodium:"",
    Calcium:"",
    Magnesium:""
  });
  console.log(setDetails.label);
  const getRicepes = async () => {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${CATEGORY_NAME}&app_id=${Application_ID}&app_key=${Application_Keys}&from=0&to=${moreItem}&calories=591-722&health=alcohol-free`
    );
    const data = await result.data;
    setRecipes(data?.hits);
  };
  useEffect(() => {
    getRicepes();
  }, [CATEGORY_NAME, moreItem]);
  const categories = [
    {
      title: "chicken",
      src: "https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "mango",
      src: "https://images.pexels.com/photos/5562607/pexels-photo-5562607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "spaghetti",
      src: "https://images.pexels.com/photos/4057750/pexels-photo-4057750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "chocolate",
      src: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "fish",
      src: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "rice",
      src: "https://images.pexels.com/photos/2819094/pexels-photo-2819094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "meat",
      src: "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <Food.Provider
      value={{
        categories,
        toggle,
        setCATEGORY_NAME,
        CATEGORY_NAME,
        setToggle,
        recipe,
        setMoreItem,
        moreItem,
        setShow,
        show,
        setDetails,
        details,
        table,
        setTable
      }}
    >
      <div className="titleLogo">
        <h1>Food Recipes </h1>
        <img className="logoHomePage" src={photo}></img>
      </div>
      <div className="App">
        {toggle ? (
          <StaticList />
        ) : (
          <>
            <Recipelist />
            <DetailList/>
          </>
        )}
      </div>
    </Food.Provider>
  );
}

export default App;
