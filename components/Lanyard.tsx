"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function Lanyard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !cardRef.current) return;

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;

    const engine = Engine.create();
    const world = engine.world;

    // Adjust gravity
    engine.gravity.y = 1.2;

    const render = Render.create({
      element: containerRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 600,
        height: 800,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    // Create the card body
    const cardWidth = 280; // Slightly smaller for better fit
    const cardHeight = 400;
    const cardX = 300;
    const cardY = 500;

    const cardBody = Bodies.rectangle(cardX, cardY, cardWidth, cardHeight, {
      chamfer: { radius: 20 },
      density: 0.002,
      frictionAir: 0.02,
      restitution: 0.3,
      render: { opacity: 0 }, // We render the DOM element instead
    });

    // Create the chain/string
    const anchorX = 300;
    const anchorY = -50; // Start above the view
    
    // Create a chain of small bodies for the string
    const segments = 10;
    const segmentHeight = 30;
    const stringBodies: Matter.Body[] = [];
    let prevBody: Matter.Body | null = null;

    for (let i = 0; i < segments; i++) {
      const y = anchorY + i * segmentHeight;
      const body = Bodies.rectangle(anchorX, y, 2, segmentHeight, {
        collisionFilter: { group: -1 },
        frictionAir: 0.05,
        render: { visible: false },
      });
      stringBodies.push(body);

      if (prevBody) {
        const constraint = Constraint.create({
          bodyA: prevBody,
          bodyB: body,
          pointA: { x: 0, y: segmentHeight / 2 },
          pointB: { x: 0, y: -segmentHeight / 2 },
          stiffness: 1,
          length: 0,
          render: { visible: false },
        });
        Composite.add(world, constraint);
      } else {
        // Anchor the first segment
        const constraint = Constraint.create({
          pointA: { x: anchorX, y: anchorY },
          bodyB: body,
          pointB: { x: 0, y: -segmentHeight / 2 },
          stiffness: 1,
          length: 0,
          render: { visible: false },
        });
        Composite.add(world, constraint);
      }
      prevBody = body;
    }

    // Connect the last segment to the card
    if (prevBody) {
      const constraint = Constraint.create({
        bodyA: prevBody,
        bodyB: cardBody,
        pointA: { x: 0, y: segmentHeight / 2 },
        pointB: { x: 0, y: -cardHeight / 2 + 20 }, // Attach near top of card
        stiffness: 1,
        length: 10,
        render: { visible: false },
      });
      Composite.add(world, constraint);
    }

    Composite.add(world, [cardBody, ...stringBodies]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Sync DOM card with Physics body
    const updateLoop = () => {
      if (!cardRef.current) return;
      
      const { position, angle } = cardBody;
      const x = position.x - cardWidth / 2;
      const y = position.y - cardHeight / 2;

      cardRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      
      // Custom rendering for the string
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        ctx.beginPath();
        ctx.moveTo(anchorX, 0); // Start from top center
        
        // Draw through all string segments
        stringBodies.forEach((body) => {
          ctx.lineTo(body.position.x, body.position.y);
        });
        
        // Draw to the connection point on the card
        // Calculate the connection point in world space
        const cardConnectionX = cardBody.position.x + Math.sin(cardBody.angle) * (-cardHeight/2 + 20);
        const cardConnectionY = cardBody.position.y - Math.cos(cardBody.angle) * (-cardHeight/2 + 20);
        
        ctx.lineTo(cardConnectionX, cardConnectionY);
        
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#2D2D2A"; // Dark string color
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      
      requestAnimationFrame(updateLoop);
    };

    const animationId = requestAnimationFrame(updateLoop);
    setIsReady(true);

    return () => {
      cancelAnimationFrame(animationId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-[600px] h-[800px] flex justify-center overflow-hidden pointer-events-none"
    >
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={800} 
        className="absolute inset-0 pointer-events-auto z-10"
      />
      
      <div
        ref={cardRef}
        className="absolute top-0 left-0 w-[280px] h-[400px] bg-white rounded-[20px] shadow-2xl overflow-hidden pointer-events-auto cursor-grab active:cursor-grabbing z-20 will-change-transform"
        style={{ transform: "translate(300px, 500px)" }} // Initial position
      >
        {/* Card Content */}
        <div className="relative w-full h-full flex flex-col">
          {/* Header / Hole */}
          <div className="h-16 bg-gray-100 flex justify-center items-center border-b border-gray-200">
            <div className="w-20 h-3 bg-gray-300 rounded-full opacity-50" />
            <div className="absolute top-4 w-4 h-4 bg-gray-800 rounded-full" /> {/* Hole simulation */}
          </div>
          
          {/* Photo */}
          <div className="flex-1 relative bg-gray-50 p-4 flex flex-col items-center gap-4">
             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mt-4">
               <img 
                 src="/anjay.jpg" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
             </div>
             
             <div className="text-center">
               <h2 className="text-2xl font-bold text-gray-800 font-serif">Fitra Rizky</h2>
               <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Software Developer</p>
             </div>
             
             <div className="mt-auto mb-4 flex gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-xs text-gray-400 font-mono">AVAILABLE FOR HIRE</span>
             </div>
          </div>
          
          {/* Glossy Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
