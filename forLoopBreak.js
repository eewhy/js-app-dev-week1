let i = 1000

for(i; i > 1; i--){
  console.log(i);
  if(i%27 === 0){
    break
  }
  console.log("Break!")
}
