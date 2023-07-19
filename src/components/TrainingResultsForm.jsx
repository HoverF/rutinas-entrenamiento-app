import React, { useState } from 'react';

const TrainingResultsForm = ({ onAddTrainingResult }) => {
  const [exercise, setExercise] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [sets, setSets] = useState('');
  const [rest, setRest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTrainingResult({ exercise, repetitions, sets, rest });
    setExercise('');
    setRepetitions('');
    setSets('');
    setRest('');
  };

  return (
    <div>
      <h2>Ingresar resultados de entrenamiento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre ejercicio:
          <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />
        </label>
        <label>
          Repeticiones:
          <input type="number" value={repetitions} onChange={(e) => setRepetitions(e.target.value)} />
        </label>
        <label>
          Sets:
          <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
        </label>
        <label>
          Segundos Faltantes (seconds):
          <input type="number" value={rest} onChange={(e) => setRest(e.target.value)} />
        </label>
        <button type="submit">Añadir Resultados</button>
      </form>
    </div>
  );
};

export default TrainingResultsForm;
