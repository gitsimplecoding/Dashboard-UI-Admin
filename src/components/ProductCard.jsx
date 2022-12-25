import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const ProductCard = ({
  brand,
  categories,
  image,
  name,
  price,
  stock,
  rate,
  deleteAction,
}) => {
  return (
    <div className="card-product">
      <div className="card-product-header">
        <div className="card-product-header-details">
          <h1 className="product-brand">{brand}</h1>
          <p className="product-categories">{categories}</p>
        </div>
        <Dropdown
          icon="bx bx-dots-vertical-rounded"
          menu={
            <>
              <li className="dropdown-list">
                <Link to="/admin/product/edit/:id" className="dropdown-link">
                  <i className="bx bx-edit dropdown-link-icon"></i>
                  Edit
                </Link>
              </li>
              <li className="dropdown-list" onClick={() => deleteAction()}>
                <button className="dropdown-link">
                  <i className="bx bx-trash dropdown-link-icon"></i>
                  Delete
                </button>
              </li>
            </>
          }
        />
      </div>
      <div className="card-product-img">
        <img
          src={require(`../assets/img/${image}`)}
          alt=""
          className="product-img"
        />
      </div>
      <div className="card-product-body">
        <h1 className="product-name">{name}</h1>
        <div className="flex-item">
          <p className="product-price">{price}</p>
          <p className="product-stock">Stock: {stock}</p>
        </div>
        <div className="product-rate">
          <i className="bx bx-star icon-rate"></i>
          <span className="rate">{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
