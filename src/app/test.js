const jokes = [
  "I'm going to power wash the deck",
  "I'm going to invite the neighbor kids to play on the deck",
  "I'm going to needlepoint on the deck",
  "I'm going to treat the deck for black mold",
  "I'm going to throw a quilting party on the deck",
  "I'm going to have a girls night on the deck",
  "I'm going to bleach Daddy's hair on the deck",
  "I'm going to mop the poop deck",
  "Let's decorate the deck with cacti",
  "Let's somersault on the deck",
  "Let's have a luau and get lei'd on the deck",
  "Let's line dance on the deck",
  "Let's install comfortable seating on the deck",
  "Let's have a seance on the deck",
  "Let's hang our wet laundry on the deck",
  "Let's hang a flag on the deck",
  "Let's sand down the deck",
  "Let's invite priests over for a deck meet and greet",
  "I've found some startling defects in the deck",
  "I love to watch squirrels frolic on the deck",
  "The wood on the deck has gotten soft with wear and tear",
  "If you trim the bushes, it makes the deck look bigger"
];

// Function to get a random joke from the array
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Print a random joke to the terminal
console.log("Here's a random deck joke for you:");
console.log(getRandomJoke());



/*

function capitalizeWord(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word; 
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeFullName(fullName) {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    console.log("Please provide a valid name.");
    return;
  }

  const words = fullName.trim().split(/\s+/); // splits by one or more spaces
  const capitalizedWords = words.map(capitalizeWord);
  return capitalizedWords.join(' ');
}

const names = ["alex", "martha", "joel alfonso", "puerto cayo"];

names.forEach(name => {
  const capitalized = capitalizeFullName(name);
  console.log(`Original: "${name}" → Capitalized: "${capitalized}"`);
});



/* 

import styles from './page.module.css';

export default function TestPage() {
  return (
    <div className={styles.container}>
      <img
        src="https://www.countryflags.com/wp-content/uploads/jamaica-flag-jpg-xl.jpg"
        alt="Jamaican Flag"
        className={styles.flag}
      />
    </div>
  );
}



/* 

function multiplyFirstAndLast(array) {
    const result = array[0] * array[array.length - 1];
    console.log(result);
}

multiplyFirstAndLast([4, 6, 8, 4]);

/*
function incrementNumbers(array) {
    array.forEach(element => {
        if (typeof element === 'number') {
            console.log(element + 1);
        }
    });
}incrementNumbers([1, 2, 3]);








/*

var restaurantBillsForADay = [2, 5, 9, 12, 2, 199, 4];
// console.log("billsforaday", restaurantBillsForADay.length) //7
// .length is a property on the array data type (type of data called an array)
var cups = "a b cd"
// console.log("printingcups ...", cups.length) //6 
var peeps = ["jose", "pedro", "alex"];
var indexNumber  = 1;
// console.log("...", peeps[0]) // ... jose
// console.log(";;;", cups[0]) // ;;; a
// console.log(peeps[2]) // alex
console.log(peeps[indexNumber]) // pedro // this is the same as (peeps[1]) with the var indexNumber  = 1;
console.log(peeps[indexNumber+1]) // alex
console.log(peeps[peeps.length-1]) // alex

*/