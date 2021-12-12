function requestData(array, fun) {
  if (array.length === 0) return fun([]);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) { return; } // Not ready
    if (xhr.status !== 200) { // An error occured
      console.error(xhr.responseText); return;
    }
    fun(JSON.parse(xhr.responseText));
  };
  xhr.open("POST", "php/data.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`query=${JSON.stringify(array)}`);
}
