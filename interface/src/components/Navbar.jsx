import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiClipboardList, HiTable, HiUserGroup } from "react-icons/hi";
import ProductForm from "./Forms/ProductEntry";
import ProductCard from "./Card";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const {logout} = useAuth()
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item icon={HiTable} title="Stock">
          <div className="flex flex-wrap">
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </Tabs.Item>

        <Tabs.Item active icon={HiUserGroup} title="Users">
          <p>USER MANAGEMENT</p>
        </Tabs.Item>

        <Tabs.Item icon={HiClipboardList} title="Entry">
          <ProductForm />
        </Tabs.Item>
      </Tabs.Group>
      <button
        type="button"
        onClick={logout}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
