// VariationForm.jsx
import React from "react";

const VariationForm = ({ removeVariation, variationData, onUpdate }) => {
  const sizes = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedVariation = { ...variationData, [name]: value };
    onUpdate(updatedVariation);
  };

  return (
    <div className="border-2 border-black rounded-lg m-6 p-4 space-y-4">
      <div className="md:flex justify-between gap-4">
        <label className="pr-2 font-semibold text-xl">Variation:</label>
        <input
          className="bg-gray-200 rounded-md text-xl"
          type="text"
          name="variation"
          value={variationData.variation}
          onChange={handleInputChange}
        />
      </div>
      <div className="md:flex justify-between gap-4 ">
        <label className="pr-2 font-semibold text-xl">Size:</label>
        <select
          className="bg-gray-200 rounded-md px-2 text-xl"
          name="size"
          value={variationData.size}
          onChange={handleInputChange}
        >
          <option disabled value="">
            Select Size
          </option>
          {sizes.map((size, idx) => (
            <option key={idx} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>

      <div className="md:flex justify-between gap-4">
        <label className="pr-2 font-semibold text-xl">Quantity:</label>
        <input
          className="bg-gray-200 rounded-md text-xl"
          type="text"
          name="quantity"
          value={variationData.quantity}
          onChange={handleInputChange}
        />
      </div>
      <div className="md:flex justify-between gap-4">
        <label className="pr-2 font-semibold text-xl">Price:</label>
        <input
          className="bg-gray-200 rounded-md text-xl"
          type="text"
          name="price"
          value={variationData.price}
          onChange={handleInputChange}
        />
      </div>

      {removeVariation && (
        <button
          className="m-0 p-2 border-1 rounded-lg bg-red-400 hover:bg-red-300 text-white font-bold text-l"
          onClick={removeVariation}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default VariationForm;
