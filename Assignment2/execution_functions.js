window.onload = function () {
  var grabKeysBtn = document.getElementById("grabKeysButton");
  var grabKeysRes = document.getElementById("grabKeysResults");

  grabKeysBtn.addEventListener("click", () => {
    var grabKeysObj = document.getElementById("grabKeysText").value;

    grabKeysObj = JSON.parse(grabKeysObj);

    console.log(grabKeysObj);

    grabKeysRes.innerHTML = grabKeys(grabKeysObj);
  });

  var grabValsBtn = document.getElementById("grabValuesButton");
  var grabValsRes = document.getElementById("grabValuesResults");

  grabValsBtn.addEventListener("click", () => {
    var grabValsObj = document.getElementById("grabValuesText").value;

    grabValsObj = JSON.parse(grabValsObj);

    console.log(grabValsObj);

    grabValsRes.innerHTML = grabValues(grabValsObj);
  });
};
