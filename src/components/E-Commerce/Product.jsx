import React from "react";

const Product = ({ name, image1, price }) => {
  return (
    <>
    <div className="product-card " >
      <img src={image1} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
    </>
  );
};

export default Product;
