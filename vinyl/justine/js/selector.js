var selector0 = document.getElementById('selector0');
var selector1 = document.getElementById('selector1');
var selector2 = document.getElementById('selector2');

function test(index){
  if(index == 0){
    selector0.style.backgroundColor ="red";
  }
  if(index == 1){
    selector1.style.backgroundColor ="blue";
  }
  if(index == 2){
    selector2.style.backgroundColor ="green";
  }
}
