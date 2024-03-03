import React from 'react';
import { useGlobalContext } from '../context';

const Home = () => {
  const name = useGlobalContext();
  return (
    <div>
      <h1>This is Movie</h1>
      <p>{name}</p>
    </div>
  );
};

export default Home;
