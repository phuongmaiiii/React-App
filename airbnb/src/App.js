import React from 'react';
import Navbar from './components/Narbar';
import Hero from './components/Hero';
import Card from './components/Card';
import logo from "./images/image1.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={logo}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
