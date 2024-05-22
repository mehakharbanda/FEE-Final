import React, { useState } from "react";
import "./Starrating.css";

export default function Starrating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const totalStars = 5;

  return (
    <div className="star-rating-container">
      <h1>Star Rating</h1>
      <div className="star-container">
        {[...Array(totalStars)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label
              key={index}
              className={`star-label ${currentRating <= (hover || rating) ? "filled" : ""}`}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                style={{ display: "none" }}
              />
              <svg
                className="star"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f3ec78", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#af4261", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.975 1.416 8.292L12 18.897l-7.352 4.676 1.416-8.292L.001 9.306l8.332-1.151z"/>
              </svg>
            </label>
          );
        })}
      </div>
      <div>
        <p>Your rating is: {rating || "Not rated yet"}</p>
      </div>
    </div>
  );
}
