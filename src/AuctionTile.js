import React from 'react';
import styles from './AuctionTile.module.css';

const AuctionTile = (props) => {
  return (
    <div className={styles.AuctionTile}>
      <h3>{props.name}</h3>
      <p>Only {props.price} $</p>
    </div>
  )
}

export default AuctionTile;
