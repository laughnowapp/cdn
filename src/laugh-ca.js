var punsarray = Array(
  "hola",
  "adios",
);
var puns = function () {
  var newpun = punsarray[Math.floor(Math.random() * punsarray.length)];
  document.getElementById("laugh-text").innerHTML = newpun;
};
