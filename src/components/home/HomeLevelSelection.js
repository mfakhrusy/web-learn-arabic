import React from 'react';
import LevelItem from 'components/home/LevelItem';

const levelItemTitles = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
const levelItems = levelItemTitles.map((item, index) => (
  <LevelItem key={index.toString()} id={`HomeLevelSelection-grid-item-${index + 1}`}>
    <p>{item}</p>
  </LevelItem>
));

const HomeLevelSelection = () => (
  <div className="HomeLevelSelection">
    {levelItems}
  </div>
);

export default HomeLevelSelection;
