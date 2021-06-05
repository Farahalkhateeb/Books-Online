var userName;
 userName = "farah";
var myId = 1234;
var test = true;



// 4- How can we see the values
// it's for the developers to test thier code 
console.log(userName);

// these two ways for the user :
// alert("welcome to our website " + userName)


document.write("<p style='color:red;'> this is " + userName + " from js </p>")


// 5- operations 
//    *assignment operator 
//   equal = 
// ex : 
var x = 5;


//    *arithmetic operators  
//  + addition 5+1 
//  - sub 5-1 
//  * mul 1*5 
//  / div 5/5
//  % mod  10%3 
//  ++ increment 5++
//  -- decremet 5--
//  ** power off 2^2X  2**2 5^3X 5**3
var y = "5";
//  console.log(5**2);
//  console.log(y++);
//  console.log(y);



//    *comparison operators  
// ==  value only 
console.log(y == x);
// === value and datatype 
console.log(y === x);


// !=  value only 
console.log(y != x);
// !== value and datatype 
console.log(y !== x);

// <  
// >= 
// > 
// <=

var page = 200;
var userpage
// 6- conditional statement 
// if(condition){
//   if true do this code 
// }else {
//   if false do this code 
// }

if (userpage <= 200) {
  alert("its fantasic")
} else {
  alert("you have to read it")
}

    // if(condition 1){
    //   if true do this code 1
    // }else if(condition 2 ) {
    //   if true do this code 2
    // }else {
    //    if both conditions were false do this code 
    // }

if (page <= 200) {
  alert("its fantastic")
} else if(page > 200) {
  alert("you have to read it")
}else{
  alert("welcome")
}




var userpage = prompt("Enter how many pages you want ? ");
console.log(userpage);
// userAge == 25 


