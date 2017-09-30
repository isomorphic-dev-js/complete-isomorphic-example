import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src={props.thumbnail} alt="cart" />
      </div>
      <div className="middle aligned content">
        {props.name}
      </div>
      <div className="right aligned content">
      ${props.price}
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default Item;
