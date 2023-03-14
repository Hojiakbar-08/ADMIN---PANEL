import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Index from "./components/dashboard";
import History from "./components/history";
import Create from "./components/create";
import { LayOut, NavbarTop, NavbarLeft,NavbarMobil, Component, Block } from "./style";
import { Input } from "antd";
import Order from "./components/order";
import Product from "./components/product";
import Dashboard from "./components/dashboard";
import Logout from "./components/logout";
import Basket from "./components/order/basket";

function App() {
  const navigate = useNavigate();

  const { Search } = Input;

  return (
    <LayOut>
      {window.location.pathname === "/logout" ? (
        <Logout />
      ) : (
        <>
          <NavbarLeft>
            <div className="name">
              <h2>logo</h2>
            </div>
            <div className="body">
              <span onClick={() => navigate("/")}>
                <i className="bi bi-grid-fill" />
                Dashboard
              </span>
              <span onClick={() => navigate("/orders")}>
                <i className="bi bi-bag-fill" />
                Orders
              </span>
              <span onClick={() => navigate("/products")}>
                <i className="bi bi-cart-fill" />
                Products
              </span>
              <span onClick={() => navigate("/create")}>
                <i className="bi bi-plus-square-fill" />
                Create
              </span>
              <span onClick={() => navigate("/history")}>
                <i className="bi bi-file-text-fill" />
                History
              </span>
            </div>
            <div className="foot">
              <span onClick={() => navigate("/logout")}>
                <i className="bi bi-box-arrow-right" />
                Log Out
              </span>
            </div>
          </NavbarLeft>
          <NavbarMobil>
              <span onClick={() => navigate("/")}>
                <i className="bi bi-grid-fill" />
              </span>
              <span onClick={() => navigate("/orders")}>
                <i className="bi bi-bag-fill" />
              </span>
              <span onClick={() => navigate("/products")}>
                <i className="bi bi-cart-fill" />
              </span>
              <span onClick={() => navigate("/create")}>
                <i className="bi bi-plus-square-fill" />
              </span>
              <span onClick={() => navigate("/history")}>
                <i className="bi bi-file-text-fill" />
              </span>
              <span onClick={() => navigate("/logout")}>
                <i className="bi bi-box-arrow-right" />
              </span>
          </NavbarMobil>
          <Block>
            <NavbarTop>
              <div>
                <Search placeholder="Search" />
              </div>
              <div className="user">
                <span>
                  {" "}
                  <i className="bi bi-emoji-smile"></i>
                </span>
                <div className="title">
                  <b>Hojiakabr</b>
                  <p>Mirzaliyev</p>
                </div>
              </div>
            </NavbarTop>
            <Component>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/products" element={<Product />} />
                <Route path="/create" element={<Create />} />
                <Route path="/history" element={<History />} />
                <Route path="/basket" element={<Basket />} />
              </Routes>
            </Component>
          </Block>
        </>
      )}
    </LayOut>
  );
}

export default App;
