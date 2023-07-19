import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routinesData from './data/routines';
import Card from './components/card';
import RoutineCard from './components/RoutineCard';
import RoutineDetails from './components/RoutineDetails';
import SearchForm from './components/SearchForm';
import ExerciseForm from './components/ExerciseForm';
import TrainingResultsForm from './components/TrainingResultsForm';
import { getFavoriteRoutines, saveFavoriteRoutines } from './utils/localStorage';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [favoriteRoutines, setFavoriteRoutines] = useState(getFavoriteRoutines());
  const [trainingResults, setTrainingResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = routinesData.filter(
      (routine) =>
        routine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        routine.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAddExercise = (exercise) => {
    if (selectedRoutine) {
      const updatedRoutine = { ...selectedRoutine, exercises: [...selectedRoutine.exercises, exercise] };
      setSelectedRoutine(updatedRoutine);
    }
  };

  const handleSelectRoutine = (routine) => {
    setSelectedRoutine(routine);
  };

  const handleAddToFavorites = () => {
    if (selectedRoutine) {
      setFavoriteRoutines((prevFavorites) => [...prevFavorites, selectedRoutine]);
    }
  };

  const handleAddTrainingResult = (result) => {
    setTrainingResults((prevResults) => [...prevResults, result]);
  };

  useEffect(() => {
    saveFavoriteRoutines(favoriteRoutines);
  }, [favoriteRoutines]);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Workout Routines</h1>
      <SearchForm onSearch={handleSearch} />
      {selectedRoutine ? (
        <div>
          <RoutineDetails routine={selectedRoutine} />
          <ExerciseForm onAddExercise={handleAddExercise} />
          <button className="btn btn-primary" onClick={handleAddToFavorites}>Add to Favorites</button>
          <TrainingResultsForm onAddTrainingResult={handleAddTrainingResult} />
        </div>
      ) : (
        <div>
          <h2>Search Results</h2>
          <div className="row">
            {searchResults.map((routine) => (
              <div className="col-md-4 mb-4" key={routine.id}>
                <RoutineCard routine={routine} onSelectRoutine={handleSelectRoutine} />
              </div>
            ))}
          </div>
        </div>
      )}
      <h2>Favorite Routines</h2>
      <div className="row">
        {favoriteRoutines.map((routine) => (
          <div className="col-md-4 mb-4" key={routine.id}>
            <Card title={routine.title} description={routine.description} duration={routine.duration} image={routine.image} />
          </div>
        ))}
      </div>
      <h2>Training Results</h2>
      <div>
        {trainingResults.map((result, index) => (
          <div className="mb-3" key={index}>
            <h4>Exercise: {result.exercise}</h4>
            <p>Repetitions: {result.repetitions}</p>
            <p>Sets: {result.sets}</p>
            <p>Rest (seconds): {result.rest}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

