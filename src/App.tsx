import React from 'react';
import './App.css';
import { ButtonNavLeft } from './components/LeftSidebar/ButtonNavLeft/ButtonNavLeft';
import { NavOption } from './components/LeftSidebar/NavOption/NavOption';

import { OptionsLeftBox } from './components/LeftSidebar/OptionsLeftBox/OptionsLeftBox';
import { CardBig } from './components/MediumPart/CardBig/CardBig';
import { HintLargeCard } from './components/MediumPart/HintLargeCard/HintLargeCard';
import { LabelBottom } from './components/MediumPart/LabelBottom/LabelBottom';
import { LabelTop } from './components/MediumPart/LabelTop/LabelTop';
import { LargeCard } from './components/MediumPart/LargeCard/LargeCard';
import { SearchBar } from './components/MediumPart/SearchBar/SearchBar';
import { SmallCard } from './components/MediumPart/SmallCard/SmallCard';
import { Footer } from './components/RightSidebar/Footer/Footer';
import { Graph } from './components/RightSidebar/Graph/Graph';
import { GraphDetail } from './components/RightSidebar/GraphDetail/GraphDetail';
import { Header } from './components/RightSidebar/Header/Header';

function App() {

  const options = [{name: 'Home'}, {name: 'My Files'}, {name: 'Recent Files'},
  {name: 'Shared Filed'}, {name: 'File Request'}, {name: 'Trash'}]

  const largeCardOptions = [
    {name: 'Travel landing page', members: '5 members', modified: 'Mar 8, 2020', color: '#FF9F00'},
    {name: 'True Photos', members: '12 members', modified: 'Mar 8, 2020', color: '#4AC29D'},
    {name: 'Dashboard Structure', members: '10 members', modified: 'Mar 9, 2020', color: '#FF6860'},
    {name: 'Character Illusstration', members: '3 members', modified: 'Mar 10, 2020', color: '#FF9F00'}
  ]

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

        {largeCardOptions.map( (option) => 
          <LargeCard name={option.name} members={option.members} modified={option.modified} color={option.color}></LargeCard>
        )}

        <LabelBottom name='Share with me'></LabelBottom>

        <div className='small-cards-container'>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
        </div>
        
      </div>

      <div className="aside">
        <Header></Header>

        <Graph></Graph>  

      <div className='graph-cards-detail-container'>
        <GraphDetail></GraphDetail>
        <GraphDetail></GraphDetail>
        <GraphDetail></GraphDetail>
        <GraphDetail></GraphDetail>
      </div>    
        
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
