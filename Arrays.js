const num = [1,2,3,4,5]
const sliceArr = num.slice(0,3);
console.log(sliceArr);
console.log(num);
//num.splice(startnumber,tohowmany)
const spliceArr = num.splice(3,2);
console.log(spliceArr);
console.log(num);

const arr = [1,2,3,4,5]

arr.forEach(function(item,index){
  console.log(item + index)
});

console.log(arr.join(' '));
console.log(arr)
console.log(arr.toString());
