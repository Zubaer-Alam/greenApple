import React from "react";

const ProductCard = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product["product-id"]);
  };

  return (
    <div className="w-full mb-4">
      <div className="bg-white border-2 border-black rounded-lg shadow-lg p-4 flex flex-wrap">
        <div className="w-2/3 pr-4">
          <h2 className="text-2xl font-semibold mb-3">
            Product Name: {product.name}
          </h2>
          <h1 className="text-2xl font-semibold mb-3">
            Product ID: {product["product-id"]}
          </h1>
        </div>
        <div className="w-1/3 flex flex-wrap">
          {product.variations.map((variation, index) => (
            <div key={index} className="mb-4 w-1/2 p-2 border-2 rounded-lg">
              <p className="text-lg font-medium mb-2">Size: {variation.size}</p>
              <p className="text-lg font-medium mb-2">
                Quantity: {variation.quantity}
              </p>
              <p className="text-lg font-medium mb-2">
                Price: {variation.price}BDT
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleDelete}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
