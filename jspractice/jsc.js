// // *qus:1* // 

// function view(){
//     str="abhjith"
//     console.log(str)
// }
// view()

// //*qus2:2*//
// function sum(){
//     let a=6
//     let b=8
//     let c=a+b
//     console.log(c)
// }
// sum()

// ///*qus:3*//
// function Simpleinterest(){
//     p=100;
//     r=8;
//     n=2;
    
//     let si=(p*r*n/100)
//     console.log(si)
// }
// Simpleinterest()

//*qus:4*//
// let a=parseInt(prompt("enter"));
// if (a>50){
//     console.log("passed");
// }
// else{
//     console.log("failed")
// }


//*qus:5*//
// let mark=parseInt(prompt("enter the marks:"));
// if (mark>=90){
//     console.log("Grade A")
// }
// else if(mark <=89 && mark >=80){
//     console.log("Grade B")
// }
// else if(mark <=79 && mark >=70){
//     console.log("Grade C")
// }
// else if(mark <=69 && mark >=60){
//     console.log("Grade D")
// }
// else if(mark <=59 && mark >=50){
//     console.log("Grade E")
// }
// else {
//     console.log("failed")
// }



// let day=7;
// switch (day){
//     case 1:console.log("Sunday")
//     break;
//     case 2:console.log("Monday")
//     break;
//     case 3:console.log("Tuesday")
//     break;
//     case 4:console.log("Wednesday")
//     break;
//     case 5:console.log("Thursday")
//     break;
//     case 6:console.log("Friday")
//     break;
//     case 7:console.log("Saturday")
//     break;
//     default :console.log("Invalid Entry")
// }



//*qus:7*//
// let n=parseInt(prompt("Enter a number"));
// for(i=1;i<=10;i++){
//     res=n*i;
//     console.log(i+"x"+n+"="+res)
// }

// *qus:8*//
// let limit=10;
// let sum=0;
// for(i=1;i<=limit;i++){
//     if(i%2!==0){
//         sum=sum+i;
//     }
// }
// console.log(sum)


//* qus:9*//
// let a=5;
// let n=0;

// for(i=1;i<=a;i++){
//     for(j=1;j<=i;j++){
//         n=n+j;
//     }
//     n=n+"\n";
// }
// console.log(n)


//*qus:12*//
// let arr=[1,2,3,7,9,6,5]
// let fin=arr.sort()
// let res=fin.reverse()
// console.log(res);




//* qus:13 *//
// function Pallindrome(string){
//     let len=string.length
//     for(i=0;i<len/2;i++){
//         if(string[i]!==string[len-1-i]){
//             console.log("not pallinrome")
//         }
//         else[
//             console.log("pallindrome")
//         ]
//     }
// }
// string="malayalam";
// value=Pallindrome(string)
// console.log(value)



//* qus:16 *//
// function isPrime(number) {
//     if (number <= 1) 
//      return false; 
//     if (number <= 3) 
//         return true; 
//     if (number % 2 === 0 || number % 3 === 0) 
//         return false;

//     for (let i = 5; i * i <= number; i += 6) { 
//       if (number % i === 0 || number % (i + 2) === 0) {
//         return false; 
//       }
//     }
//     return true; 

//   }
  
//   let numberToCheck = parseInt(prompt("enter a number")); 
//   if (isPrime(numberToCheck)) {
//     console.log(`is a prime number.`);
//   } else {
//     console.log(`is not a prime number.`);
//   }




//*qus:17 *//
// let operator=prompt("enter an operator")

// let num1=parseInt(prompt("enter the first number"))
// let num2=parseInt(prompt("enter the second number"))


// if(operator=="+"){
//     console.log(num1+num2)
// }
// else if(operator=="-"){
//     console.log(num1-num2)
// }
// else if(operator=="*"){
//     console.log(num1*num2)
// }
// else if(operator=="/"){
//     console.log(num1/num2)
// }
// else{
//     console.log("invalid operator")
// }

//* qus:18*//
// let a=parseInt(prompt("Written test = " ))
// let b=parseInt(prompt("Lab exams = " ))
// let c=parseInt(prompt("Assignments = " ))

// grade=(a*70)/100+(b*20)/100+(c*10)/100

// console.log("Grade of the student is " + grade)


//* qus:19 *//
// let amount=parseInt(prompt("Enter the annual income"))
// let tax;
// if (amount<250000){
//     console.log("No Tax")
// }
// else if (amount>250000 && amount<=500000){
//     console.log("Income tax amount =", tax=amount*.05)
// }
// else if (amount>500000 && amount<=1000000){
//     console.log("Income tax amount =",tax=amount*.2)
// }
// else if (amount>100000 && amount<=5000000){
//     console.log("Income tax amount =",tax=amount*.03)
// }
// else{
//     console.log("Enter a valid income")
// }


//*qus:10*//
// let a=4;
// let d="";
// let n=1;Task

// for(let i=1;i<=a;i++){
//     for(let j=1;j<=i;j++){
  
//         d=d+n;
//         n++;
//     }
//     d=d+"\n \n";
// }
// console.log(d)




//* qus:21 *??
// function main() {

//     let n = prompt("Enter the limit of the array");
//     let a = [];
//     let b = [];
//     console.log("Enter the array elements:");
//     for (let i = 0; i < n; i++) {
//         let element = parseInt(prompt());
//         a.push(element);
//     }
//     console.log("result:");
//     for (let i = 0; i < n - 1; i++) {
//         b[i] = a[i] * a[i + 1];
//         console.log(b[i] + "\n");

//     }
// }
// main()


//* qus:11 *//
// let size=parseInt(prompt("enter the size of array"))
// let arr=[];
// for(i=0;i<size;i++){
//     let num=parseInt(prompt("enter the values"))
//     arr.push(num)
// }

// let even=0;
// for(i=0;i<size;i++){
//     if(arr[i]%2===0){
//         even++
//     }
// }
// console.log("Number of even numbers in the given array is " + even)





