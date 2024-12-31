import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";  
import NextPage from './NextPage';


function HomePage() {
  useEffect(() => {
    document.title = "Slapper!";
  }, []);

  return (
    <div className="container">
      <h1>Did you do something stupid?</h1>
      <p>
        Life happens. Sometimes we do things that make us question our entire existence. If this is one of those moments, don’t sweat it—you’re definitely not alone. In fact, we’ve all been there! So, throw your hands up, embrace the chaos, and wear that mistake like a badge of honor!
      </p>
      <Link to="/slap"> 
        <button>
          If you did something stupid, you deserved this. Click here.
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/slap" element={<NextPage />} />
    </Routes>
  );
}

export default App;
