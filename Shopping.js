const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']

shoppingList.push('fruit loops');
console.log(shoppingList);

shoppingList[4] = 'fair trade coffee'
console.log(shoppingList);

shoppingList.splice(2,2,'rice','beans');
console.log(shoppingList);


const cart =[]

cart.push(shoppingList.pop());
console.log(cart);

cart.unshift(shoppingList.shift());
console.log(cart);

while (shoppingList > 1) {
  console.log(shoppingList+=1);
}

console.log(shoppingList.sort());
console.log(shoppingList.reverse());

console.log(shoppingList.join(', '));
