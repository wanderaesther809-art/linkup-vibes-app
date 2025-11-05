import React from "react";
// We removed the old image import since the file is now in the public folder
import "./App.css";

function App() {
  return (
    <div className="poster">
      {/* Title */}
      <h1 className="title">🌈 Link & Groove</h1>

      <div className="image-section">
        <img
          // ⭐ CRITICAL FIX: Direct reference to the file in the public folder
          src="/cheers.jpg"
          alt="Friends cheering with drinks"
          className="cheers-img"
        />
      </div>

      {/* 📍 Logistics and Entry Details */}
      <p className="details">
        <strong>Date:</strong> 14th November <br />
        <strong>Time:</strong> 1:00 PM – 12:00 <br />
        <strong>Location:</strong> Mbaruk Road, off Ngong Rd <br />
        (Opposite Homescope Mbagathi) <br />
        <strong>Entry:</strong> Ksh 500 (Advance)
      </p>

      {/* 💰 Payment and Vibe Description */}
      <p className="description">
        Don’t miss out — the vibes are real, the energy unmatched. Get your
        ticket now!
        <br />
        <br />
        **TO RESERVE YOUR SPOT:** Send Ksh 500
         to 0112877242(use pochi la biashara)
        <br />
        **IMPORTANT:** Screenshot your payment confirmation and send it directly
        to our DM to finalize your entry!
        <br />
        <br />
        🍹 Drinks flowing, good music, and amazing people — everything you need
        to keep the vibes alive! ✨
      </p>

      <footer className="footer">Come vibe, link & make memories 💫</footer>
    </div>
  );
}

export default App;
