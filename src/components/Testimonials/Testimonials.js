import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const handleSubmit = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
        {}
        <TestimonialForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const TestimonialForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { 
      name,
      text,
    };
    onSubmit(newTestimonial);
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="testimonial-form">
      <h2>Submit Your Testimonial</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Testimonial:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const Testimonial = ({ imgSrc, name, text }) => {
  return (
    <div className="col">
      <div className="testimonial">
        <img src={imgSrc} alt="" />
        <div className="name">{name}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Testimonials;
