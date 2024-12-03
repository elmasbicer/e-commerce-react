import React, { useState } from "react";
import "./Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket);

  const navigate = useNavigate();
  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  };

  return (
    <div className="headerContainer">
      <div className="flex-row" onClick={() => navigate("/")}>
        <img src={"/src/assets/images/logo.png"} className="logo" />
        <p className="headerText">LUX A.Ş.</p>
      </div>
      <div className="flex-row">
        <input type="text" className="searchInput" placeholder="Search..." />
        <div className="headerContainer">
          {theme ? (
            <FaMoon className="headerIcon" onClick={changeTheme} />
          ) : (
            <CiLight className="headerIcon" onClick={changeTheme} />
          )}
          <Badge
            badgeContent={products.length}
            color="error"
            onClick={() => dispatch(setDrawer())}
          >
            <CiShoppingBasket
              style={{ marginRight: "6px" }}
              className="headerIcon"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
