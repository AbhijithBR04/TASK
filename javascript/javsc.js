// document.write("abhi")

// let a=[1,2,3,4,5]

// for (i in a){
//     document.write(i)
//     console.log(i)
// }


let rows = 6;
let char = "";

for (let i = 0; i < rows; i++) {
  // printing star
  for (let k = 0; k < rows - i; k++) {
    char += "*";
  }
  char += "\n";
}
console.log(char);