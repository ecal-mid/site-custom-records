//console.log = function() {}

//globals
var effect_play = false;

var deltaadd = 0;
var gplc = 0;

var fg_nr = 3;
var bg_nr = 3;

var max_fg = 8;
var max_bg = 10;

var fg = "imgs/f_faces/face";
var bg = "imgs/flowers/flower";

var v_keffectopt = 0;
var v_keffectfreq = 0;


var i_keffectopt = 1;
var i_keffectfreq = 1;


var v_noisesize = 30;
var v_noiseseed = 0;
var v_noisefreq = 0.12;

var v_noise2size = 48;
var v_noise2seed = 0;
var v_noise2freq = 0.043;


var i_noisesize = 1;
var i_noiseseed = 1;
var i_noisefreq = 1;

var i_noise2size = 1;
var i_noise2seed = 1;
var i_noise2freq = 1;

//initialize
$(document).ready(function() {
  $(".fg").attr("xlink:href", fg + fg_nr + ".jpg");
  $(".bg").attr("xlink:href", bg + bg_nr + ".jpg");
  updateLyrTxt();

  InitMarkers();


  var location = window.location.href;
  if (location.indexOf("capture") > -1) {
    console.log("capture mode");
    $("#svg_main,#defaultCanvas0,#clickhandler").css("margin-left", "10px");
    $("#svg_main,#defaultCanvas0,#clickhandler").css("left", "10px");
  }


  // $('#svg_main').click(function(e) {
  //   if(!window.drag_element){
  //     var offset = $(this).offset();
  //     CreatePoint(e.pageX - offset.left, e.pageY - offset.top);
  //   }
  // });
  $('#svg_main')
    .mouseup(function(e) {

      var offset = $(this).offset();
      console.log(e);
      console.log(e.pageX);

      var mumuX = Math.round(1000 * (e.pageX - offset.left) / $('#svg_main').width());
      var mumuY = Math.round(1000 * (e.pageY - offset.top) / $('#svg_main').height());
      //console.log($('#svg_main').width() + "   " + window.height);

      var testarr = [mumuX, mumuY];
      //console.log(testarr);
      // if(window.mousedown_pos.toString() === testarr.toString()){
      //   var offset = $(this).offset();
      //   CreatePoint(e.pageX - offset.left, e.pageY - offset.top);
      // }
      if (!window.drag_element) {
        var offset = $(this).offset();
        console.log(mumuX + "   " + mumuY);
        console.log(offset.left + "   " + offset.top);
        CreatePoint(mumuX, mumuY);

      }

    })
    .mousedown(function(e) {

      var offset = $(this).offset();
      var mumuX = Math.round(1000 * (e.pageX - offset.left) / $('#svg_main').width());
      var mumuY = Math.round(1000 * (e.pageY - offset.top) / $('#svg_main').height());

      window.mousedown_pos = [mumuX, mumuY];
      window.drag_element = false;
    //console.log(window.mousedown_pos);
    //window.mousedown_posy = ;
    });





  //remove point
  $('#svg_main').on('rightclick', function(event) {
    console.log("dfdf");
    if (document.getElementById("maskpoly_" + gplc).points.length > 0) {
      var countl = document.getElementById("maskpoly_" + gplc).points.length;
      document.getElementById("maskpoly_" + gplc).points.removeItem(countl - 1);
      RemoveMarkers(gplc);
    }

  });

});

function deleteallFromLyr() {
  var countl = document.getElementById("maskpoly_" + gplc).points.length;
  for (var y = 0; y < countl; y++) {
    document.getElementById("maskpoly_" + gplc).points.removeItem(0);
  }
  $('.pointer_' + gplc).remove();
}

function togglePlayPause() {
  if (effect_play) {
    effect_play = false;
    document.getElementById("pp").src = "imgs/pp2.png";
  } else {
    effect_play = true;
    document.getElementById("pp").src = "imgs/pp.png";
  }
}

//code..

//switchlayers
function fg_up() {
  //console.log("sdfsdf");
  fg_nr++;
  if (fg_nr > max_fg) {
    fg_nr = 0;
  }
  $(".fg").attr("xlink:href", fg + fg_nr + ".jpg");
}

function fg_down() {
}

function bg_up() {
  //console.log("sdfsdf");
  bg_nr++;
  if (bg_nr > max_bg) {
    bg_nr = 0;
  }
  $(".bg").attr("xlink:href", bg + bg_nr + ".jpg");
}

