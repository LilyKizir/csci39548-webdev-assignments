document.addEventListener("DOMContentLoaded", () => {
  var grabKeysButton = document.getElementById("grabKeysButton");
  var grabValButton = document.getElementById("grabValuesButton");

  if (grabKeysButton) {
    grabKeysButton.addEventListener("click", () => {
      var grabKeysObj = document.getElementById("grabKeysText").value;
      var grabKeysRes = document.getElementById("grabKeysResult");

      grabKeysObj = JSON.parse(grabKeysObj);

      console.log(grabKeysObj);

      grabKeysRes.innerHTML = grabKeys(grabKeysObj);
    });
  }

  if (grabValButton) {
    grabValButton.addEventListener("click", () => {
      var grabValObj = document.getElementById("grabValuesText").value;
      var grabValRes = document.getElementById("grabValuesResult");

      grabValObj = JSON.parse(grabValObj);

      console.log(grabValObj);

      grabValRes.innerHTML = grabKeys(grabValsObj);
    });
  }
});
