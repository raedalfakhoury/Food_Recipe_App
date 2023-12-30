/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Food } from "./App";

const DetailList = () => {
  const { details, setDetails, show, setShow, table, setTable } =
    useContext(Food); 
  useEffect(() => {
    setDetails();
  }, []); 
  return (
    <div className={show ? "detailListHide" : "detailList"}>
      <div className="leftDetail">
        <img src={setDetails.image} alt=""></img>
        <button onClick={()=>{
          setShow(!show)
        }} className="Back">Back</button>
      </div>
      <div className="rightDetail">
        <div className="labelandcalories">
          <p>{setDetails.label}</p>
          <p>calories :{setDetails.calories}</p>
        </div>
        <div className="labelandcalories">
          <p>
            dishType:<span>{setDetails.dishtype}</span>{" "}
          </p>
          <p>
            cuisineType : <span>{setDetails.cusine}</span>
          </p>
        </div>
        <div className="ingredients">
          <ul>
            {setDetails?.ingredientLines?.map((e, i) => {
              return <li>{e}</li>;
            })}
          </ul>
        </div>
        <button
          onClick={() => {
            setTable(!table);
          }}
          className="button" 
        >
          {table ? "Hide Nutritional Value" : "Show Nutritional Value"}
        </button>
        <table id={table ? "customers" : "customersHide"}>
          <tr>
            <th>Label</th>
            <th>Total Amount</th>
            <th>Unit</th>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{setDetails.Fat?.quantity}</td>
            <td>{setDetails.Fat?.unit}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{setDetails.Carbs?.quantity}</td>
            <td>{setDetails.Carbs?.unit}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{setDetails.Protein?.quantity}</td>
            <td>{setDetails.Protein?.unit}</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{setDetails.Cholesterol?.quantity}</td>
            <td>{setDetails.Cholesterol?.unit}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{setDetails.Sodium?.quantity}</td>
            <td>{setDetails.Sodium?.unit}</td>
          </tr>
          <tr>
            <td>Calcium</td>
            <td>{setDetails.Calcium?.quantity}</td>
            <td>{setDetails.Calcium?.unit}</td>
          </tr>
          <tr>
            <td>Magnesium</td>
            <td>{setDetails.Magnesium?.quantity}</td>
            <td>{setDetails.Magnesium?.unit}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DetailList;
