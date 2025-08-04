export default function LearnPage() {
  function doubleNumbers(array) {
    array.forEach(element => {
      if (typeof element === 'number') {
        console.log(element * 2);
      }
    });
  }

doubleNumbers([4, 'blue', 2, 'casa', 8]);

  return <div>Check your terminal for doubled numbers</div>
}








