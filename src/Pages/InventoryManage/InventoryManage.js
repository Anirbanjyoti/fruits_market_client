import React from "react";
import "./InventoryManage.css";

const InventoryManage = ({ p }) => {
  const { img, name } = p;
  return (
    <div className="inventory-product">
      <p>
        <img src={img} alt="images"></img>
        <button className="btn btn-danger">Delete</button>
      </p>
      <br></br>
      <b>{name}</b>
    </div>
  );
};

export default InventoryManage;
