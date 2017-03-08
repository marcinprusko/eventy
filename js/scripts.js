// plik scripts.js

var lista = document.getElementById('list');
var add = document.getElementById('addElem');
var itemjs = document.getElementsByTagName("li");

addEventListener('click', function() {
  list.innerHTML += '<li>item ' + itemjs.length + '</li>';
});



console.log(itemjs, itemjs.length);





