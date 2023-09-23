import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiClipboardList, HiTable, HiUserGroup } from "react-icons/hi";
import ProductForm from "./Forms/ProductEntry";
import ProductCard from "./Card"; 

export default function Navbar() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .then(console.log(productData))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">
      <Tabs.Item active icon={HiUserGroup} title="Users">
        <p>USER MANAGEMENT</p>
      </Tabs.Item>

      <Tabs.Item icon={HiTable} title="Stock">
        <div className="flex flex-wrap">
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </Tabs.Item>

      <Tabs.Item icon={HiClipboardList} title="Entry">
        <ProductForm />
      </Tabs.Item>
    </Tabs.Group>
  );
}
