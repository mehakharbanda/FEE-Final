import React, { useState } from 'react';
import './Culture.css';

const Culture = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalAltText, setModalAltText] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    const images1 = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTce0Yc15F8aq6pWhbTBU5qd2nqBSdW1EIyA&s', alt: 'Italy', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Kt85t8HUy09BTtU9yIgg5qMtVnL1UkeIeg&s', alt: 'Spain', description: '' },
        { src: 'https://520990340753959855.weebly.com/uploads/4/5/5/3/45539107/4620674_orig.jpg', alt: 'UK', description: '' },
        { src: 'https://cms-b-assets.familysearch.org/dims4/default/c46bd8c/2147483647/strip/true/crop/800x500+0+0/resize/800x500!/format/jpg/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F57%2F90%2Ff5420bd6a1ff1ebe610b0f9aaa64%2Fjapanese-girl-visits-shinto-shrine.jpg', alt: 'Japan', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaq4jAdu5OxFoKhnk03wrvvPCXU3lS2_yoUKHhTW_grA&s', alt: 'Norway', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3fGg6tnk-IQl2jRcgrXEQJTjEsgO3ZOiAA&s', alt: 'Turkey', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkirkrYQ4hQ-ZFAcPsrRwJAdaK5Mdx9GqgOw&s', alt: 'South Africa', description: '' },
    ];

    const images2 = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKmhUoxLXI3iUV4dZeC3Ep8zasb6hMoRWIQ&s', alt: 'Germany', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOj0wLSqtQ3u4_M2tEWGFikBXPnCPHapSRuA&s', alt: 'Brazil', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVk00OWwuMgYSnTzfgB-kcTZv7b6NUJnCpfA&s', alt: 'France', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8VdI9e86baOynuv9O5GGc9tto4Gmpq9TUA&s', alt: 'Amsterdam', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hV98Ko48MIqWFeJbkGL4kGn2fZm2Jr2RRQ&s', alt: 'Australia', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpf2hH4fnETO-1qDpfuDTuNGjAumAosDU6lw&s', alt: 'Indonesia', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYL9NbTrlRUWCwlkntdsGPn_mJPSvjeeKDuQ&s', alt: 'India', description: '' },
    ];

    const images3 = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eyHZgZPRZVGFHrDAzgMpxVokESHvOzuK7w&s', alt: 'Greece', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ac5atqCfUKwjqD0OM2_0juLPh62shDDclA&s', alt: 'Thailand', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzDLt1KPPpHVhV4qaPCsrwEyKHQOJEbg0OA&s', alt: 'Argentina', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvdF2k7tHACFsq_dZFRuEqOeyv0PMFffP-w&s', alt: 'USA', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq4nmPbPLcUzzT3J94SUdUUGDpo4XbdAPsg&s', alt: 'Denmark', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFSNkD3H0EsVsBmLfFQD1dtfYjm-WvYX3XQ&s', alt: 'Mexico', description: '' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJxfKwQFg3kO133Vwzdm4aLiTM_5iOQyVeA&s', alt: 'Maldives', description: '' },
    ];

    const openImageModal = (src, altText, description) => {
        setModalImage(src);
        setModalAltText(altText);
        setModalDescription(description);
        setShowModal(true);
    };

    const renderHexagons = (images) => {
        return images.map((image, index) => (
            <div className="hexagon" key={index}>
                <div className="hex">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        data-description={image.description} 
                        onClick={() => openImageModal(image.src, image.alt, image.description)} 
                    />
                </div>
            </div>
        ));
    };

    return (
        <div className="culture-container">
            <h1>CULTURE</h1>
            <p>Embark on a unique journey through secret treasures, where untouched natural beauty & diverse culture awaits beyond mainstream travel.</p>
            
            <div className="hexagon-gallery">
                {renderHexagons(images1)}
            </div>
            <div className="hexagon-gallery">
                {renderHexagons(images2)}
            </div>
            <div className="hexagon-gallery">
                {renderHexagons(images3)}
            </div>
            
            {showModal && (
                <div className="modal" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={modalImage} alt={modalAltText} />
                        <p>{modalAltText}</p>
                        <p>{modalDescription}</p>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Culture;
