console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log(basket);
const maxItems = 5;
console.log(maxItems);

function addItem(item) {
  for (let i = 0; i < item.length; i++) {
    if (item.length > 0 && isFull() === false) {
      basket.push(item);
      return true;
    }
  }
    return false;
}

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

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
      return true;
  }
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
