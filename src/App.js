import React from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar';
import HeroImage from './components/HeroImage';
import SkillsGrid from './components/SkillsGrid';
import DiegoCard from './components/DiegoCard';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80")', backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
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
      <div>
        <FooterPage />
      </div>

    </div>
  );
}

export default App;
