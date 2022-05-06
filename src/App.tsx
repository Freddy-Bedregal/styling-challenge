import React from 'react';
import './App.css';
import { ButtonNavLeft } from './components/LeftSidebar/ButtonNavLeft/ButtonNavLeft';
import { NavOption } from './components/LeftSidebar/NavOption/NavOption';

import { OptionsLeftBox } from './components/LeftSidebar/OptionsLeftBox/OptionsLeftBox';
import { CardBig } from './components/MediumPart/CardBig/CardBig';
import { HintLargeCard } from './components/MediumPart/HintLargeCard/HintLargeCard';
import { LabelBottom } from './components/MediumPart/LabelBottom/LabelBottom';
import { LabelTop } from './components/MediumPart/LabelTop/LabelTop';
import { SearchBar } from './components/MediumPart/SearchBar/SearchBar';

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

        <OptionsLeftBox></OptionsLeftBox>

        <ButtonNavLeft></ButtonNavLeft>

      </div>

      <div className="medium-side">
        <SearchBar></SearchBar>
        <LabelTop></LabelTop>
        <div className='big-cards-container'>
          <CardBig></CardBig>
          <CardBig></CardBig>
          <CardBig></CardBig>
        </div>

        <LabelBottom name='Recent Files'></LabelBottom>

        <HintLargeCard></HintLargeCard>

      </div>

      <div className="aside">
        <h1>This is aside</h1>
      </div>

    </div>
  );
}

export default App;
