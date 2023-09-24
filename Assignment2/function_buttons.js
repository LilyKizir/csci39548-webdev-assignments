const { myEach } = require("./javascript_functions.js");
var myEachArray = document.getElementById("myEachInput").value;
var myEachArg = document.getElementById("myEachArgument").value;
var myEachRes = document.getElementById("myEachResult");
var myEachButton = document.getElementById("myEachButton");

myEachButton.addEventListener("click", () => {
  myEachRes.innerHTML = myEach(myEachArg, myEachArray);
});
