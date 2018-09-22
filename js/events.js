//define functions here
function getIt(){
$('p').on('click', alert('Hey!'))
}
function frameIt(){
$('img').on('load', "border: 2px solid red")
}
function pressIt(){
$('p').on('click', alert('Hey!'))
}
function submitIt(){
$('p').on('click', alert('Hey!'))
}


$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
