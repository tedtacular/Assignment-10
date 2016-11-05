document.getElementById("travel1").onmouseover = change;

function change () {
  var image = document.getElementById("travel1");
  var newSource = "images/travel2.jpg";
  image.setAttribute("src", newSource);
}

document.getElementById("road1").onmouseover = shift;

function shift () {
  var image = document.getElementById("road1");
  var newSource = "images/road2.jpg";
  image.setAttribute("src", newSource);
}

document.getElementById("bridge1").onmouseover = turn;

function turn () {
  var image = document.getElementById("bridge1");
  var newSource = "images/bridge2.jpg";
  image.setAttribute("src", newSource);
}

document.getElementById("city1").onmouseover = flip;

function flip () {
  var image = document.getElementById("city1");
  var newSource = "images/city2.jpg";
  image.setAttribute("src", newSource);
}
