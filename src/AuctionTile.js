import React from 'react';
import {logErrors, logError} from './Utils'


const AuctionTile = (props) => {
  logError('Just kiddin, everythihg ok')
  return (
    <div className="AuctionTile">
      <h3>{props.name}</h3>
      <p>Only {props.price} $</p>
    </div>
  )
}


export default AuctionTile;
