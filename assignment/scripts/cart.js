console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log(basket);
const maxItems = 5;
console.log(maxItems);

// Add an item (string) to the basket array
function addItem(item) {
  // If the basket is full...
  if (isFull()) {
      // ...do not add the item, and return false
      return false;
  }
  // If the basket is not full...
  else {
      // ... add item to the basket, and return true
      basket.push(item);
      return true;
  }
}
/**
Why my function is like that below because I kept thinking that you have
to loop through an array all the time to make it work.

*/
// function addItem(item) {
//   for (let i = 0; i < item.length; i++) {
//     if (item.length > 0 && isFull() === false) {
//       basket.push(item);
//       return true;
//     }
//   }
//     return false;
// }

console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding steak (expect true)', addItem('steak'));
console.log('Adding pork (expect true)', addItem('pork'));
console.log('Adding cherry (expect true)', addItem('cherry'));
console.log(`Basket now have: ${basket}`);
// end of added item

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

console.log(listItems());
// end of listing maxItems

function empty() {
  return (basket = []);
}

console.log(empty());
console.log(`Basket is now ${basket} empty`);
// end of empty
/**
// function for full basket
function isFull() {
// if basket is not full return false, you have room to add more
  if (basket.length < maxItems) {
    return false;
// else if basket is full then return true, can't add anymore
  } else if (basket.length >= maxItems) {
      return true;
  }
}
*/

// I was still not fully understand the return part, you can just return the array value without looping it.
function isFull() {
    return basket.length >= maxItems;
}

console.log('Adding banana(expect true)', addItem('banana'));
console.log('Adding ice cream (expect true)', addItem('ice cream'));
console.log('Adding oreo (expect true)', addItem('oreo'));
console.log('Adding chicken wings (expect true)', addItem('chicken wings'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding ice cream (expect false)', addItem('ice cream'));
console.log(`Basket is now: ${basket}`);
// end of is isFull


function removeItem(item) {
  index = basket.indexOf(item);
  if (index > -1) {
    return basket.splice(index, 1);
  }
  return null;
}

console.log(removeItem('banana'));
console.log(removeItem('oranges'));
console.log(`expect to be null: ${removeItem('oranges')}`);
console.log(`expect to have only (ice cream, oreo, chicken wings): ${basket}`);
//End function to remove item
