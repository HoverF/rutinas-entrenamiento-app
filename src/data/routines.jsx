const routines = [
    {
      id: 1,
      title: 'Rutina Cardio',
      description: 'Una rutina de cardio intensa que hara acelerar tu corazon!',
      duration: '30 minutos',
      image: 'https://img.freepik.com/vector-premium/piernas-atleticas-deporte-fitness-ilustracion-vector-boceto-dibujado-mano_460848-14664.jpg',
      exercises: [
        { name: 'Jumping Jacks', repetitions: 30, sets: 3, rest: 10 },
        { name: 'High Knees', repetitions: 40, sets: 3, rest: 10 },
        { name: 'Burpees', repetitions: 20, sets: 2, rest: 10 },
      ],
    },
    {
      id: 2,
      title: 'Rutina de Fuerza',
      description: 'Construye tu fuerza y llevala al limite con esta rutina de cuerpo completo',
      duration: '45 minutos',
      image: 'https://example.com/strength.jpg',
      exercises: [
        { name: 'Sentadillas', repetitions: 15, sets: 4, rest: 60 },
        { name: 'Flexiones', repetitions: 10, sets: 4, rest: 60 },
        
      ],
    },
    
    {
      id: 3,
      title: 'Rutina de Calistenia',
      description: 'Ocupa el propio peso de tu cuerpo para subirlo de nivel',
      duration: '50 minutos',
      image: 'https://example.com/strength.jpg',
      exercises: [
        { name: 'Plancha', repetitions: 2, sets: 2, rest: 60 },
        { name: 'Flexiones', repetitions: 10, sets: 4, rest: 60 },
        { name: 'Dominadas', repetitions: 20, sets: 3, rest: 60 },
      ],
    },

    {
      id: 4,
      title: 'Rutina de Piernas',
      description: 'Que no se te olvide la rutina de pierna y ejercitalas a mas no poder',
      duration: '40 minutos',
      image: 'https://example.com/strength.jpg',
      exercises: [
        { name: 'Sentadillas', repetitions: 20, sets: 2, rest: 60 },
        { name: 'Trote', repetitions: 1, sets: 1, rest: 60 },
        { name: 'Escaladas', repetitions: 25, sets: 3, rest: 60 },
      ],
    },

    {
      id: 5,
      title: 'Rutina de Brazos',
      description: 'Ejercita tus brazos hasta que no puedas mas',
      duration: '30 minutos',
      image: 'https://example.com/strength.jpg',
      exercises: [
        { name: 'pesas', repetitions: 20, sets: 4, rest: 60 },
        { name: 'flexiones ', repetitions: 30, sets: 2, rest: 60 },
        { name: 'polea', repetitions: 25, sets: 3, rest: 60 },
      ],
    },
  ];


  
  export default routines;
  