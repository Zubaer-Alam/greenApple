import "./App.css";

function App() {
  
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
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e.target.quantity.value);
    console.log(e.target.option.value);
  };
  return (
    <>
      <div className="p-2 container lg:w-10/12 mx-auto">
        <form
          onSubmit={handleAdd}
          className=" md:w-4/5 lg:w-3/5 mx-auto  border-2 border-black   flex flex-col justify-center  my-20  rounded-lg"
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
                name=""
                id="product-name"
              />
            </div>
            <div className="border-2 border-black rounded-lg m-6 p-4 space-y-4">
              <div className="md:flex justify-between gap-4">
                <label className="pr-2 font-semibold text-xl">Variation:</label>
                <input
                  className="bg-gray-200 rounded-md text-xl"
                  type="text"
                  name=""
                  id="product-name"
                />
              </div>
              <div className="md:flex justify-between gap-4 ">
                <label className="pr-2 font-semibold text-xl">Size:</label>
                <select
                  className="bg-gray-200 rounded-md px-2 text-xl"
                  name=""
                  id=""
                >
                  {sizes.map((size, idx) => (
                    <option key={idx} value={size.value} name="option">
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:flex justify-between gap-4">
                <label className=" pr-2 font-semibold text-xl">Quantity:</label>
                <input
                  className="bg-gray-200 rounded-md text-xl"
                  type="text"
                  name="quantity"
                  id="product-name"
                />
              </div>
              <div className="md:flex justify-between gap-4">
                <label className="pr-2 font-semibold text-xl">Price:</label>
                <input
                  className="bg-gray-200 rounded-md text-xl"
                  type="text"
                  name=""
                  id="product-name"
                />
              </div>
            </div>
          </div>
          <button
            className="m-10 p-1 border-2 rounded-lg bg-green-400 hover:bg-green-300 text-white font-bold text-xl"
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
