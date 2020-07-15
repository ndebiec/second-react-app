import React from 'react';

const AuctionTile = (props) => {
  return (
    <div className="AuctionTile">
      <h3>{props.name}</h3>
      <p>Only {props.price} $</p>
    </div>
  )
}


export default AuctionTile;
