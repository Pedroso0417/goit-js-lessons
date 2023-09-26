/* 
Example 3 - Array of objects

Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone. 

The function calculates and returns the total cost of stones (price * quantity) if the stoneName matches the name in the array of objects called stones[{}].

*/

const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 400, quantity: 7 },
  { name: 'Rubble', price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
  let result;
  // write code below this line
  for (const stone of stones) {
    if (stoneName === stone.name) {
      result = stone.price * stone.quantity;
    }
  }

  // write above below this line
  return result;
};

let total = calcTotalPrice(stones, 'Diamond');
let total2 = calcTotalPrice(stones, 'Sapphire');
console.log(total, total2);
