
import React from "react";
import ProductListingPage from "./pages/ProductListingPage";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">Shop</h1>
        <div className="cart" title="View Cart">🛒</div>
      </header>

      <ProductListingPage />

      <footer className="footer">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </footer>
    </>
  );
}

export default App;


