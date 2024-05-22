import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Culture from './components/Culture/Culture';
import Tour from './components/Tour/Tour';
import Header from './components/Header/Header';
import Restaurants from './components/Restaurants/RestaurantGrid';
import AboutUs from './components/AboutUs/AboutSection';
import Weather from './components/Weather/WeatherSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import './styles/styles.css';
import Booking from './components/Booking/BookingForm';
import LocalFestivals from './components/LocalFestivals/LocalFestivals';
import Starrating from './components/Starrating/Starrating';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Booking />
      <Culture />
      <Header />
      <Restaurants />
      <Tour />
      <LocalFestivals />
      <Weather />
      <AboutUs />
      <Testimonials />
      <Starrating />
      <Footer />
    </div>
  );
}

export default App;
