import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [exercise, setExercise] = useState({ name: '', repetitions: 0, sets: 0, rest: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExercise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExercise(exercise);
    setExercise({ name: '', repetitions: 0, sets: 0, rest: 0 });
  };

  return (
    <div>
      <h2>Añadir ejercicio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre ejercicio:
          <input type="text" name="name" value={exercise.name} onChange={handleChange} />
        </label>
        <label>
          Repeticiones:
          <input type="number" name="repetitions" value={exercise.repetitions} onChange={handleChange} />
        </label>
        <label>
          Sets:
          <input type="number" name="sets" value={exercise.sets} onChange={handleChange} />
        </label>
        <label>
          Segundos faltantes (seconds):
          <input type="number" name="rest" value={exercise.rest} onChange={handleChange} />
        </label>
        <button type="submit">Añadir ejercicio </button>
      </form>
    </div>
  );
};

export default ExerciseForm;
