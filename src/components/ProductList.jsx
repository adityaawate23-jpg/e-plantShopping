import { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Cactus", price: 8, category: "Succulents" },
  { id: 5, name: "Ficus", price: 18, category: "Indoor" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering" }
];

function ProductList() {
  const [added, setAdded] = useState([]);

  return (
    <div>
      <h1>Plants</h1>

      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button
            disabled={added.includes(p.id)}
            onClick={() => setAdded([...added, p.id])}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
