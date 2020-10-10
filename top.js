var mybutton = document.getElementById("topbtn");  window.onscroll = function() {scrollFunction()};

function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {mybutton.style.display = "block";} 
  else {mybutton.style.display = "none";} }

