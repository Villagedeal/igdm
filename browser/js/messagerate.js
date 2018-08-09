var outFocus = document.getElementById("outfocusrate");
var inFocus = document.getElementById("infocusrate");
var outputIf = document.getElementById("OI");
var outputOf = document.getElementById("OO");
outputIf.innerHTML = inFocus.value;
outputOf.innerHTML = outFocus.value;

outFocus.oninput = function() {
  outputOf.innerHTML = this.value;
}
inFocus.oninput = function() {
  outputIf.innerHTML = this.value;
}