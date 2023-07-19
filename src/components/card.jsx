import React from 'react';

const Card = ({ title, description, duration, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Duracion: {duration}</p>
      </div>
    </div>
  );
};

export default Card;