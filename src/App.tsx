import React from 'react';
import './App.css';
import { NavOption } from './NavOption';

function App() {

  const options = [{name: 'Home'}, {name: 'My Files'}, {name: 'Recent Files'},
  {name: 'Shared Filed'}, {name: 'File Request'}, {name: 'Trash'}]

  return (
    <div className="App">

      <div className="sidebar">
        
        <div className='gradient-label'/>

        {options.map( (option) => {
          return <NavOption name={option.name}></NavOption>
        })}

      </div>

      <div className="medium-side">
        <h1>This is medium</h1>
      </div>

      <div className="aside">
        <h1>This is aside</h1>
      </div>

    </div>
  );
}

export default App;
