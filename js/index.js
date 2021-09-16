function requete(link) {
  const xhr = new XMLHttpRequest();
  console.log(this);
  xhr.onreadystatechange = function () {

    if (this.readyState === 4 && this.status === 200) {
      console.log(this);
    }
  }

  xhr.open('GET', link, true);
  xhr.setRequestHeader('Access-Control-Allow-Origin','*');
  xhr.responseType = 'xml';
  xhr.send();
}
requete('https://www.google.com/');
