var userName = prompt("Enter your name ? ");

console.log(userName);

alert("this is the best website for you dear " + userName)
function book4you (    ){
var book4you = prompt("How do you prefer to read your books? choose if online ,download ")
while (book4you != "online" && book4you!= "download"){

      book4you = prompt("please enter on of : online download");
}
book4you();
}
var number = prompt("How many book have you read on our website?")
function numofbook(number){
  var output="";
for (var i=0 ; i<number; i++){
output+="<img src='https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png'>";
}
document.write(output);
}
numofbook(number);
