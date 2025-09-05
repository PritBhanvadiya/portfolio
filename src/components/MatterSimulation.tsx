'use client'

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/skills-icons/html.svg" },
  { name: "CSS", icon: "/skills-icons/css-3-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/skills-icons/javascript-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/skills-icons/typescript-official-svgrepo-com.svg" },
  { name: "NextJS", icon: "/skills-icons/nextjs-fill-svgrepo-com.svg" },
  { name: "ReactJS", icon: "/skills-icons/reactjs-svgrepo-com.svg" },
  { name: "Redux", icon: "/skills-icons/redux-svgrepo-com.svg" },
  { name: "Context API"},
  { name: "Tailwind CSS", icon: "/skills-icons/tailwind-css-svgrepo-com.svg" },
  { name: "Bootstrap", icon: "/skills-icons/bootstrap-svgrepo-com.svg" },
  { name: "Framer Motion", icon: "/skills-icons/framer-motion-seeklogo.svg" },
  { name: "GSAP", icon: "/skills-icons/gsap-png.png" },
  { name: "Axios", icon: "/skills-icons/axios.svg" },
  { name: "Fetch API"},
  { name: "Vite", icon: "/skills-icons/vite-svgrepo-com.svg" },
  { name: "Webpack", icon: "/skills-icons/webpack-svgrepo-com.svg" },
  { name: "GitHub", icon: "/skills-icons/github-color-svgrepo-com.svg" },
  { name: "GitLab", icon: "/skills-icons/gitlab-svgrepo-com.svg" },
  { name: "Netlify", icon: "/skills-icons/netlify-svgrepo-com.svg" },
  { name: "Vercel", icon: "/skills-icons/vercel-icon-svgrepo-com.svg" },
  { name: "SEO", icon: "/skills-icons/user-seo-and-web-svgrepo-com.svg" },
  { name: "AI", icon: "/skills-icons/icons8-ai-50.svg" },
  { name: "Shopify", icon: "/skills-icons/shopify-color-svgrepo-com.svg" },
  { name: "Preact", icon: "/skills-icons/preact-svgrepo-com.svg" },
  { name: "SolidJS", icon: "/skills-icons/Solid.js.svg" },
  { name: "SCSS", icon: "/skills-icons/scss2-svgrepo-com.svg" },
  { name: "HubSpot", icon: "/skills-icons/hubspot-svgrepo-com.svg" },
]

const MatterSimulation = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [bodies, setBodies] = useState<any[]>([]);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    engine.gravity.y = 1;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    const render = Matter.Render.create({
      engine,
      element: sceneRef.current as HTMLElement,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    render.canvas.style.background = "transparent";
    render.canvas.style.opacity = "0"; // hidden but interactive

    // Walls (top, bottom, left, right)
    const wallThickness = 100;
    const walls = [
      Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // bottom
      Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }), // top
      Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // left
      Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // right
    ];

    // Skill bodies (random spawn positions)
    const skillBodies = skills.map((skill) =>
      Matter.Bodies.rectangle(
        Math.random() * (width - 200) + 100, // random X within safe range
        Math.random() * (height / 2), // random Y upper half of screen
        150,
        50,
        {
          chamfer: { radius: 25 },
          label: skill.name,
          restitution: 0.6, // bounce
          friction: 0.3,
        }
      )
    );

    Matter.World.add(world, [...walls, ...skillBodies]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Mouse drag
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Sync bodies with React
    const updateBodies = () => {
      setBodies(
        skillBodies.map((body, i) => ({
          id: i,
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
          skill: skills[i],
        }))
      );
      requestAnimationFrame(updateBodies);
    };
    updateBodies();

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div ref={sceneRef} className="relative w-full h-screen overflow-hidden">
      {bodies.map(({ id, x, y, angle, skill }) => (
        <div
          key={id}
          className="px-3 py-2 min-w-[120px] rounded-full border-2 border-white flex items-center justify-center gap-1.5 absolute bg-black/40 backdrop-blur-sm"
          style={{
            left: x,
            top: y,
            transform: `translate(-50%, -50%) rotate(${angle}rad)`,
            pointerEvents: "none", // physics handles dragging
          }}
        >
          {skill.icon && (
            <Image src={skill.icon} alt={skill.name} width={24} height={24} />
          )}
          <p className="text-lg text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MatterSimulation;
