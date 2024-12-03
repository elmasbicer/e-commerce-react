import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/slices/productSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
    alert("Product added to your basket.");
  };
  // if (!selectedProduct || !title) {
  //   return <div>Loading...</div>; //if product null
  // }
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={image} alt="" className="image" />
      </div>
      <div style={{ alignSelf: "center", marginLeft: "10px" }}>
        <h1 className="title">{title}</h1>
        <p>{description}</p>
        <h1 className="price">{price} €</h1>
        <div className="iconContainer">
          <CiCirclePlus className="icon" onClick={increment} />
          <span style={{ fontSize: "20px", margin: "10px" }}> {count} </span>
          <CiCircleMinus className="icon" onClick={decrement} />
        </div>
        <div>
          <button className="button" onClick={addBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
