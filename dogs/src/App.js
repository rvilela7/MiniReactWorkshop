import React, { useState } from 'react';
import './App.css';
import dogs from './data/dogs';

//Component
import DogsSelected from './components/DogsSelected/DogsSelected';

const App = () => {
  const [ dog, selectDog ] = useState('');
  
  return (
    <div className='App'>
      <div className='all-dogs'>
        {dogs.map((dog, i) => (
          <div key={i} onClick={() => selectDog(dog.name)} className='dog-card'>
            <h1>Name: {dog.name}</h1>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
          </div>
        ))}
      </div>
      
      <DogsSelected name={dog}/> 
    </div>
  );
};

export default App;