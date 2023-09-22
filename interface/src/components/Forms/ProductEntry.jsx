import "../../App.css";
import axios from "axios";
import React, { useState } from "react";
import VariationForm from "../VariationForm";

const ProductForm = () => {
  const [variations, setVariations] = useState([
    {
      variation: "",
      size: "",
      quantity: "",
      price: "",
    },
  ]);

  const send = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/products",
        data
      );
      console.log("Data sent successfully:", response.data);
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

    const productId = e.target["product-id"].value;
    const productName = e.target["product-name"].value;

    const variationsData = variations.map((variation) => ({
      variation: variation.variation,
      size: variation.size,
      quantity: variation.quantity,
      price: variation.price,
    }));

    const data = {
      "product-id": productId,
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

  return (
    
      <form
        onSubmit={handleAdd}
        className="text-black md:w-3/5 lg:w-3/5 mx-auto  border-2 border-black   flex flex-col justify-center  my-20  rounded-lg"
      >
        <div className="flex flex-col gap-4 m-10">
          <div className="sm:flex justify-between gap-4">
            <label className="font-semibold text-xl">Product ID:</label>
            <input
              className="bg-gray-200 rounded-md text-xl"
              type="text"
              name="product-id"
            />
          </div>
          <div className="md:flex justify-between gap-4">
            <label className="font-semibold text-xl">Product Name:</label>
            <input
              className=" rounded-md text-xl bg-gray-200"
              type="text"
              name="product-name"
              id="product-name"
            />
          </div>
        </div>

        <button
          className="m-10 p-3 border-1 rounded-lg bg-green-400 hover:bg-green-300 text-white font-bold text-l"
          type="button"
          onClick={addVariation}
        >
          Add Variation
        </button>

        {variations.map((variation, index) => (
          <VariationForm
            key={index}
            removeVariation={
              variations.length > 1 ? () => removeVariation(index) : undefined
            }
            onUpdate={(updatedVariation) => {
              const updatedVariations = [...variations];
              updatedVariations[index] = updatedVariation;
              setVariations(updatedVariations);
            }}
            variationData={variation}
          />
        ))}

        <button
          className="m-10 p-4 border-1 rounded-lg bg-green-400 hover:bg-green-300 text-white font-bold text-xl"
          type="submit"
        >
          ADD
        </button>
      </form>
    
  );
}

export default ProductForm;
