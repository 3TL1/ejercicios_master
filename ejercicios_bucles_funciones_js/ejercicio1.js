// =============================== 
// Ejercicio 1 
// ===============================

const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
  ];
  
  const humanCharacters = [];
  
  // Bucle para filtrar los personajes de la especie "Human"
  for (let i = 0; i < characters.length; i++) {
      if (characters[i].species === "Human") {
          humanCharacters.push(characters[i]);
      }
  }
  
  // Imprimir el array con los personajes humanos
  console.log(humanCharacters);
// =============================== 
// Ejercicio 2 
// ===============================

const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  let before2000 = 0;
  let after2000 = 0;
  
  // Bucle para contar las películas antes y después del año 2000
  for (let i = 0; i < movies.length; i++) {
      if (movies[i].releaseYear < 2000) {
          before2000++;
      } else {
          after2000++;
      }
  }
  
  // Imprimir los conteos
  console.log("Películas antes del 2000:", before2000);
  console.log("Películas desde el 2000 en adelante:", after2000);
// =============================== 
// Ejercicio 3 
// ===============================

const songs = [
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
  ];
  
  const rockPlaylist = [];
  
  // Bucle para filtrar canciones de rock con duración mayor a 5 minutos
  for (let i = 0; i < songs.length; i++) {
      if (songs[i].genre === "Rock" && songs[i].duration > 5) {
          rockPlaylist.push(songs[i]);
      }
  }
  
  // Imprimir la nueva playlist de rock
  console.log(rockPlaylist);
// =============================== 
// Ejercicio 4 
// ===============================

const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];
  
  let oldestCartoon = cartoons[0].name; // Inicializar con el primer nombre
  let oldestYear = cartoons[0].debut; // Inicializar con el primer año
  
  // Bucle para encontrar la serie más antigua
  for (let i = 1; i < cartoons.length; i++) {
      if (cartoons[i].debut < oldestYear) {
          oldestYear = cartoons[i].debut;
          oldestCartoon = cartoons[i].name;
      }
  }
  
  // Imprimir el nombre de la serie más antigua
  console.log("La serie de dibujos animados más antigua es:", oldestCartoon);
// =============================== 
// Ejercicio 5 
// ===============================

const albums = [
    { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
    { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
    { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
    { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
    { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
    { title: 'Thriller', genre: 'Pop', duration: 42.19 },
    { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
    { title: 'The Wall', genre: 'Rock', duration: 81.00 },
    { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
    { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
  ];
  
  let totalRockDuration = 0;
  
  // Bucle para sumar las duraciones de los álbumes de rock
  for (let i = 0; i < albums.length; i++) {
      if (albums[i].genre === "Rock") {
          totalRockDuration += albums[i].duration;
      }
  }
  
  // Imprimir el total de las duraciones
  console.log("Duración total de los álbumes de rock:", totalRockDuration.toFixed(2), "minutos");
// =============================== 
// Ejercicio 6 
// ===============================

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  const moviesByDecade = {};
  
  // Bucle para agrupar películas por década
  for (let i = 0; i < starWarsMovies.length; i++) {
      let decade = Math.floor(starWarsMovies[i].releaseYear / 10) * 10; // Obtener la década
  
      if (!moviesByDecade[decade]) {
          moviesByDecade[decade] = []; // Crear el array si no existe
      }
  
      moviesByDecade[decade].push(starWarsMovies[i].title);
  }
  
  // Imprimir el objeto con las películas agrupadas por década
  console.log("Películas de Star Wars agrupadas por década:", moviesByDecade);
// =============================== 
// Ejercicio 7 
// ===============================

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  const songsByGenre = {};
  
  // Bucle para clasificar canciones por género
  for (let i = 0; i < tracks.length; i++) {
      let genre = tracks[i].genre;
  
      if (!songsByGenre[genre]) {
          songsByGenre[genre] = []; // Crear el array si no existe
      }
  
      songsByGenre[genre].push(tracks[i].title);
  }
  
  // Imprimir el objeto con las canciones clasificadas por género
  console.log("Canciones clasificadas por género:", songsByGenre);
// =============================== 
// Ejercicio 8 
// ===============================

const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];
  
  // Bucle anidado para listar artistas e influencias
  for (let i = 0; i < artists.length; i++) {
      let artist = artists[i].name;
      let influences = artists[i].influences;
  
      for (let j = 0; j < influences.length; j++) {
          console.log(`${artist} fue influenciado por ${influences[j]}`);
      }
  }
// =============================== 
// Ejercicio 9 
// ===============================

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
      let oldest = xMen[0];
  
      for (let i = 1; i < xMen.length; i++) {
          if (xMen[i].year < oldest.year) {
              oldest = xMen[i];
          }
      }
  
      return oldest;
  }
  
  console.log(findOldestXMen(xMen));
// ==================================
// Ejercicio 10
// ==================================

const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country]) {
      return `La capital de ${country} es ${capitals[country]}.`;
    } else {
      return `Lo siento, no tengo información sobre la capital de ${country}.`;
    }
  }
  
  // Ejemplo de uso
  console.log(getCapital("Spain"));
  console.log(getCapital("Brazil"));
// ==================================
// Ejercicio 11
// ==================================

const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {
    if (movies.length === 0) {
      return "No hay películas en la lista.";
    }
  
    let totalDuration = 0;
  
    for (const movie of movies) {
      totalDuration += movie.duration;
    }
  
    return totalDuration / movies.length;
  }
  
  // Ejemplo de uso
  console.log("Promedio de duración:", averageMovieDuration(movies), "minutos");
// ==================================
// Ejercicio 12
// ==================================

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    const foundMutants = mutants.filter(mutant => mutant.power === power);
  
    if (foundMutants.length > 0) {
      return `Mutantes con el poder de ${power}: ${foundMutants.map(m => m.name).join(', ')}.`;
    } else {
      return `No se encontraron mutantes con el poder de ${power}.`;
    }
  }
  
  // Ejemplo de uso
  console.log(findMutantByPower(mutants, 'telekinesis'));
  console.log(findMutantByPower(mutants, 'invisibility'));
// ==================================
// Ejercicio 13
// ==================================

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
  const currentYear = new Date().getFullYear();

  return actors.map(actor => ({
    name: actor.name,
    age: currentYear - actor.born
  }));
}

// Ejemplo de uso
console.log(calculateActorsAges(actors));
                        