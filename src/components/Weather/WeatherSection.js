import React, { useState, useEffect } from 'react';
import './WeatherSection.css';

const weatherDataByCountry = {
    'United States': [
        { day: 'Monday', temperature: '25°C', status: 'Partly Cloudy', humidity: '60%', wind: '15 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' },
        { day: 'Tuesday', temperature: '20°C', status: 'Thunderstorm', humidity: '70%', wind: '20 km/h', icon: 'https://www.transparentpng.com/thumb/thunderstorm/collection-of-thunder-storm-icons-png-19.png' },
        { day: 'Wednesday', temperature: '30°C', status: 'Cloudy', humidity: '55%', wind: '10 km/h', icon: 'https://freesvg.org/img/sivvus_weather_symbols_3.png' }
    ],
    'India': [
        { day: 'Monday', temperature: '35°C', status: 'Sunny', humidity: '45%', wind: '5 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' },
        { day: 'Tuesday', temperature: '32°C', status: 'Rainy', humidity: '80%', wind: '10 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png' },
        { day: 'Wednesday', temperature: '33°C', status: 'Partly Cloudy', humidity: '60%', wind: '7 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' }
    ],
    'Amsterdam': [
        { day: 'Monday', temperature: '18°C', status: 'Cloudy', humidity: '65%', wind: '20 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png' },
        { day: 'Tuesday', temperature: '17°C', status: 'Rainy', humidity: '85%', wind: '18 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png' },
        { day: 'Wednesday', temperature: '20°C', status: 'Sunny', humidity: '50%', wind: '10 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' }
    ],
    'Australia': [
        { day: 'Monday', temperature: '22°C', status: 'Sunny', humidity: '40%', wind: '12 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' },
        { day: 'Tuesday', temperature: '19°C', status: 'Windy', humidity: '35%', wind: '25 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png' },
        { day: 'Wednesday', temperature: '24°C', status: 'Partly Cloudy', humidity: '45%', wind: '15 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' }
    ],
    'Canada': [
        { day: 'Monday', temperature: '10°C', status: 'Snow', humidity: '90%', wind: '10 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png' },
        { day: 'Tuesday', temperature: '8°C', status: 'Cloudy', humidity: '85%', wind: '12 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png' },
        { day: 'Wednesday', temperature: '12°C', status: 'Sunny', humidity: '70%', wind: '15 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' }
    ],
    'Japan': [
        { day: 'Monday', temperature: '28°C', status: 'Rainy', humidity: '75%', wind: '10 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png' },
        { day: 'Tuesday', temperature: '30°C', status: 'Partly Cloudy', humidity: '70%', wind: '12 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' },
        { day: 'Wednesday', temperature: '29°C', status: 'Sunny', humidity: '65%', wind: '8 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' }
    ],
    'Indonesia': [
        { day: 'Monday', temperature: '25°C', status: 'Sunny', humidity: '75%', wind: '10 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png' },
        { day: 'Tuesday', temperature: '23°C', status: 'Partly Cloudy', humidity: '70%', wind: '12 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' },
        { day: 'Wednesday', temperature: '27°C', status: 'Sunny', humidity: '65%', wind: '8 km/h', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png' }
    ]
};

const countries = Object.keys(weatherDataByCountry);

const WeatherSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            setLoading(true);
            setTimeout(() => {
                const countryWeather = weatherDataByCountry[searchQuery] || [];
                setWeatherData(countryWeather);
                setLoading(false);
            }, 500); 
        } else {
            setWeatherData([]);
        }
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredCountries = countries.filter(country =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="weather" className="weather1">
            <div className="weather-text">
                <h2>Weather</h2>
            </div>
            <div className="search-bar">
                <label htmlFor="country-search">Search Country</label>
                <input
                    type="text"
                    id="country-search"
                    name="country-search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Enter country name"
                    list="country-list"
                />
                <datalist id="country-list">
                    {filteredCountries.map((country, index) => (
                        <option key={index} value={country} />
                    ))}
                </datalist>
            </div>
            {loading ? (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="weather-section">
                    {weatherData.length > 0 ? (
                        weatherData.map((weather, index) => (
                            <div className="weather-card" key={index}>
                                <div className="weather-info">
                                    <span className="temperature">{weather.temperature}</span>
                                    <span className="day">{weather.day}</span>
                                </div>
                                <img src={weather.icon} alt={weather.status} className="icon" />
                                <h5 className="status">{weather.status}</h5>
                                <div className="additional-info">
                                    <p>Humidity: {weather.humidity}</p>
                                    <p>Wind: {weather.wind}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
            )}
        </section>
    );
};

export default WeatherSection;