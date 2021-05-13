import React, { useState, useMemo } from "react";
import "./styles.scss";

function SearchPanel() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [products, setProducts] = useState([
    { label: "Беговые дорожки", name: "product_1", checked: false },
    { label: "Эллиптические тренажеры", name: "product_2", checked: false },
    { label: "Велотренажеры", name: "product_3", checked: false },
    { label: "Гребные тренажеры", name: "product_4", checked: false },
    { label: "Вибромассажеры", name: "product_5", checked: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkedProducts = products.filter((p) => p.checked);
    console.log(checkedProducts);
  };

  const handleChange = (name) => {
    const copyProducts = [...products];
    const modifiedProducts = copyProducts.map((p) => {
      if (name === p.name) {
        p.checked = !p.checked;
      }

      return p;
    });
    setProducts(modifiedProducts);
  };

  const productsLength = useMemo(() => {
    return products.filter((p) => p.checked).length;
  }, [products]);

  const selectorMarkup = () => {
    return productsLength ? `Выбрано: ${productsLength}` : "Везде";
  };

  return (
    <form className="search-panel" onSubmit={handleSubmit} action="#">
      <div className="search_panel__select">
        <div
          className={`    search-panel__title ${
            categoriesOpen ? "search-panel--active" : ""
          }    `}
        >
          <span
            className="search-panel__text"
            onClick={() => setCategoriesOpen((open) => !open)}
          >
            {selectorMarkup()}
          </span>
          <div
            className={`search-panel__categories ${
              categoriesOpen ? "search-panel__categories--open" : ""
            }`}
          >
            <div className="search-panel__row">
              <div className="search-panel__column">
                <ul className="search-panel__list">
                  {products.map(({ checked, name, label }) => {
                    return (
                      <li className="search-panel__item">
                        <label className="checkbox">
                          <input
                            className="checkbox__input"
                            checked={checked}
                            name={name}
                            type="checkbox"
                            onChange={() => handleChange(name)}
                          />
                          <span
                            className={`checkbox__text ${
                              checked ? "checkbox__text--active" : ""
                            }`}
                          >
                            {label}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="search-panel__column">
                <ul className="search-panel__list">
                  {products.map((p) => {
                    return (
                      <li className="search-panel__item">
                        <label className="checkbox">
                          <input
                            className="checkbox__input"
                            checked={p.checked}
                            name={p.name}
                            type="checkbox"
                            onChange={() => handleChange(p.name)}
                          />
                          <span className="checkbox__text">{p.label}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="search-panel__column">
                <ul className="search-panel__list">
                  {products.map((p) => {
                    return (
                      <li className="search-panel__item">
                        <label className="checkbox">
                          <input
                            className="checkbox__input"
                            checked={p.checked}
                            name={p.name}
                            type="checkbox"
                            onChange={() => handleChange(p.name)}
                          />
                          <span className="checkbox__text">{p.label}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-panel__input">
        <input type="text" className="input" />
      </div>
      <button className="search-panel__submit" type="submit">
        Найти
      </button>
    </form>
  );
}

export default SearchPanel;
