/*var boxes = document.getElementsByClassName('box');
var button = document.querySelector('input[type = "submit"]');
var field = document.querySelector('input[type = "text"]');
var texts = document.querySelectorAll('h2');
var icons = document.querySelectorAll('i');
var myBox = document.getElementById('my-box');

button.value = "send";

field.addEventListener('keyup', count);


function count(e) {


for (i = 0; i < texts.length; i++){

texts[i].innerHTML = ''+e.target.value+'';

}


}
*/

var button = document.querySelector('.add-click');
var myList = document.querySelector('.list');
var myMenu = document.querySelector('.list-menu');
var field = document.querySelector('input[type = "text"]');
var remove = document.querySelector('.remove');
var counter = document.querySelector('.counter')



button.addEventListener('click', creatMenu);



function creatMenu() {
if (field.value == ""){


} else {

var newMenu = document.createElement('li');

newMenu.id = "no-tasks";

newMenu.classList.add('list-menu');



var newRemove = document.createElement('span');

newRemove.classList.add('remove');

var spanText = document.createTextNode('delete');




newRemove.appendChild(spanText);

newMenu.appendChild(newRemove);

var newText = document.createTextNode(field.value);

newMenu.appendChild(newText);

myList.appendChild(newMenu);

} 


// empty 

if (myList.contains(newMenu)){

field.value = "";

}

newRemove.addEventListener('click', removeMenu);

function removeMenu() {


newRemove.parentElement.remove();



}
counter.style.display = "block";

counter.innerHTML = "you have now " + document.querySelectorAll('li').length + " tasks";

}


