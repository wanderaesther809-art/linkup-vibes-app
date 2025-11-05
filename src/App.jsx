import React from "react";
import cheersImg from "./assets/cheers.jpg";
import "./App.css";

function App() {
  return (
    <div className="poster">
      {/* Title: Using the Link & Groove brand */}
      <h1 className="title">🌈 Link & Groove</h1>

      <div className="image-section">
        <img
          src={cheersImg}
          alt="Friends cheering with drinks"
          className="cheers-img"
        />
      </div>

      {/* 📍 CORRECTED DETAILS SECTION: Location is now included here */}
      <p className="details">
        <strong>Date:</strong> 14th November <br />
        <strong>Time:</strong> 1:00 PM – 10:00 PM <br />
        {/* 👇 Location details added */}
        <strong>Location:</strong> Mbaruk Road, off Ngong Rd <br />
        (Opposite Homescope Mbagathi) <br />
        {/* 👆 End of location details */}
        <strong>Entry:</strong> Ksh 500 (pochi la biashara)  {/* Advance / Gate */}
      </p>

      {/* 💰 Description with full payment details */}
      <p className="description">
        Don’t miss out — the vibes are real, the energy unmatched. Get your
        ticket now!
        <br />
        <br />
        **TO RESERVE YOUR SPOT:** Send **Ksh 500**
        to **0112877242**.
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
