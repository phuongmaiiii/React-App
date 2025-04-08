import React from "react";
import Contact from "./components/Contact";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";

function App() {
  return (
    <div className="contacts">
      <Contact 
        img={cat1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contact 
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
      <Contact 
        img={cat4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com"
      />

      
    </div>
  );
}

export default App;
