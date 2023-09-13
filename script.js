function randomColor() {
    
    var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));

    return `rgb(${r}, ${g}, ${b})`;
}
// console.log(randomColor());
/* Random Color Section */

// var rgb1 = 'rgb' + '(' + r +', ' + g + ', ' + b + ')';
// var rgb2 = 'rgb' + '(' + r +', ' + b + ', ' + g + ')';
// var rgb3 = 'rgb' + '(' + g +', ' + b + ', ' + r + ')';

/* Random Color 블럭 적용 */
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var answer = document.getElementById('answer');

/* Web 실행 시 function 실행 */
function start() {

    var random1 = randomColor();
    var random2 = randomColor();
    var random3 = randomColor();
    var randomAnswer = [random1, random2, random3];
    var randomValue = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];

    block1.style.backgroundColor = random1;
    block2.style.backgroundColor = random2;
    block3.style.backgroundColor = random3;
    document.getElementById('answer').innerHTML = randomValue;
    
    // console.log(random1);
    // console.log(random2);
    // console.log(random3);
    // console.log(randomValue);



// var random1 = randomColor();
// var random2 = randomColor();
// var random3 = randomColor();
// var randomAnswer = [random1, random2, random3];
// var randomValue = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];

/* Block 1 클릭 시 */
document.getElementById('block1').addEventListener('click', () => {
    if (randomValue === random1) {
        alert('You got it!');
        // startNewGame();
 }
    else{
        block1.style.backgroundColor = 'black';
 }
});

/* Block 2 클릭 시 */
document.getElementById('block2').addEventListener('click', () => {
    if (randomValue === random2) {
        alert('you got it!');
    //    startNewGame();
    }
    else {
        block2.style.backgroundColor = 'black';
    }
   });

/* Block 3 클릭 시 */
document.getElementById('block3').addEventListener('click', () => {
    if (randomValue === random3) {
       alert('you got it!');
    //    startNewGame();
    }
    else {
        block3.style.backgroundColor = 'black';
        // block3.style.visibility = 'hidden'; -> 적용 시 button 클릭하면 색깔 안 불러와짐

    }
   });
}
start();


function startNewGame() {

    var random1 = randomColor();
    var random2 = randomColor();
    var random3 = randomColor();
    var randomAnswer = [random1, random2, random3];
    var randomValue = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];

    block1.style.backgroundColor = random1;
    block2.style.backgroundColor = random2;
    block3.style.backgroundColor = random3;
    document.getElementById('answer').innerHTML = randomValue;
    
    console.log(random1);
    console.log(random2);
    console.log(random3);
    console.log(randomValue);
};
// /* Block 1 클릭 시 */
// document.getElementById('block1').addEventListener('click', () => {
//     if (randomValue === random1) {
//         alert('You got it!');
//         // startNewGame();
//  }
//     else{
//         block1.style.backgroundColor = 'black';
//  }
// });

// /* Block 2 클릭 시 */
// document.getElementById('block2').addEventListener('click', () => {
//     if (randomValue === random2) {
//         alert('you got it!');
//     //    startNewGame();
//     }
//     else {
//         block2.style.backgroundColor = 'black';
//     }
//    });

// /* Block 3 클릭 시 */
// document.getElementById('block3').addEventListener('click', () => {
//     if (randomValue === random3) {
//        alert('you got it!');
//     //    startNewGame();
//     }
//     else {
//         block3.style.backgroundColor = 'black';
//         // block3.style.visibility = 'hidden'; -> 적용 시 button 클릭하면 색깔 안 불러와짐

//     }
//    });
// }
   