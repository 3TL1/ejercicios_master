// ================================
// Ejercicio 1
// ================================

const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  
  const categorias = [];
  
  for (const movie of movies) {
    for (const category of movie.categories) {
      if (!categorias.includes(category)) {
        categorias.push(category);
      }
    }
  }
  
  console.log(categorias);
  
  // Salida esperada:
  // ["comedia", "aventura", "acción", "thriller", "animación"]
 // ================================
// Ejercicio 2
// ================================

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  let totalVolume = 0;
  let count = 0;
  
  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume;
      count++;
    }
  }
  
  const averageVolume = totalVolume / count;
  
  console.log(`La media del volumen de los sonidos favoritos es: ${averageVolume}`);
  
  // Salida esperada:
  // La media del volumen de los sonidos favoritos es: 56.25
// ================================
// Ejercicio 3
// ================================

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  const soundCount = {};
  
  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      if (soundCount[sound]) {
        soundCount[sound]++;
      } else {
        soundCount[sound] = 1;
      }
    }
  }
  
  console.log("Recuento de sonidos favoritos:", soundCount);
  
  // Salida esperada:
  // Recuento de sonidos favoritos: { waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }
 // ================================
// Ejercicio 4
// ================================

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1; // Retorna -1 si el texto no se encuentra en el array
  }
  
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  // Ejemplos de uso:
  console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2
  console.log(findArrayIndex(mainCharacters, "Rey")); // 4
  console.log(findArrayIndex(mainCharacters, "Yoda")); // -1
// ================================
// Ejercicio 5
// ================================

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  // Ejemplos de uso:
  console.log(rollDice(6)); // Simula un dado de 6 caras
  console.log(rollDice(20)); // Simula un dado de 20 caras
  console.log(rollDice(100)); // Simula un dado de 100 caras
// ================================
// Ejercicio 6
// ================================

function swap(array, index1, index2) {
    if (
      index1 >= 0 &&
      index1 < array.length &&
      index2 >= 0 &&
      index2 < array.length
    ) {
      [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    return array;
  }
  
  const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  // Ejemplos de uso:
  console.log(swap(fantasticFour, 0, 2)); // Intercambia "La antorcha humana" con "La mujer invisible"
  console.log(swap(fantasticFour, 1, 3)); // Intercambia "Mr. Fantástico" con "La cosa"
          