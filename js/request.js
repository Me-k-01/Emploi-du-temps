


function getJson(array, fun) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState !== 4 || xhr.status !== 200) { return; }  // Une erreur
    console.log(xhr.responseText);
  };
  // xhr.open("POST", "data.php?query="+JSON.stringify(array), true);
  xhr.open("POST", "php/data.php", true);
  xhr.setRequestHeader("Content-Type", "application/text");
  xhr.send(`query=test`); //"${array.join(',')}"
}
getJson([1, 3, 4])
