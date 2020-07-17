import React from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar';
import HeroImage from './components/HeroImage';
import SkillsGrid from './components/SkillsGrid';
import DiegoCard from './components/DiegoCard';

function App() {
  return (
    <div className="App">
      <div>
        <ButtonAppBar />
        <HeroImage /> 
      </div>
      <div>
        <SkillsGrid />
      </div>
      <div>
        <DiegoCard />
      </div>        
    </div>
  );
}

export default App;
