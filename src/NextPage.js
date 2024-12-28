import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './App.css'; // Import the same CSS file to apply styles

function NextPage() {
  // State to keep track of the button click count
  const [clickCount, setClickCount] = useState(0);

  // Create a reference to the video element
  const videoRef = useRef(null);

  // Load the count from localStorage when the component mounts
  useEffect(() => {
    const savedCount = localStorage.getItem("clickCount");
    if (savedCount) {
      setClickCount(Number(savedCount)); // Set the click count from localStorage
    }

    // Reset the video when it finishes
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", () => {
        videoElement.currentTime = 0;  // Reset video to start
        videoElement.pause();  // Pause the video after it ends
      });
    }

    // Cleanup the event listener when component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => {});
      }
    };
  }, []);

  // Function to handle button click, increment count, and play video
  const handleButtonClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      // Save the updated count to localStorage
      localStorage.setItem("clickCount", newCount);
      return newCount;
    });

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        console.log('Video started playing!');
      }).catch((error) => {
        console.error('Error trying to play the video:', error);
      });
    }
  };

  // Function to reset the count to 0
  const resetCount = () => {
    setClickCount(0);
    localStorage.removeItem("clickCount");  // Clear the count from localStorage
    console.log("Counter reset!"); // Log to confirm the reset
  };

  return (
    <div className="container">
      <h1>Well Deserved!</h1>

      {/* Embed the video (now from public folder) */}
      <div className="video-container">
        <video ref={videoRef} width="80%" controls>
          <source src="/assets/slap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Button to increase click count and play the video */}
      <button onClick={handleButtonClick}>
        How Many Slaps Does It Take?
      </button>

      <p>You’ve been slapped {clickCount} times already—when are you going to learn? Or is this your way of collecting free lessons?</p>

      <br />
      <br />
      <br />

      {/* Redirect Button */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button onClick={resetCount}>
          Got it yet? Click here to prove it!
        </button>
      </Link>
    </div>
  );
}

export default NextPage;
