import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    visitor_name: '',
    visitor_phone: '',
    total_adults: 1,
    total_children: 0,
    checkin: '',
    checkout: '',
    room_preference: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };
  const totalGuests =
    parseInt(formData.total_adults, 10) + parseInt(formData.total_children, 10);

  return (
    <div>
      <h1 className="booking">BOOK NOW</h1>
      <div className="container2">
        <form onSubmit={handleSubmit}>
          <div className="elem-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="visitor_name"
              placeholder="Mehak Sharma"
              pattern="[A-Za-z\s]{3,20}"
              value={formData.visitor_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="elem-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="498-348-3872"
              pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
              value={formData.visitor_phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="adult">Adults</label>
            <input
              type="number"
              id="adult"
              name="total_adults"
              placeholder="2"
              min="1"
              value={formData.total_adults}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="child">Children</label>
            <input
              type="number"
              id="child"
              name="total_children"
              placeholder="2"
              min="0"
              value={formData.total_children}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="elem-group inlined">
            <label htmlFor="checkin-date">Check-in</label>
            <input
              type="date"
              id="checkin-date"
              name="checkin"
              value={formData.checkin}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="checkout-date">Check-out</label>
            <input
              type="date"
              id="checkout-date"
              name="checkout"
              value={formData.checkout}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="elem-group">
            <label htmlFor="total-guests">Total Guests</label>
            <input
              type="text"
              id="total-guests"
              name="total_guests"
              value={totalGuests || ''}
              readOnly
            />
          </div>
          <div className="elem-group">
            <label htmlFor="room-selection">Select Room Preference</label>
            <select
              id="room-selection"
              name="room_preference"
              value={formData.room_preference}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a Room from the List</option>
              <option value="connecting">Connecting</option>
              <option value="adjoining">Adjoining</option>
              <option value="adjacent">Adjacent</option>
            </select>
          </div>
          <div className="center-btn">
            <button type="submit" className="btn">
              BOOK TOUR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;