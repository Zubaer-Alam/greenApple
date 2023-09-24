import React, { useState, useEffect } from "react";
import VariationForm from "./VariationForm";

const ProductForm = () => {
  const [variations, setVariations] = useState([
    {
      variation: "",
      size: "",
      quantity: "",
      price: "",
    },
  ]);

  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [formValid, setFormValid] = useState(false);

  const send = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Data sent successfully:", responseData);
      } else {
        console.error("Error sending data:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const addVariation = () => {
    const newVariation = {
      variation: "",
      size: "",
      quantity: "",
      price: "",
    };
    setVariations([...variations, newVariation]);
  };

  const removeVariation = (index) => {
    const updatedVariations = [...variations];
    updatedVariations.splice(index, 1);
    setVariations(updatedVariations);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const variationsData = variations.map((variation) => ({
      variation: variation.variation,
      size: variation.size,
      quantity: variation.quantity,
      price: variation.price,
    }));

    const data = {
      "product-id": productID,
      name: productName,
      variations: variationsData,
    };

    send(data);

    e.target.reset();
    setVariations([
      {
        variation: "",
        size: "",
        quantity: "",
        price: "",
      },
    ]);
  };
  

  useEffect(() => {
    const isFormValid =
      productID.trim() !== "" &&
      productName.trim() !== "" &&
      variations.every(
        (variation) =>
          variation.variation.trim() !== "" &&
          variation.size.trim() !== "" &&
          variation.quantity.trim() !== "" &&
          variation.price.trim() !== ""
      );
    setFormValid(isFormValid);
  }, [productID, productName, variations]);



  return (
    <form
      onSubmit={handleAdd}
      className="text-black md:w-3/5 lg:w-3/5 mx-auto border-2 border-black flex flex-col justify-center my-20 rounded-lg"
    >
      <div className="flex flex-col gap-4 m-10">
        <div className="sm:flex justify-between gap-4">
          <label className="font-semibold text-xl">Product ID:</label>
          <input
            className="bg-gray-200 rounded-md text-xl"
            type="text"
            name="product-id"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </div>
        <div className="md:flex justify-between gap-4">
          <label className="font-semibold text-xl">Product Name:</label>
          <input
            className="rounded-md text-xl bg-gray-200"
            type="text"
            name="product-name"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
      </div>

      <button
        className="mx-auto p-2 rounded-lg bg-blue-600 transition-transform hover:scale-105 text-white font-bold text-l"
        type="button"
        onClick={addVariation}
      >
        Add Variation
      </button>

      {variations.map((variation, index) => (
        <VariationForm
          key={index}
          removeVariation={variations.length > 1 ? () => removeVariation(index) : undefined}
          onUpdate={(updatedVariation) => {
            const updatedVariations = [...variations];
            updatedVariations[index] = updatedVariation;
            setVariations(updatedVariations);
          }}
          variationData={variation}
        />
      ))}

      <button
        className={`m-10 p-4 rounded-lg bg-green-600 transition-transform hover:scale-105 text-white font-bold text-xl ${
          !formValid && "opacity-50 cursor-not-allowed"
        }`}
        type="submit"
        disabled={!formValid}
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default ProductForm;
