import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data: Restaurant = {
  name: '0Sik',
  category: 'western',
  address: {
    city: 'ansan',
    detail: 'somewhere',
    zipCode: 910829,
  },
  menu: [
    { name: 'first', price: 1000, category: 'AAA' },
    { name: 'second', price: 2000, category: 'BBB' },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({...myRestaurant, address: address})
  }

  const showBestMenuName = (name: string) => {
    return name
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      {/* <BestMenu name="불고기 피자" category="피자" price={1000} showBestMenuName={showBestMenuName} /> */}
      <BestMenu name="불고기 피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