function bg_down() {
}



//do stuff on point creation
function CreatePoint(x, y) {
  var dogz = document.getElementById("svg_main").createSVGPoint();
  dogz.x = x;
  dogz.y = y;
  document.getElementById("maskpoly_" + gplc).points.appendItem(dogz);

  //set noise effect
  var ihuo = document.getElementById("maskpoly_" + gplc).points.length - 3;
  //  document.getElementById("displacement").setAttribute("scale", ihuo*5);
  var pointnr = document.getElementById("maskpoly_" + gplc).points.length - 1;

  if (document.getElementById("maskpoly_" + gplc).points.length < 300) {
    AddMarker(x, y, gplc, pointnr);
  }


}

function CreatePoly(fug) {
  document.getElementById("mask").appendChild(dogd.node)
}


function updateLyrTxt() {
  //↻↑↓↯
  var txt = "Left Mouse Button: Cut | Right Mouse Button: Undo | ";
  txt += '<a href="javascript:incLayer()">↑</a><a href="javascript:decLayer()">↓</a> Polygon Nr ' + (1 + gplc);
  txt += ' | Scroll Up For Effect';

  $("#lyr_txt").html("");
}


function incLayer() {
  if (gplc < 6) {
    HideMarkers(gplc);
    gplc++;
    decincLayer();
  }
}

function decLayer() {
  if (gplc > 0) {
    HideMarkers(gplc);
    gplc--;
    decincLayer();
  }
}

function decincLayer() {
  updateLyrTxt();
  LayerExists();
  var iheogeih = 1 + gplc;
  //document.getElementById("").src = ;
  $("#layer_popup img").attr("src", "imgs/shapenr" + iheogeih + ".png");
  $('#layer_popup').show();
  clearTimeout(window.dogpoop2);
  window.dogpoop2 = setTimeout(function() {
    $('#layer_popup').hide();
  }, 2000);
}

function LayerExists() {
  ShowMarkers(gplc);

  if (!document.getElementById("maskpoly_" + gplc)) {
    console.log("new poly created");
    var ifeh = new Polygon();
    ifeh.node.setAttributeNS(null, "id", "maskpoly_" + gplc);
    ifeh.node.setAttributeNS(null, "filter", "url(#blur)");
    ifeh.node.setAttributeNS(null, "fill", "black");
    document.getElementById("mask").appendChild(ifeh.node)
  }
}


function AddMarker(x, y, layer, pointnr) {
  var itm = document.getElementById("crsr1");
  var cln = itm.cloneNode(true);
  cln.removeAttribute('id');
  cln.setAttribute("class", "pointerall pointer_" + layer);
  cln.setAttribute("dd2_id", pointnr);
  //cln.addClass("pointer_"+layer);
  cln.setAttribute("x", x);
  cln.setAttribute("y", y);
  document.getElementById("svg_main").appendChild(cln);
}

function RemoveMarkers(layer) {
  $('.pointer_' + layer).last().remove();
}

function HideMarkers(layer) {
  $('.pointer_' + layer).hide();
}

function ShowMarkers(layer) {
  $('.pointer_' + layer).show();
}

function InitMarkers() {
  for (i = 0; i < document.getElementById("maskpoly_" + gplc).points.length; i++) {
    var x = document.getElementById("maskpoly_" + gplc).points[i].x;
    var y = document.getElementById("maskpoly_" + gplc).points[i].y;
    AddMarker(x, y, gplc, i);
  }
}




function keffectopt(val) {
  //document.getElementById("ke_fe_opt").setAttribute("flood-opacity", val);
}

function keffectfreq(val) {
  //document.getElementById("ke_fe_size").setAttribute("baseFrequency", val);
}

function noisesize(val) {
  document.getElementById("noise_displacement").setAttribute("scale", val);
}

function noiseseed(val) {
  document.getElementById("noise_turb").setAttribute("seed", val);
}

function noisefreq(val) {
  document.getElementById("noise_turb").setAttribute("baseFrequency", val);
}

function noise2size(val) {
  document.getElementById("noise2_displacement").setAttribute("scale", val);
}

function noise2seed(val) {
  document.getElementById("noise2_turb").setAttribute("seed", val);
}

function noise2freq(val) {
  document.getElementById("noise2_turb").setAttribute("baseFrequency", val);
}



var incrementopolis = 0;
var modi = 1;





//P5

function setup() {

  frameRate(3);

//noLoop();
}

window.frame_count = 0;

