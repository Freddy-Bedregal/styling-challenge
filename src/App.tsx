import React from "react";
import "./App.css";
import { ButtonNavLeft } from "./components/LeftSidebar/ButtonNavLeft/ButtonNavLeft";
import { HeaderLabel } from "./components/LeftSidebar/HeaderLabel/HeaderLabel";
import { NavOption } from "./components/LeftSidebar/NavOption/NavOption";

import { OptionsLeftBox } from "./components/LeftSidebar/OptionsLeftBox/OptionsLeftBox";
import { CardBig } from "./components/MediumPart/CardBig/CardBig";
import { HintLargeCard } from "./components/MediumPart/HintLargeCard/HintLargeCard";
import { LabelBottom } from "./components/MediumPart/LabelBottom/LabelBottom";
import { LabelTop } from "./components/MediumPart/LabelTop/LabelTop";
import { LargeCard } from "./components/MediumPart/LargeCard/LargeCard";
import { SearchBar } from "./components/MediumPart/SearchBar/SearchBar";
import { SmallCard } from "./components/MediumPart/SmallCard/SmallCard";
import { Footer } from "./components/RightSidebar/Footer/Footer";
import { Graph } from "./components/RightSidebar/Graph/Graph";
import { GraphDetail } from "./components/RightSidebar/GraphDetail/GraphDetail";
import { Header } from "./components/RightSidebar/Header/Header";

import { navOptionData } from "./data/data";
import { largeCardOptions } from "./data/data";
import { cardBigData } from "./data/data";
import { smallCardData } from "./data/data";
import { graphDetailData } from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <HeaderLabel/>

        <div className="nav-option-container">
          {navOptionData.map((data) => {
            return <NavOption name={data.name} key={data.name}/>;
          })}
        </div>

        <OptionsLeftBox/>

        <ButtonNavLeft/>
      </div>

      <div className="medium-side">
        <SearchBar/>

        <LabelTop/>

        <div className="big-cards-container">
          {cardBigData.map((data) => {
            return <CardBig title={data.title} date={data.date} key={data.title}/>;
          })}
        </div>

        <LabelBottom name="Recent Files"/>

        <HintLargeCard/>

        {largeCardOptions.map((option) => (
          <LargeCard
            name={option.name}
            key={option.name}
            members={option.members}
            modified={option.modified}
            color={option.color}
          />
        ))}

        <LabelBottom name="Share with me"/>

        <div className="small-cards-container">
          {smallCardData.map((data) => {
            return <SmallCard title={data.title} key={data.title}/>;
          })}
        </div>
      </div>

      <div className="aside">
        <Header/>

        <Graph/>

        <div className="graph-cards-detail-container">
          {graphDetailData.map((data) => {
            return (
              <GraphDetail
                squareColor={data.squareColor}
                size={data.size}
                key={data.squareColor}
              />
            );
          })}
        </div>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
