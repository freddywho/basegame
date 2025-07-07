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