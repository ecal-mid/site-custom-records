// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;
    Query = Matter.Query,
	Vertices = Matter.Vertices,
    Svg = Matter.Svg;



// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    options: {
		width:700,
		height:700,
      wireframes: false,
      showAngleIndicator: false,
	  background: '#000'
	  
    }
	
  }
});

// gravity init
// engine.world.gravity.x = document.getElementById("x-val").innerHTML;
// engine.world.gravity.y = document.getElementById("y-val").innerHTML;



//add a mouse-controlled constraint
var mouseConstraint = MouseConstraint.create(engine, {
  constraint: {
    render: {
      visible: false
    }
  }
});






  $.get('./svg/bobr.svg').done(function(data) {
           
                color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

            $(data).find('path').each(function(i, path) {
                vertexSets.push(Svg.pathToVertices(path, 30));
            });

            terrain = Bodies.fromVertices(400, 350, vertexSets, {
                isStatic: true,
                render: {
                    fillStyle: color,
                    strokeStyle: color
                }
            }, true);

            World.add(world, terrain);

            var bodyOptions = {
                frictionAir: 0, 
                friction: 0.0001,
                restitution: 0.6
            };
            
            World.add(engine.world, Composites.stack(80, 100, 20, 20, 10, 10, function(x, y) {
                if (Query.point([terrain], { x: x, y: y }).length === 0) {
                    return Bodies.polygon(x, y, 5, 12, bodyOptions);
                }
            }));
        });











World.add(engine.world, mouseConstraint);
    
        $.get('./svg/bo.svg').done(function(data) {
           var vertexSets = [],
                color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

           $(data).find('path').each(function(i, path) {
            vertexSets.push(Svg.pathToVertices(path, 3));
         
          });
			
			console.log(vertexSets);

            World.add(engine.world, Bodies.fromVertices(370, 300, vertexSets, {
                render: {
                   fillStyle: 'yellow',
					strokeStyle: 'yellow',
					lineWidth: '0' 
               },isStatic:true,
            }, true));
        });
			
				
		
World.add(engine.world, mouseConstraint);		
		
	$.get('./svg/time1.svg').done(function(data) {
            var vertexSets = [],
                color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

            $(data).find('path').each(function(i, path) {
              vertexSets.push(Svg.pathToVertices(path, 3));
         
            });
			
			console.log(vertexSets);
			
			

            World.add(engine.world, Bodies.fromVertices(370, 300, vertexSets, {
                render: {
                    fillStyle: '#fff',
					strokeStyle: '#fff',
					lineWidth: '0' 
                },friction: .000, restitution: 0.1, density: 0.1, isStatic:false,
            }, true));
        });	
		
		
World.add(engine.world, mouseConstraint);		
		
	$.get('./svg/time2.svg').done(function(data) {
            var vertexSets = [],
                color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

            $(data).find('path').each(function(i, path) {
              vertexSets.push(Svg.pathToVertices(path, 3));
         
            });
			
			console.log(vertexSets);

            World.add(engine.world, Bodies.fromVertices(370, 300, vertexSets, {
                render: {
                    fillStyle: '#fff',
					strokeStyle: '#fff',
					lineWidth: '0' 
                },friction: .000, restitution: 0.1, density: 0.1 ,isStatic:false,
            }, true));
        });			
		
		
		
World.add(engine.world, mouseConstraint);		
		
	$.get('./svg/time3.svg').done(function(data) {
            var vertexSets = [],
                color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

            $(data).find('path').each(function(i, path) {
              vertexSets.push(Svg.pathToVertices(path, 3));
         
            });
			
			console.log(vertexSets);

            World.add(engine.world, Bodies.fromVertices(370, 300, vertexSets, {
                render: {
                    fillStyle: '#fff',
					strokeStyle: '#fff',
					lineWidth: '0' 
                },friction: .000, restitution: 0.1, density: 0.1,
				isStatic:false,
            }, true));
        });			
				
		
		
		
		
		
		
		
		
		
		
		
		
		

    
// create function to update output values & manipulate gravity
function gravOutputUpdate(id, axis, val) {
  document.getElementById(id).innerHTML = val;
  engine.world.gravity[axis] = val;
}


// create a load of circle bodies
var stack = Composites.stack(0, 0, 30, 10, 5, 40, function(x, y, column, row) {
  return Bodies.circle(x, y, Common.random(3, 3),{
	  render:{
		  fillStyle: '#fff', strokeStyle: '#fff',
		   lineWidth: 0 },
	  friction: .001, restitution: 0.1, density: 5.5, });
});
// add boundaries
var offset = 0;
World.add(engine.world, [
  //Bodies.rectangle(220,  150, 350, 20, { render: {fillStyle: 'white', strokeStyle: '#000'}, isStatic: true, angle: Math.PI * 0.01 }),
  // les rectangles des limites du cadres
  
  
  
   Bodies.rectangle(0, 0 , 1400, 50, { render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(0, 700, 1400, 50, {  render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(700, 350, 50, 700, {  render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(0, 350, 50, 700, { render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(350, 25 , 650, 2, { render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(350, 675, 650, 2, {  render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(675, 350, 2, 650, {render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
  Bodies.rectangle(25, 350, 2, 650, {render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true})
]);

// add all of the bodies to the world
World.add(engine.world, stack);

// run the engine
Engine.run(engine);
