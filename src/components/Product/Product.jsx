import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const shortenedTitle = title.length > 50 ? title.slice(0, 60) + "..." : title;
  const navigate = useNavigate();

  return (
    <div className="productCards">
      <img src={image} className="productImage" alt="Image" />
      <div>
        <p className="productTitle">{shortenedTitle}</p>
        <h3 className="productPrice">{price} €</h3>
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => navigate("/productDetails/" + id)}
          className="productButton"
        >
          Go to detail
        </button>
      </div>
    </div>
  );
}

export default Product;
