import React from 'react';
import Navbar from './components/Narbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data.js";


function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-container">
      {cards}
      </section>
    </div>
  );
}

export default App;
