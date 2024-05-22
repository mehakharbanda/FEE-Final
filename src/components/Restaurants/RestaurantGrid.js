import React, { useState } from 'react';
import './RestaurantGrid.css';

const RestaurantGrid = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const openPreview = (src) => {
    const modal = document.getElementById("imagePreview");
    const modalImg = document.getElementById("previewImg");
    modalImg.src = src;
    modal.style.display = "block";
  };

  const closePreview = () => {
    const modal = document.getElementById("imagePreview");
    modal.style.display = "none";
  };

  return (
    <section className="container">
      <div id="restaurant" className="Restaurants">
        <div className="hover" onClick={() => openPreview("bogainvillea.jpg")}>
          <img src="bogainvillea.jpg" alt="Bogainvillea" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Restaurant Bougainvillea<br /><span className="location"><img src="location.png" alt="Location Favicon" />The Netherlands</span></p>
          </div>
        </div>
        {
          <div className="hover" onClick={() => openPreview("ise-suyoshi.jpg")}>
          <img src="ise-suyoshi.jpg" alt="Ise Suyoshi" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Ise Suyoshi<br /><span className="location"><img src="location.png" alt="Location Favicon" />Nishiazabu, Japan</span></p>
          </div>
        </div>
        }
        {
        <div className="hover" onClick={() => openPreview("akira-back.jpg")}>
          <img src="akira-back.jpg" alt="Akira Back" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Akira Back<br /><span className="location"><img src="location.png" alt="Location Favicon" />Bangkok, Thailand</span></p>
          </div>
        </div>
}
        {
        <div className="hover" onClick={() => openPreview("maison medard.jpg")}>
          <img src="maison medard.jpg" alt="Maison Medard" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Maison Medard<br /><span className="location"><img src="location.png" alt="Location Favicon" />Boullerat, France</span></p>
          </div>
        </div>
        }
        <div className="hover" onClick={() => openPreview("restaurante pontremoli.jpg")}>
          <img src="restaurante pontremoli.jpg" alt="Restaurant Pontremoli" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Restaurant Pontremoli<br /><span className="location"><img src="location.png" alt="Location Favicon" />Brazil</span></p>
          </div>
        </div>
        {
        <div className="hover" onClick={() => openPreview("almira-restaurent.jpg")}>
          <img src="almira-restaurent.jpg" alt="Almira Restaurant" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Almira Restaurant<br /><span className="location"><img src="location.png" alt="Location Favicon" />Santorini, Greece</span></p>
          </div>
        </div>
        
        }
        {
        <div className="hover" onClick={() => openPreview("waitui-bar-grill.jpg")}>
          <img src="waitui-bar-grill.jpg" alt="Waitui Bar & Grill" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Waitui Bar & Grill<br /><span className="location"><img src="location.png" alt="Location Favicon" />Viti levu, Fiji</span></p>
          </div>
        </div>
}
        {
        <div className="hover" onClick={() => openPreview("Avartana-interior.jpg")}>
          <img src="Avartana-interior.jpg" alt="Avartana" />
          <div className="restaurant-title-bg">
            <p className="restaurant-title">Avartana<br /><span className="location"><img src="location.png" alt="Location Favicon" />Chennai, India</span></p>
          </div>
        </div>
        }
      </div>
      <div id="imagePreview" className="modal" onClick={closePreview}>
        <span className="close" onClick={closePreview}>&times;</span>
        <img className="modal-content" id="previewImg" alt="Preview" />
      </div>
    </section>
  );
};

export default RestaurantGrid;
