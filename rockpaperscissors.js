var weapons = ['rock' , 'paper', 'scissors'];

let player1Win = 0;
let player2Win = 0;

while (player1Win <= 3 || player2Win <= 3) {
 var player1Weapons = weapons[parseInt(Math.random()*weapons.length) %3];
 //console.log(player1Weapons + " player 1 weapons");
 var player2Weapons = weapons[parseInt(Math.random()*weapons.length) %3];
 //console.log(player2Weapons + " player 2 weapons");
 //console.log("the loop is running");
 player1Win++;
 player2Win++;

   function compare(player1,player2){
      if(player1 === player2){
          console.log("The result is a tie!");
      } else if(
        player1 === "rock" && player2 === "scissors"
        ||
        player1 === "paper" && player2 === "rock"
        ||
        player1 === "scissors" && player2 === "paper"
      ){
        player1Win++;
        console.log('player1 wins!')
      } else {
        player2Win++;
        console.log('player2 wins')
      }
  }
  compare(player1Weapons,player2Weapons);
};
//
// if(player2==="scissors"){
//     player1Win ++;
//     console.log("Player1 wins");
// }
// else{
//     player2Win ++;
//     console.log("Player2 wins");
// }
//
// if(player1==="paper"){
//     if(player2==="rock"){
//         player1Win ++;
//         console.log("Player1 wins");
//     }
//     else{
//         player2Win ++;
//         console.log("Player2 wins");
//     }
//     if(player1==="scissors"){
//         if(player2==="rock"){
//             player1Win ++;
//             console.log("Player1 wins");
//         }
//         else{
//             player2Win ++;
//             console.log("Player2 wins");
//         }
//     }
