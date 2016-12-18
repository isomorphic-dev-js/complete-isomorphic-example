import React from 'react';

const Products = () => {
  return (
    <div className="products">
      <h1 className="ui dividing header">Shop by Category</h1>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Find products" />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
      <div className="ui doubling four column grid">
        <div className="column segment secondary">
          <i className="coffee icon" />
          <div>Gifts</div>
        </div>
        <div className="column segment secondary">
          <i className="food icon" />
          <div>Treats and Food</div>
        </div>
        <div className="column segment secondary">
          <i className="heart icon" />
          <div>Top Picks</div>
        </div>
        <div className="column segment secondary">
          <i className="paw icon" />
          <div>For Dogs</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