function draw() {

  if (effect_play) {
    window.frame_count--;


    var foogerboog = window.frame_count / 8000;

    deltaadd += foogerboog;

    var incr = deltaadd / 300;
    //console.log(incr);

    var eventdlta = foogerboog * -1;

    if (foogerboog > 0) {
      v_keffectopt = v_keffectopt + i_keffectopt * foogerboog / 600;
      v_keffectfreq = v_keffectfreq + foogerboog / 100;

      v_noise2size = v_noise2size + i_noise2size * foogerboog / 50;
      v_noise2seed = v_noise2seed + 0;
      v_noise2freq = v_noise2freq + i_noise2freq * foogerboog / 600;

    } else {
      v_noisesize = v_noisesize + i_noisesize * eventdlta / 50;
      v_noiseseed = v_noiseseed + 0;
      v_noisefreq = v_noisefreq + i_noisefreq * eventdlta / 600;
    }




    if (v_keffectopt > 1) {
      i_keffectopt = -1;
    }
    if (v_keffectopt < 0) {
      i_keffectopt = 1;
    }
    if (v_keffectfreq > 10) {
      v_keffectfreq = 0;
    }


    if (v_noisesize > 50) {
      i_noisesize = -1;
    }
    if (v_noisesize < 10) {
      i_noisesize = 1;
    }
    if (v_noisefreq > 0.1) {
      i_noisefreq = -1;
    }
    if (v_noisefreq <= 0) {
      i_noisefreq = 1;
    }
    if (v_noisefreq < 0) {
      v_noisefreq = 0;
    }



    if (v_noise2size > 50) {
      i_noise2size = -1;
    }
    if (v_noise2size < 10) {
      i_noise2size = 1;
    }
    if (v_noise2freq > 0.6) {
      i_noise2freq = -1;
    }
    if (v_noise2freq <= 0) {
      i_noise2freq = 1;
    }
    if (v_noise2freq < 0) {
      v_noise2freq = 0;
    }


    keffectopt(v_keffectopt);
    keffectfreq(v_keffectfreq);
    noisesize(v_noisesize);
    noiseseed(v_noiseseed);
    noisefreq(v_noisefreq);

    noise2size(v_noise2size);
    noise2seed(v_noise2seed);
    noise2freq(v_noise2freq);

    //console.log(v_noisesize);
    //console.log(v_noisefreq);

    updateLyrTxt();
  }
//uncomment to block page scrolling
//return false;
}






document.onkeydown = checkKey;

function checkKey(e) {
  e.preventDefault;
  e = e || window.event;


  if (e.keyCode == '38') {
    fg_up();
  } else if (e.keyCode == '40') {
    bg_up();
  } else if (e.keyCode == '37') {
    decLayer();
  } else if (e.keyCode == '39') {
    incLayer();
  } else if (e.keyCode == '8' || e.keyCode == '46') {
    deleteallFromLyr();
  }

}

function keyPressed() {
  // Do something
  return false; // prevent any default behaviour
}








$(function() { // global rightclick handler - trigger custom event "rightclick"
  var mouseDownElements = [];
  $(document).on('mousedown', '*', function(event) {
    if (event.which == 3) {
      mouseDownElements.push(this);
    }
  });
  $(document).on('mouseup', '*', function(event) {
    if (event.which == 3 && mouseDownElements.indexOf(this) >= 0) {
      $(this).trigger('rightclick');
    }
  });
  $(document).on('mouseup', function() {
    mouseDownElements.length = 0;
  });
  // disable contextmenu
  $(document).on('contextmenu', function(event) {
    event.preventDefault();
  });
});


function Polygon() {
  var pointList = [];
  this.node = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  //this.marker_id;

  function build(arg) {
    var res = [];
    for (var i = 0, l = arg.length; i < l; i++) {
      res.push(arg[i].join(','));
    }
    return res.join(' ');
  }
  this.attribute = function(key, val) {
    if (val === undefined) return node.getAttribute(key);
    this.node.setAttribute(key, val);
  }
  this.getPoint = function(i) {
    return pointList[i]
  }
  this.setPoint = function(i, x, y) {
    pointList[i] = [x, y];
    this.attribute('points', build(pointList));
  }
  this.points = function() {
    for (var i = 0, l = arguments.length; i < l; i += 2) {
      pointList.push([arguments[i], arguments[i + 1]]);
    }
    this.attribute('points', build(pointList));
  }
  // initialize 'points':
  this.points.apply(this, arguments);
}
