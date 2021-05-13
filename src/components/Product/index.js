import React from "react";
import "./styles.scss";
import product from "../../assets/img/products/01.jpg";
import ProductOnHover from "./PoductOnHover";

function Product({ image, oldPrice, productName, title, noHover }) {
  const bodyClass = noHover
    ? "item-product__body"
    : "item-product__body body--onHover";

  return (
    <div className="item-product">
      <div className="item-product__labels"></div>
      <a className="item-product__image" href="#">
        <img src={image || product} alt="product" />
      </a>
      <div className={bodyClass}>
        <a href="#" className="item-product__title">
          {title && <span>{title}</span>}
          {productName}
        </a>
        <div className="item-product__footer">
          {oldPrice && (
            <div className="item-product__old-price rub">{oldPrice}</div>
          )}
          <a href="#" className="item-product__add"></a>
          <div className="item-product__price rub">64 990</div>
        </div>
      </div>
      {!noHover && <ProductOnHover />}
    </div>
  );
}

export default Product;
