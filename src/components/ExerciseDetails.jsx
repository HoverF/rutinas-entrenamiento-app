import React from 'react';

const ExerciseDetails = ({ exercises }) => {
  return (
    <div>
      <h2>Detalle de los ejercicios</h2>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <h3>{exercise.name}</h3>
          <p>Repeticiones: {exercise.repetitions}</p>
          <p>Sets: {exercise.sets}</p>
          <p>Rest: {exercise.rest} segundos</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetails;