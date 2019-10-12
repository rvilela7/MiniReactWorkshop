import React, { useState } from 'react';
import './App.css';
import dogs from './data/dogs';

//Component
import DogsSelected from './components/DogsSelected/DogsSelected';

const App = () => {  //Functional code
  const [ dog, selectDog ] = useState('');  //Construtor v2
  
  return (
    <div className='App'>
      <div className='all-dogs'>
        {dogs.map((el, i) => (
          //() => não chama imediatamente

          <div key={i} onClick={() => selectDog(el.name)} className='dog-card'> 
            <h1>Name: {el.name}</h1>
            <p>Breed: {el.breed}</p>
            <p>Age: {el.age}</p>
          </div>
        ))}
      </div>
      
      <DogsSelected name={dog}/> 
    </div>
  );
};

export default App;