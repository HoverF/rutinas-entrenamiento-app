import React from 'react';

const RoutineCard = ({ routine, onSelectRoutine }) => {
  return (
    <div className="routine-card" onClick={() => onSelectRoutine(routine)}>
      <img src={routine.image} alt={routine.title} />
      <div className="routine-card-content">
        <h3>{routine.title}</h3>
        <p>{routine.description}</p>
        <p>Duracion: {routine.duration}</p>
      </div>
    </div>
  );
};

export default RoutineCard;
