// Matter.js module aliases
var Engine = Matter.Engine,
World = Matter.World,
Body = Matter.Body,
Bodies = Matter.Bodies,
Common = Matter.Common,
Constraint = Matter.Constraint,
Composites = Matter.Composites,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint,
Query = Matter.Query,
Vertices = Matter.Vertices,
Svg = Matter.Svg,
Runner = Matter.Runner,
Render = Matter.Render;

// create a Matter.js engine
var container = document.getElementById('canvasContainer');
var engine = Engine.create(),
    world  = engine.world;

var render = Render.create({
    element: container,
    engine: engine,
    options: {
        width:620,
        height:620,
        wireframes: false,
        showAngleIndicator: false,
        background: '#000'
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

// gravity init
// world.gravity.x = document.getElementById("x-val").innerHTML;
world.gravity.y = 0.05;

//add a mouse-controlled constraint
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

render.mouse = mouse;

World.add(world, mouseConstraint);

$.get('./svg/bobr.svg').done(function(data) {
    var vertexSets = [],
    color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);


    $(data).find('path').each(function(i, path) {
        vertexSets.push(Svg.pathToVertices(path, 30));
    });

    World.add(world, Bodies.fromVertices(310, 310, vertexSets, {
        render: {
            fillStyle: '#000000',
            strokeStyle: '#000000',
            lineWidth: '0'
        },
        isStatic:true
    }, true));
});

World.add(world, [Bodies.rectangle(50, 300 , 74, 30, {
    render: {
        fillStyle: 'transparent',
        strokeStyle: 'transparent',
        lineWidth: '0',
        sprite: {
            texture: './svg/time1.png'
        }
}, isStatic: false})]);


World.add(world, [Bodies.rectangle(300, 300 , 57, 30, {
    render: {
        fillStyle: 'transparent',
        strokeStyle: 'transparent',
        lineWidth: '0',
        sprite: {
            texture: './svg/time2.png'
        }
}, isStatic: false})]);


World.add(world, [Bodies.rectangle(550, 300, 30, 121, {
    render: {
        fillStyle: 'transparent',
        strokeStyle: 'transparent',
        lineWidth: '0',
        sprite: {
            texture: './svg/time3.png'
        }
}, isStatic: false})]);


// create function to update output values & manipulate gravity
function gravOutputUpdate(id, axis, val) {
    document.getElementById(id).innerHTML = val;
    world.gravity[axis] = val;
}


// create a load of circle bodies
var stack = Composites.stack(25, 20, 22, 23, 14, 8, function(x, y, column, row) {
    return Bodies.circle(x, y, Common.random(4, 10), {
        render: {
            fillStyle: '#fff',
            strokeStyle: '#fff',
            lineWidth: 0
        },
        friction: .001,
        restitution: 0.1,
        density: 5.5
    });
});

var stack2 = Composites.stack(25, 20, 9, 7, 35, 45, function(x, y, column, row) {
    return Bodies.circle(x, y, Common.random(13, 20), {
        render: {
            fillStyle: '#fff',
            strokeStyle: '#fff',
            lineWidth: 0
        },
        friction: .001,
        restitution: 0.1,
        density: 5.5
    });
});


// add boundaries
var offset = 0;
World.add(world, [
    Bodies.rectangle(310, 10 , 580, 20, { render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(310, 610, 580, 20, {  render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(610, 310, 20, 620, {  render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(10, 310, 20, 620, { render: {fillStyle: '#000',strokeStyle: '#000', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(310, 19 , 582, 2, { render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(310, 601, 582, 2, {  render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(601, 310, 2, 582, {render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true}),
    Bodies.rectangle(19, 310, 2, 582, {render: {fillStyle: '#fff',strokeStyle: '#fff', lineWidth: '0'}, isStatic: true})
]);

World.add(world, stack);
World.add(world, stack2);
