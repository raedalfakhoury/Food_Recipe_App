/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./App.css";

import { Food } from "./App";

const StaticList = () => {
  const { categories, toggle, setToggle, setCATEGORY_NAME } = useContext(Food);

  return (
    <>
      <div className="StaticList">
        {categories.map((item, i) => {
          return (
            <button
              onClick={(e) => {
                setCATEGORY_NAME(e.target.innerText);

                setToggle(!toggle);
              }}
              className="img"
              key={i}
              style={{
                backgroundImage: `linear-gradient( rgba(9, 8, 37, 0.4), rgba(0, 15, 80, 0.7)),url(${item.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <p className="p">{item.title}</p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default StaticList;
