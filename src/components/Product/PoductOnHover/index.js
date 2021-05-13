import React from "react";
import "./styles.scss";

function ProductOnHover() {
  return (
    <div className="item-product__hover hover-item-product">
      <a href="#" className="hover-item-product__title">
        <span>BH Fitness F1 G6414V</span>
        Беговая дорожка
      </a>
      <div className="hover-item-product__options options-item-product">
        <div className="options-item-product__item">
          <div className="options-item-product__label">
            Тип беговой дорожки:
          </div>
          <div className="options-item-product__value">Электрическая</div>
        </div>
        <div className="options-item-product__item">
          <div className="options-item-product__label">
            Скорость движения (км/ч):
          </div>
          <div className="options-item-product__value">22</div>
        </div>
        <div className="options-item-product__item">
          <div className="options-item-product__label">Складывание:</div>
          <div className="options-item-product__value">Есть</div>
        </div>
      </div>
      <div className="hover-item-product__body">
        <a href="#" className="hover-item-product__cart"></a>
      </div>
      <div className="hover-item-product__footer">
        <div className="hover-item-product__stock">в наличии</div>
        <div className="hover-item-product__price rub">64 990</div>
      </div>
    </div>
  );
}

export default ProductOnHover;
