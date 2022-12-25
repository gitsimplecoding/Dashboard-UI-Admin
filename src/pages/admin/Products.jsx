import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../components/Dialog";
import ProductCard from "../../components/ProductCard";

const dataProduct = [
  {
    id: 1,
    brand: "Nike",
    categories: "Running Sneakers",
    image: "nike-1.jpg",
    name: "Nike ZoomX StreakFly Premium 1",
    price: "$149.49",
    stock: "25",
    rate: "4.5",
  },
  {
    id: 2,
    brand: "Nike",
    categories: "Running Sneakers",
    image: "nike-3.jpg",
    name: "Nike ZoomX StreakFly Premium 2",
    price: "$149.49",
    stock: "20",
    rate: "4.5",
  },
];

const Products = () => {
  const [products, setProducts] = useState(dataProduct);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    name: "",
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, name) => {
    setDialog({ message, isLoading, name });
  };
  const handleDelete = (id) => {
    const index = dataProduct.findIndex((product) => product.id === id);
    handleDialog(
      "Are you sure you want to delete",
      true,
      dataProduct[index].name
    );
    idProductRef.current = id;
  };
  const confirmDelete = (choose) => {
    if (choose) {
      setProducts(
        products.filter((product) => product.id !== idProductRef.current)
      );
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  return (
    <React.Fragment>
      <div className="mb-2">
        <nav className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin/dashboard" className="breadcrumb-link">
              <span className="breadcrumb-link-icon">
                <i className="bx bx-home-alt"></i>
              </span>
              Dashboard
            </Link>
          </li>
          <li className="breadcrumb-item active">Product</li>
        </nav>
      </div>
      <div className="grid-box">
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            brand={item.brand}
            categories={item.categories}
            image={item.image}
            name={item.name}
            price={item.price}
            stock={item.stock}
            rate={item.rate}
            deleteAction={() => handleDelete(item.id)}
          />
        ))}
      </div>
      {dialog.isLoading && (
        <Dialog
          onDialog={confirmDelete}
          name={dialog.name}
          message={dialog.message}
        />
      )}
    </React.Fragment>
  );
};

export default Products;
