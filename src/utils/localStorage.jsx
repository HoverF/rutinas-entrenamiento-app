const FAVORITE_ROUTINES_KEY = 'favorite_routines';

// Función para obtener las rutinas favoritas desde localStorage
export const getFavoriteRoutines = () => {
  const favoriteRoutinesJSON = localStorage.getItem(FAVORITE_ROUTINES_KEY);
  return favoriteRoutinesJSON ? JSON.parse(favoriteRoutinesJSON) : [];
};

// Función para guardar las rutinas favoritas en localStorage
export const saveFavoriteRoutines = (favoriteRoutines) => {
  const favoriteRoutinesJSON = JSON.stringify(favoriteRoutines);
  localStorage.setItem(FAVORITE_ROUTINES_KEY, favoriteRoutinesJSON);
};
