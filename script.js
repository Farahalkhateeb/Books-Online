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


//if (userpage <= 200) {

//if (userName <= 25) {

 // alert("its fantasic")
 //else {
  //alert("you have to read it")


    // if(condition 1){
    //   if true do this code 1
    // }else if(condition 2 ) {
    //   if true do this code 2
    // }else {
    //    if both conditions were false do this code 
    // }

//if (page <= 200) {
  //alert("its fantastic")
 //else if(page > 200) {
  //alert("you have to read it")
//}else{
  ///alert("welcome")





var userpage = prompt("Enter how many pages you want ? ");
console.log(userpage);

var userName = prompt(" how many pages you want ? ");
console.log(userName);

// userAge == 25 

var favBook=prompt("what is your favourite book from ourlibrary?" )
 while(favBook!="how to lead an effective meeting"&& favBook!="7habits of highly effective people"&& favBook!="getting things done"){

   favBook=prompt("please enter one of:how to lead an effective meeting,7habits of highly effective people,getting things done")
 }

var starNum=prompt("how manystars would you give our website?")
var output=" ";
for (var i=0;i<starNum;i++){

var output=output+"<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fstar.html&psig=AOvVaw3pxlw6Nr2znqPWAB7DXNus&ust=1623101713567000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCG-6r7g_ECFQAAAAAdAAAAABAD';/>";
        
}
document.write(output);