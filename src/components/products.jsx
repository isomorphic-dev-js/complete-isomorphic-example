import React from 'react';

const Products = () => {
  return (
    <div className="products">
      <div className="ui search">
        <div className="ui item input">
          <input
            className="prompt"
            type="text"
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
      <h1 className="ui dividing header">Shop by Category</h1>
      <div className="ui doubling four column grid">
        <div className="column segment secondary">
          <i className="coffee icon" />
          <div className="category-title">Gifts</div>
        </div>
        <div className="column segment secondary">
          <i className="food icon" />
          <div className="category-title">Treats and Food</div>
        </div>
        <div className="column segment secondary">
          <i className="heart icon" />
          <div className="category-title">Top Picks</div>
        </div>
        <div className="column segment secondary">
          <i className="paw icon" />
          <div className="category-title">For Dogs</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
