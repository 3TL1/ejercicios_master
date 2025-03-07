// ===============================
// Ejercicio 1
// ===============================

let miSuperheroeFavorito = "Hulk";
let numeroFavorito = 50;
let altura = 5;
let longitud = 10;
let suma = altura + longitud;

console.log("Ejercicio 1:");
console.log("Superhéroe favorito:", miSuperheroeFavorito);
console.log("Número favorito:", numeroFavorito);
console.log("Altura:", altura);
console.log("Longitud:", longitud);
console.log("Suma:", suma);
console.log("----------------------------");


// ===============================
// Ejercicio 2
// ===============================

// 1. Luke Skywalker cumple años
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Modificamos la edad a 25
jedi.edad = 25;

console.log("Ejercicio 2.1:");
console.log(`Luke Skywalker ahora tiene ${jedi.edad} años.`);
console.log("----------------------------");

// 2. Presentación al estilo Leia Organa
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

let mensaje = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

console.log("Ejercicio 2.2:");
console.log(mensaje);
console.log("----------------------------");

// 3. Calculando el coste total de sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Calculamos el precio total
let precioTotal = sable1.precio + sable2.precio;

console.log("Ejercicio 2.3:");
console.log(`El precio total de los sables de luz es: ${precioTotal} créditos.`);
console.log("----------------------------");

// 4. Actualizando el precio final de las naves
let precioBaseGlobal = 25000; // Modificamos el precio base global

const nave1 = {nombre: "Ala-X", precioBase: 50000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000};

// Actualizamos el precio final
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Ejercicio 2.4:");
console.log(`El precio final de ${nave1.nombre} es: ${nave1.precioFinal} créditos.`);
console.log(`El precio final de ${nave2.nombre} es: ${nave2.precioFinal} créditos.`);
console.log("----------------------------");
// ===============================
// Ejercicio 3
// ===============================

// 3.1 Multiplica 10 por 5 y muestra el resultado
console.log("Ejercicio 3.1:");
console.log(10 * 5);
console.log("----------------------------");

// 3.2 Divide 10 por 2 y muestra el resultado
console.log("Ejercicio 3.2:");
console.log(10 / 2);
console.log("----------------------------");

// 3.3 Muestra el resto de dividir 15 por 9
console.log("Ejercicio 3.3:");
console.log(15 % 9);
console.log("----------------------------");

// 3.4 Usa el operador de asignación para obtener o = 15
let p = 10;
let j = 5;
let o = p + j;

console.log("Ejercicio 3.4:");
console.log(o);
console.log("----------------------------");

// 3.5 Usa el operador de asignación para obtener i = 50
let c = 10;
let m = 5;
let i = c * m;

console.log("Ejercicio 3.5:");
console.log(i);
console.log("----------------------------");
// =============================== 
// Ejercicio 4 
// ===============================

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log(aldeanos[3]);

// 4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");

// 4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";

// 4.4 - Dale la vuelta a este array.
aldeanos.reverse();

// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
const index = aldeanos.indexOf("Narciso");
if (index !== -1) {
    aldeanos[index] = "Canela";
}

// 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explícitamente.
console.log(aldeanos[aldeanos.length - 1]);

// Mostrar el array final para comprobar cambios
console.log(aldeanos);
// =============================== 
// Ejercicio 5 
// ===============================

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10');
}

if (number2 / number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 === number1) && (number1 * 2 === number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2 === number1) || (number1 / 5 === number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
// =============================== 
// Ejercicio 6 
// ===============================

// 1.1 - Bucle for que va de 0 a 9 y muestra el valor de i por consola
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 1.2 - Bucle for que muestra solo los números pares entre 0 y 9
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 1.3 - Bucle para contar ovejas hasta dormir
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        console.log("¡Dormido!");
    } else {
        console.log("Intentando dormir 🐑");
    }
}
// =============================== 
// Ejercicio 7 
// ===============================

function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}

// Pruebas de la función
greaterNumber(10, 20); // Debería mostrar 20
greaterNumber(50, 30); // Debería mostrar 50
greaterNumber(7, 7);   // Mostrará 7 (porque son iguales)
// =============================== 
// Ejercicio 8 
// ===============================

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
    let longestWord = stringList[0]; // Empezamos con el primer elemento

    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
            longestWord = stringList[i];
        }
    }

    return longestWord;
}

// Prueba de la función
console.log(findLongestWord(avengers)); // Debería devolver 'Spiderman'
// =============================== 
// Ejercicio 9 
// ===============================

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let sum = 0;

    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }

    return sum;
}

// Prueba de la función
console.log(sumNumbers(numbers)); // Debería devolver 151
// =============================== 
// Ejercicio 10 
// ===============================

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    if (numberList.length === 0) return 0; // Evitar división por cero

    let sum = 0;

    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }

    return sum / numberList.length;
}

// Prueba de la función
console.log(average(numbers)); // Debería devolver 23.43 (aproximadamente)
// =============================== 
// Ejercicio 11 
// ===============================

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
    if (list.length === 0) return 0; // Evitar división por cero

    let totalSum = 0;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === "number") {
            totalSum += list[i]; // Sumar si es número
        } else if (typeof list[i] === "string") {
            totalSum += list[i].length; // Sumar la longitud si es string
        }
    }

    return totalSum / list.length; // Devolver el promedio
}

// Prueba de la función
console.log(averageWord(mixedElements)); // Devuelve el promedio calculado
// ================================
// Ejercicio 12
// ================================

function removeDuplicates(list) {
    return [...new Set(list)];
  }
  
  // Prueba de la función
  const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  console.log(removeDuplicates(duplicates));
