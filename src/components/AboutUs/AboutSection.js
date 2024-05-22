import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const [completedTrips, setCompletedTrips] = useState(0);
    const [tourGuides, setTourGuides] = useState(0);
    const [destinations, setDestinations] = useState(0);

    const completedTripsTimeout = useRef(null);
    const tourGuidesTimeout = useRef(null);
    const destinationsTimeout = useRef(null);

    useEffect(() => {
        const incrementCompletedTrips = () => {
            setCompletedTrips(prevCount => {
                if (prevCount < 387) {
                    return prevCount + 1;
                }
                clearTimeout(completedTripsTimeout.current);
                return prevCount;
            });
        };

        const incrementTourGuides = () => {
            setTourGuides(prevCount => {
                if (prevCount < 98) {
                    return prevCount + 1;
                }
                clearTimeout(tourGuidesTimeout.current);
                return prevCount;
            });
        };

        const incrementDestinations = () => {
            setDestinations(prevCount => {
                if (prevCount < 71) {
                    return prevCount + 1;
                }
                clearTimeout(destinationsTimeout.current);
                return prevCount;
            });
        };

        completedTripsTimeout.current = setInterval(incrementCompletedTrips, 50);
        tourGuidesTimeout.current = setInterval(incrementTourGuides, 25);
        destinationsTimeout.current = setInterval(incrementDestinations, 100);

        return () => {
            clearInterval(completedTripsTimeout.current);
            clearInterval(tourGuidesTimeout.current);
            clearInterval(destinationsTimeout.current);
        };

    }, []);

    return (
        <section className="about">
            <div id="about" className="container">
                <div className="about-content">
                    <div className="image">
                        <img src="https://images.pexels.com/photos/1103971/pexels-photo-1103971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Left Image" />
                    </div>
                    <div className="text">
                        <h2>About Us</h2>
                        <h4>Take only memories, leave only footprints.</h4>
                        <p>Our purpose is to serve a comprehensive resource and platform that empowers travelers to explore 
                            the world, make meaningful connections and create unforgettable experiences.</p>
                        <div className="item-data">
                            <div className="col">
                                <h1>{completedTrips}</h1>
                                <span>completed trips</span>
                            </div>
                            <div className="col">
                                <h1>{tourGuides}</h1>
                                <span>Tour Guides</span>
                            </div>
                            <div className="col">
                                <h1>{destinations}</h1>
                                <span>Destinations</span>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Right Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
