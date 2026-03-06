"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const NODE_COUNT = 90;
    const MAX_DISTANCE = 190;

    const nodes:any[] = [];
    const pulses:any[] = [];

    const mouse = { x: width/2, y: height/2 };

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random()*width,
        y: Math.random()*height,
        vx: (Math.random()-0.5)*0.6,
        vy: (Math.random()-0.5)*0.6
      });
    }

    window.addEventListener("mousemove",(e)=>{
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function createPulse(x1:number,y1:number,x2:number,y2:number){

      if(Math.random() < 0.01){
        pulses.push({
          x:x1,
          y:y1,
          tx:x2,
          ty:y2,
          progress:0
        });
      }

    }

    function drawConnections(){

      for(let i=0;i<NODE_COUNT;i++){

        for(let j=i+1;j<NODE_COUNT;j++){

          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if(dist < MAX_DISTANCE){

            const opacity = 1 - dist/MAX_DISTANCE;

            ctx.strokeStyle = `rgba(96,165,250,${opacity*0.35})`;
            ctx.lineWidth = 1.3;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x,nodes[i].y);
            ctx.lineTo(nodes[j].x,nodes[j].y);
            ctx.stroke();

            createPulse(nodes[i].x,nodes[i].y,nodes[j].x,nodes[j].y);

          }

        }

      }

    }

    function drawNodes(){

      for(let node of nodes){

        ctx.beginPath();
        ctx.arc(node.x,node.y,3,0,Math.PI*2);
        ctx.fillStyle = "#60a5fa";
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if(node.x<0 || node.x>width) node.vx*=-1;
        if(node.y<0 || node.y>height) node.vy*=-1;

      }

    }

    function drawPulses(){

      for(let i=pulses.length-1;i>=0;i--){

        const p = pulses[i];

        p.progress += 0.02;

        const x = p.x + (p.tx - p.x) * p.progress;
        const y = p.y + (p.ty - p.y) * p.progress;

        ctx.beginPath();
        ctx.arc(x,y,2.5,0,Math.PI*2);
        ctx.fillStyle = "#93c5fd";
        ctx.fill();

        if(p.progress >= 1){
          pulses.splice(i,1);
        }

      }

    }

    function drawMouseInteraction(){

      for(let node of nodes){

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if(dist < 180){

          ctx.strokeStyle = "rgba(147,197,253,0.35)";
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(node.x,node.y);
          ctx.lineTo(mouse.x,mouse.y);
          ctx.stroke();

        }

      }

    }

    function animate(){

      ctx.clearRect(0,0,width,height);

      drawConnections();
      drawNodes();
      drawPulses();
      drawMouseInteraction();

      requestAnimationFrame(animate);

    }

    animate();

    const resize = ()=>{
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return ()=>{
      window.removeEventListener("resize",resize);
    }

  },[]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
    />
  );
}