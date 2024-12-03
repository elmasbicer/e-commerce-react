import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBasket,
  deleteToBasket,
  setDrawer,
} from "../../redux/slices/basketSlice";
function DrawerBasket() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();
  const deleteB = (id) => {
    console.log("a");
    dispatch(deleteToBasket({ id }));
  };

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch]);
  return (
    <div>
      <Drawer
        open={drawer}
        anchor="right"
        onClose={() => dispatch(setDrawer())}
      >
        <div className="drawerHeader">
          <h3>BASKET</h3>
        </div>
        {products &&
          products.map((product) => {
            return (
              <div className="drawerContainer" key={product.id}>
                <div>
                  <img src={product.image} width={50} height={50} />
                  <p>
                    {product.title} ({product.count})
                  </p>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold", marginBottom: "1px" }}>
                    {product.price}€
                  </p>
                  <button
                    className="drawerButton"
                    onClick={() => deleteB(product.id)}
                  >
                    Delete from basket
                  </button>
                </div>
              </div>
            );
          })}
        <div>
          <h3 style={{ margin: "20px" }}>Total Amount : {totalAmount} €</h3>
        </div>
        <div>
          <button className="drawerButton">Buy It</button>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerBasket;
