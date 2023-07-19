import React from 'react';
import ExerciseDetails from './ExerciseDetails';

const RoutineDetails = ({ routine }) => {
  return (
    <div>
      <h2>{routine.title}</h2>
      <p>{routine.description}</p>
      <p>Duracion: {routine.duration}</p>
      <ExerciseDetails exercises={routine.exercises} />
    </div>
  );
};

export default RoutineDetails;
