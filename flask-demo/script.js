'use strict';
(() => {
  console.log('script loaded');


  let searchButton = document.querySelector('button');
  let responseField = document.querySelector('#response');

  function fetchHelloWorld() {
    console.log("fetching python localhost");
    fetch('http://localhost:5000/', {
      method: 'GET',
      mode:'no-cors',
      dataType: 'json'
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        responseField.innerText = r;
      })
      .catch(err => console.log(err))
  }

})();
