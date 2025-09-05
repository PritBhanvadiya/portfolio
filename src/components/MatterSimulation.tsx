'use client'

import { useEffect, useRef } from "react";
import Matter from 'matter-js';

const MatterSimulation = () => {

    const matterWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bottom : number | undefined = matterWrapper.current?.getBoundingClientRect().bottom
        const engine = Matter.Engine.create();
        const world = engine.world;

        engine.gravity.y = 1;

        const render = Matter.Render.create({
            engine: engine,
            element: document.getElementById('matter-container') as HTMLElement,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: "#000000"
            },
        })

        const ground = Matter.Bodies.rectangle(0, window.innerHeight - 10, bottom, 1, { isStatic: true });
        const box = Matter.Bodies.circle(10, 20, 20,)
        const box1 = Matter.Bodies.circle(30, 20, 20,)
        const box2 = Matter.Bodies.circle(40, 20, 20,)
        const box3 = Matter.Bodies.circle(50, 20, 20,)

        Matter.World.add(world, [ground, box, box1, box2, box3,]);


        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        Matter.Render.run(render);

        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
        };
    }, [])

    return (
        <div
            ref={matterWrapper}
            id="matter-container"
            style={{
                width: "100%"
            }}
        />
    )
}

export default MatterSimulation;