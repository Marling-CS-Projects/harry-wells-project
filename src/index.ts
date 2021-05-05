import * as p5 from 'p5';

import * as Matter from 'matter-js';

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let sketch = function (p: p5) {
    let engine: Matter.Engine;
    var ballA: Matter.Body;
    var boxA: Matter.Body;
    var ground: Matter.Body;

    p.setup = function () {
        p.createCanvas(1500, 700);

        engine = Engine.create();
        ballA = Bodies.circle(400, 200, 25,);
        boxA = Bodies.rectangle(600, 200, 75, 75);
        ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });

        World.add(engine.world, [ballA, boxA, ground]);
    };

    p.draw = function () {
        Engine.update(engine, 10);

        p.background('blue');
        p.fill('orange');

        engine.world.bodies.forEach(body => {
            p.beginShape()
            body.vertices.forEach(vertex => {
                p.vertex(vertex.x, vertex.y);
            })
            p.endShape(p.CLOSE);
        });


        if (p.keyIsDown(p.UP_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -0.01 });
        }
        if (p.keyIsDown(p.LEFT_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: -0.01, y: 0 });
        }
        if (p.keyIsDown(p.RIGHT_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: +0.01, y: 0 });
        }
        if (p.keyIsDown(p.DOWN_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: +0.01 });
        }
        if (p.keyIsDown(87)) {
            Matter.Body.applyForce(boxA, boxA.position, { x: 0, y: -0.01 });
        }
        if (p.keyIsDown(65)) {
            Matter.Body.applyForce(boxA, boxA.position, { x: -0.01, y: 0 });
        }
        if (p.keyIsDown(68)) {
            Matter.Body.applyForce(boxA, boxA.position, { x: +0.01, y: 0 });
        }
        if (p.keyIsDown(83)) {
            Matter.Body.applyForce(boxA, boxA.position, { x: 0, y: +0.01 });
        }
    };
};

let myp5 = new p5(sketch);