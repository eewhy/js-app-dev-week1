const temp = 80;
const output = "The Temperature is " + temp + " Degrees";
const precipitation = "raining";
const indoors = true

if (temp > 80 && !precipitation) {
  console.log("time to swim outside");
} else if (indoors){
  console.log("time to swim indoors");
}
