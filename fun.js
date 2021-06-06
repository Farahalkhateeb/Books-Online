var favBook = prompt("whats your fav from : how to lead an effective meeting,7habits of highly effective people,getting things done");


function favBookFun() {

  while (favBook != "how to lead an effective meeting" && favBook != "7habits of highly effective people" && favBook != "getting things done") {

    favBook=prompt("please enter one of:how to lead an effective meeting,7habits of highly effective people,getting things done")
  }

  document.write("<img src='https://cdn.vox-cdn.com/thumbor/du79s36XcdSLiXDqCzWkIBeV7nU=/0x0:1600x900/1200x800/filters:focal(672x322:928x578)/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png'/>")

  if (favBook == " how to lead an effective meeting" || favBook == "7habits of highly effective people" || favBook == "getting things done") {
    console.log(favBook);

  } else {
    favBook = prompt("please enter on of : how to lead an effective meeting,7habits of highly effective people,getting things done");
    console.log(favBook);

  }


}

favBookFun();







var x = prompt("how many times do you want to see a star image ?")

var starsFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output +  "<img src='https://image.shutterstock.com/image-vector/star-icon-vector-classic-rank-260nw-429574270.jpg' />"

   console.log(i,output)

    i++;
  }

  return output;

}
