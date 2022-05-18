var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
  coll[i].addEventListener("focusout", function() {
    this.classList.remove("active");
  });
}

$(document).ready(function() {
  $("#accordion").accordion({
    active: false,
    collapsible: true
  });
  $(".selector").accordion("option", "active", false);
  $(".selector").accordion("option", "collapsible", true);
});