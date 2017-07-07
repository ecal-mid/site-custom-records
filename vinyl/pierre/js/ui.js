$(function(){
    $('#os1').draggable(); // appel du plugin
    $('#os2').draggable(); // appel du plugin
    $('#os3').draggable(); // appel du plugin
    $('#os4').draggable(); // appel du plugin
    $('#I').draggable(); // appel du plugin
});

var left = 0;
$(document).ready(function(e){
  $("#os1, #os2, #os3, #os4").attr('draggable', false);

  var int00, rotating;
  $("#rotation").click(function() {
      $('body').removeClass('position').addClass('rotation');

      $('#os1').draggable({ disabled: true });
      $('#os2').draggable({ disabled: true });
      $('#os3').draggable({ disabled: true });
      $('#os4').draggable({ disabled: true });

      rotating = true;
  });

  $("#position").click(function() {
      $('body').removeClass('rotation').addClass('position');

      $('#os1').draggable({ disabled: false });
      $('#os2').draggable({ disabled: false });
      $('#os3').draggable({ disabled: false });
      $('#os4').draggable({ disabled: false });

      rotating = false;
  });

  $('#os1').mousedown(function(e){
    if(rotating) {
      int00 = setInterval(function() {
        $('#os1').attr("data-rotation", parseInt($('#os1').attr("data-rotation")) + 1);
        $('#os1').css({"-webkit-transform" : "rotate("+$('#os1').attr("data-rotation")+"deg)"});
      });
    }
  });

  $('#os2').mousedown(function(){
    if(rotating) {
      int00 = setInterval(function() {
        $('#os2').attr("data-rotation", parseInt($('#os2').attr("data-rotation")) + 1);
        $('#os2').css({"-webkit-transform" : "rotate("+$('#os2').attr("data-rotation")+"deg)"});
      });
    }
  });

  $('#os3').mousedown(function(){
    if(rotating) {
      int00 = setInterval(function() {
        $('#os3').attr("data-rotation", parseInt($('#os3').attr("data-rotation")) + 1);
        $('#os3').css({"-webkit-transform" : "rotate("+$('#os3').attr("data-rotation")+"deg)"});
      });
    }
  });

  $('#os4').mousedown(function(){
    if(rotating) {
      int00 = setInterval(function() {
        $('#os4').attr("data-rotation", parseInt($('#os4').attr("data-rotation")) + 1);
        $('#os4').css({"-webkit-transform" : "rotate("+$('#os4').attr("data-rotation")+"deg)"});
      });
    }
  });

  $('body').mouseup(function() {
    if(rotating) {
      clearInterval(int00);
    }
  });

});
