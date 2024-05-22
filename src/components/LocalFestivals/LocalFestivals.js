import React, { useState } from 'react';
import './LocalFestivals.css';

function LocalFestivals() {
  const [backgroundColors, setBackgroundColors] = useState(Array(3).fill('black'));
  const [selectedFestival, setSelectedFestival] = useState(null);

  const festivals = [
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2023/07/19/21/28/carnival-8137907_1280.jpg',
      festivalName: 'CARNIVAL',
      location: 'Rio de Janeiro, Brazil',
      date: 'Held every year before Lent',
      description: 'The Carnival in Rio de Janeiro is a festival held every year before Lent; it is considered the biggest carnival in the world, with two million people per day on the streets. The first Carnival festival in Rio occurred in 1723.'
    },
    {
      imageSrc: 'https://wallpapers.com/images/hd/mesmerizing-oktoberfest-tent-u1ayda4vd4yno0ue.jpg',
      festivalName: 'OKTOBERFEST',
      location: 'Munich, Germany',
      date: 'Mid- or late-September to the first Sunday in October',
      description: "Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling carnival, and is held annually in Munich with more than six million international and national visitors."
    },
    {
      imageSrc: 'https://img.freepik.com/premium-photo/la-tomatina-festival-spain_584200-3184.jpg',
      festivalName: 'LA TOMATINA',
      location: 'Buñol, Spain',
      date: 'Last Wednesday of August',
      description: 'La Tomatina is a festival that is held in the Valencian town of Buñol, in the east of Spain, in which participants throw tomatoes and get involved in a tomato fight purely for entertainment purposes.'
    }
  ];
  function generateRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 196) + ', ' + Math.floor(Math.random() * 196) + ', ' + Math.floor(Math.random() * 196) + ')';
}
  function handleCardClick(index) {
    const newColors = [...backgroundColors];
    newColors[index] = generateRandomColor();
    setBackgroundColors(newColors);
  }
  function handleDescriptionClick(festival) {
    setSelectedFestival(festival);
  }
  function handleClosePopup() {
    setSelectedFestival(null);
  }

  return (
    <div>
      <header>
        <h1>Local Festivals Across the World</h1>
      </header>
      <div className="container1">
        {festivals.map((festival, index) => (
          <div key={index} className="festival" style={{ backgroundColor: backgroundColors[index] }} onClick={() => handleCardClick(index)}>
            <img src={festival.imageSrc} alt="Festival" />
            <h2>{festival.festivalName}</h2>
            <p className="fontt"><b>Location:</b> {festival.location}</p>
            <p className="fontt"><b>Date:</b> {festival.date}</p>
            <button onClick={() => handleDescriptionClick(festival)}>Description</button>
          </div>
        ))}
      </div>
      {selectedFestival && (
        <div className="overlay">
          <div className="popup">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p><b>Description:</b> {selectedFestival.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocalFestivals;