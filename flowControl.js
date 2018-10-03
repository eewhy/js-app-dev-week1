let x = false;

if (x) {
  console.log('the condition is not true.');
} else if (x == false){
  console.log('the condition is not true');
} else {
  console.log('this won\'t run');
}

const comparisonOne = 10 > 9;

console.log(comparisonOne);

const isTruthy = 'string';
console.log(!!isTruthy);
