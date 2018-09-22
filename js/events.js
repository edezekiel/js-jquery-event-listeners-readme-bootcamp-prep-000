//define functions here
function getIt(){
$('p').on('click', alert('Hey!'))
}
function frameIt(){
$('img').on('load', "border: 2px solid red")
}
function pressIt(){
$('input').on('keydown', function(key){
  if(key.which == 71){
      alert('G was pressed');
  }
})
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
