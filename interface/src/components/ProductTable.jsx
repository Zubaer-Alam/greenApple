import React, { useEffect, useState } from "react";
import axios from "axios";

function TableDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the data from your backend
    axios.get("http://localhost:3000/api/products")
      .then((response) => {
        // Update the state with the received data
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Variations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product["product-id"]}</td>
              <td>{product.name}</td>
              <td>
                <ul>
                  {product.variations.map((variation) => (
                    <li key={variation._id}>
                      Variation: {variation.variation}<br />
                      Size: {variation.size}<br />
                      Price: {variation.price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
