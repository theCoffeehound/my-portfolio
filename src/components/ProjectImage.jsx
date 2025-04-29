import React, { useState } from 'react';
import '../styles/ProjectImages.css';

function ProjectImages({ project }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < project.images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(project.images.length - 1);
        }
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="project-carousel">
            <div className="carousel-container">
                <button className="carousel-button prev" onClick={handlePrev}>❮</button>

                <div className="project-image-container">
                    <img
                        src={project.images[currentIndex]}
                        alt={`Project Image ${currentIndex + 1}`}
                        className="project-image"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>

                <button className="carousel-button next" onClick={handleNext}>❯</button>
            </div>

            <div className="carousel-dots">
                {project.images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default ProjectImages;
