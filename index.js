// Add two Numbers
// You are provided with two numbers A and B
// . Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input
const AddTwoNumbers = (a,b) => {

    return(a+b);
    
      
  };
  console.log(AddTwoNumbers(10,30));
  
//   2.Find if the conditions are obeyed or not?
const Is_Valid = (a,b) => {
    return(a<10 && a>b)
  
  };
  console.log(Is_Valid(8,9));

//  3 .Check the conditons
// You are given two numbers 
// A and B. You need to do the following checks:
// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.

const Check = (A, B) => 
{
  if(A%10==0 && B%10==0)
  {
    return("true");
  }
  else if(A%10!=0 && B%10!=0)
  {
    return("false");
  }
  else if(A%10==0 || B%10==0)
  {
    return("true");
  }
  
    
};
console.log(Check(20,5));
// 4. Find the first digit of a 4 digit number.

const First_Digit = (n) => {
    var m=n/1000;
    return(Math.floor(m));
 };
 console.log(First_Digit(7564));

//  5. Find the last digit of a 4 digit number

const Last_Digit = (n) => {
    var m=n%10;
    return(Math.floor(m));
 };
 console.log(Last_Digit(1234));
// 6. Find the remainder

const Find_the_remainder = (a,b) => {
    let d=b%a;
    return d;
};
console.log(Find_the_remainder(4,15));
// 7. Multipy two Numbers


const Multiply_two_number = (a,b) => {
    return (a*b);
};
console.log(Multiply_two_number(20,20));
// .8 Marks Calculator
// Shyam has got his marks in three subjects as A, B, and C(out of 100).Write a program to calculate his total marks and his average.

const Sum = (A, B, C) => 
{
  let m=A+B+C;
  return m;
};
console.log(Sum(10,10,10));

const Average = (A, B, C) => 
{
  var n=(Sum(A,B,C)/3);
  return n;
}; 
let f=Average(10,20,10);
console.log(Math.floor(f));