// ================================
// Ejercicio 13
// ================================

function nameFinder(nameList, nameToFind) {
    const index = nameList.indexOf(nameToFind);
    return index !== -1 ? { found: true, position: index } : { found: false };
  }
  
  // Prueba de la función
  const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  console.log(nameFinder(names, 'Tony'));  // { found: true, position: 2 }
  console.log(nameFinder(names, 'Wanda')); // { found: false }
// ================================
// Ejercicio 14
// ================================

function repeatCounter(list) {
    const count = {};
    list.forEach(word => {
      count[word] = (count[word] || 0) + 1;
    });
    return count;
  }
  
  // Prueba de la función
  const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  console.log(repeatCounter(words));
  // Salida esperada: { code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
// ================================
// Ejercicio 15
// ================================

const products = [
    'Camiseta de Metallica',
    'Pantalón vaquero',
    'Gorra de beisbol',
    'Camiseta de Basket',
    'Cinturón de Orión',
    'AC/DC Camiseta'
  ];
  
  products.forEach(product => {
    if (product.includes('Camiseta')) {
      console.log(product);
    }
  });
  
  // Salida esperada:
  // Camiseta de Metallica
  // Camiseta de Basket
  // AC/DC Camiseta
// ================================
// Ejercicio 16
// ================================

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const place of placesToTravel) {
  console.log(place);
}

// Salida esperada:
// Japon
// Venecia
// Murcia
// Santander
// Filipinas
// Madagascar
// ================================
// Ejercicio 17
// ================================

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
    console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`);
}

// Salida esperada:
// La propiedad name tiene cómo valor: Xenomorph
// La propiedad species tiene cómo valor: Xenomorph XX121
// La propiedad origin tiene cómo valor: Unknown
// La propiedad weight tiene cómo valor: 180
// ================================
// Ejercicio 18
// ================================

const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }
  ];
  
  const filteredPlaces = placesToTravel.filter(place => place.id !== 11 && place.id !== 40);
  
  console.log(filteredPlaces);
  
  // Salida esperada:
  // [
  //   { id: 5, name: 'Japan' },
  //   { id: 23, name: 'Murcia' },
  //   { id: 44, name: 'Filipinas' },
  //   { id: 59, name: 'Madagascar' }
  // ]
// ================================
// Ejercicio 19
// ================================

const toys = [
    { id: 5, name: 'Transformers' }, 
    { id: 11, name: 'LEGO' }, 
    { id: 23, name: 'Hot Wheels' }, 
    { id: 40, name: 'Rascador de gato' },
    { id: 40, name: 'FurReal Friends gato interactivo' },
    { id: 60, name: 'Nerf Blaster' },
    { id: 71, name: 'Sylvanian Families - Familia gato' }
];

const filteredToys = [];

for (const toy of toys) {
    if (!toy.name.includes('gato')) {
        filteredToys.push(toy);
    }
}

console.log(filteredToys);

// Salida esperada:
// [
//   { id: 5, name: 'Transformers' },
//   { id: 11, name: 'LEGO' },
//   { id: 23, name: 'Hot Wheels' },
//   { id: 60, name: 'Nerf Blaster' }
// ]
// ================================
// Ejercicio 20
// ================================

const popularToys = [];

const toys = [
    { id: 101, name: 'Super Soaker', sellCount: 15 },
    { id: 102, name: 'Tamagotchi', sellCount: 22 },
    { id: 103, name: 'Polly Pocket', sellCount: 8 },
    { id: 104, name: 'Yo-yo', sellCount: 33 },
    { id: 105, name: 'Pikachu plush toy', sellCount: 19 },
    { id: 106, name: "Rubik's Cube", sellCount: 27 },
    { id: 107, name: 'Fidget Spinner', sellCount: 12 },
    { id: 108, name: 'Slinky', sellCount: 5 },
    { id: 109, name: 'Magic 8-Ball', sellCount: 38 },
    { id: 110, name: 'Troll Doll', sellCount: 20 }
];

for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

// Salida esperada:
// [
//   { id: 102, name: 'Tamagotchi', sellCount: 22 },
//   { id: 104, name: 'Yo-yo', sellCount: 33 },
//   { id: 105, name: 'Pikachu plush toy', sellCount: 19 },
//   { id: 106, name: "Rubik's Cube", sellCount: 27 },
//   { id: 109, name: 'Magic 8-Ball', sellCount: 38 },
//   { id: 110, name: 'Troll Doll', sellCount: 20 }
// ]
// ==================================
// Ejercicio 21
// ==================================

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
  
  console.log("Usuarios menores de edad:");
  for (const user of users) {
    if (user.years < 18) {
      console.log(user.name);
    }
  }
  
  console.log("Usuarios mayores de edad:");
  for (const user of users) {
    if (user.years >= 18) {
      console.log(user.name);
    }
  }
// ==================================
// Ejercicio 22
// ==================================

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan && fruitIndex < fruits.length) {
    foodSchedule[i] = { name: fruits[fruitIndex], isVegan: true };
    fruitIndex++;
  }
}

console.log(foodSchedule);
// ==================================
// Ejercicio 23
// ==================================

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  const smallMovies = [];
  const mediumMovies = [];
  const largeMovies = [];
  
  for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
      smallMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
      mediumMovies.push(movie);
    } else {
      largeMovies.push(movie);
    }
  }
  
  console.log("Películas pequeñas:", smallMovies);
  console.log("Películas medianas:", mediumMovies);
  console.log("Películas grandes:", largeMovies);
              