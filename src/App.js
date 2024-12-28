import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";  // Import Routes, Route, Link
import NextPage from './NextPage'; // Import NextPage component

// Home Page Component
function HomePage() {
  // Set the page title dynamically
  useEffect(() => {
    document.title = "Home Page - Well Deserved!";
  }, []);

  return (
    <div className="container">
      <h1>Did you do something stupid?</h1>
      <p>
        Life happens. Sometimes we do things that make us question our entire existence. If this is one of those moments, don’t sweat it—you’re definitely not alone. In fact, we’ve all been there! So, throw your hands up, embrace the chaos, and wear that mistake like a badge of honor!
      </p>
      <Link to="/next"> {/* Link to NextPage route */}
        <button>
          If you did something stupid, you deserved this. Click here.
        </button>
      </Link>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Home page route */}
      <Route path="/next" element={<NextPage />} /> {/* Next page route */}
    </Routes>
  );
}

export default App;
