import React, { useState } from "react";
import products from "../../data/Product/Product.js";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import "./Product.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="products-page">
      <section className="products-header">
        <h1 className="section-title">Our Products</h1>
        <p className="muted">Browse from our curated handmade collection.</p>
      </section>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="no-results">No products found. Try another search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
