const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if (status === 200) {
        callback(xhr.response, null);
      } else {
        callback(xhr.response, status);
      }
    };
    xhr.send();
};
