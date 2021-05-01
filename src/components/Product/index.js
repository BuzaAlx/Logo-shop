import React from "react";
import "./styles.scss";
import product from "../../assets/img/products/01.jpg";

function Product() {
  return (
    <div className="item-product">
      <div className="item-product__labels"></div>
      <a className="item-product__image" href="#">
        <img src={product} alt="product" />
      </a>
      <div className="item-product__body">
        <a href="#" className="item-product__title">
          Домашний теннисный стол Donic Indoor Roller 800 Green
        </a>
        <div className="item-product__footer">
          <a href="#" className="item-product__add"></a>
          <div className="item-product__price rub">64 990</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
