import React from 'react';
import './App.css';
import { ButtonNavLeft } from './components/LeftSidebar/ButtonNavLeft/ButtonNavLeft';
import { HeaderLabel } from './components/LeftSidebar/HeaderLabel/HeaderLabel';
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

import { options } from './data/data';
import { largeCardOptions } from './data/data';
import { cardBigData } from './data/data';
import { smallCardData } from './data/data';
import { graphDetailData } from './data/data';

function App() {

  return (
    <div className="App">

      <div className="sidebar">
        
        <HeaderLabel></HeaderLabel>

        <div className='nav-option-container'>
          {options.map( (option) => {
            return <NavOption name={option.name}></NavOption>
          })}
        </div>

        <OptionsLeftBox></OptionsLeftBox>

        <ButtonNavLeft></ButtonNavLeft>

      </div>

      <div className="medium-side">

        <SearchBar></SearchBar>

        <LabelTop></LabelTop>

        <div className='big-cards-container'>
          {cardBigData.map( (data) => {
            return <CardBig title={data.title} date={data.date}></CardBig>
          })}
        </div>

        <LabelBottom name='Recent Files'></LabelBottom>

        <HintLargeCard></HintLargeCard>

        {largeCardOptions.map( (option) => 
          <LargeCard name={option.name} members={option.members} modified={option.modified} color={option.color}></LargeCard>
        )}

        <LabelBottom name='Share with me'></LabelBottom>

        <div className='small-cards-container'>
          {smallCardData.map( (data) => {
            return <SmallCard title={data.title}></SmallCard>
          })}
        </div>
        
      </div>

      <div className="aside">
        <Header></Header>

        <Graph></Graph>  

          <div className='graph-cards-detail-container'>
            {graphDetailData.map( (data) => {
              return <GraphDetail squareColor={data.squareColor} size={data.size}></GraphDetail>
            })}
         </div>    
        
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
