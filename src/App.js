import React from 'react';
import './App.css';
import AuctionTile from './AuctionTile'

function App() {
  const auctionsArr = [
    {
      id: 1,
      item: 'Desk',
      price: 340
    },
    {
      id: 2,
      item: 'Armchair',
      price: 200
    },
    {
      id: 3,
      item: 'Wardrobe',
      price: 550
    }
  ]

  const auctions = auctionsArr.map((auction, pos) => {
    return (
      <AuctionTile key={pos} name={auction.item} price={auction.price}/>
    );
  })

  return (
    <div className="App">
      <h2 className="Allogo">
        AllegReactJSo
      </h2>
        {auctions}
    </div>
  );
}

export default App;
