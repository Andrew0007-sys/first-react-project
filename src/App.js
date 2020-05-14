import React from 'react';
import ClassComp from './ClassComp';
import ComponentA from './task2/ComponentA';

function App() {
  return (
    <div className="App">
        <p>
          H!
        </p>
        <ClassComp />
        <div> 
            <ComponentA />
        </div>
    </div>
  );
}

export default App;
