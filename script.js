
function mF(arr) {

  let square = 0;

  for (let item of arr) {

    square += Math.pow(item, 2);
  }

  return square
}

console.log(mF([0, 1, 2, 3, 4, 5]));



// function mF(arr) {
//   let square = 0;

//   for (let item of arr) {

//     square += Math.pow(item, 2);
//   }

//   console.log(square);
// }

// mF([0, 1, 2, 3, 4, 5]);

