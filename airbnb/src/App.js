import React from 'react';
import Navbar from './components/Narbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data.js";


function App() {
  const imagePath = "/images/"; // Adjust the path as necessary
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={imagePath + item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
        locaction={item.location}
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
