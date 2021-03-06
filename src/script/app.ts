import { canvasDrawModule } from "./generic/canvasDrawModule"
import { Dot, DotColor } from "./dots/Dot"
import { dotModule } from "./dots/dotModule";
import { Particle } from "./particles/Particles";
import { particleModule } from "./particles/particleModule";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas: HTMLCanvasElement = document.querySelector('.js-canvas')
        // Tekenen
        canvasDrawModule.setup(canvas);
    
        // canvasDrawModule.circle(900, 800, 100, "hotpink")
        // canvasDrawModule.circle(90, 140, 150, "cyan")
        // canvasDrawModule.circle(0, 10, 40, "lightgreen")
        // const d1 = new Dot(140, 30, 10, DotColor.honeydew)
        // const d2 = new Dot(500, 900, 50, DotColor.hotpink)
        // const d3 = new Dot(900, 100, 10, DotColor.crimson)
        // d1.render()
        // d2.render()
        // d3.render()
    
        // d1.x += 100
        // d1.render()
        // setInterval(() => {
        //     canvasDrawModule.clearCanvas()
    
        //     d1.x += 1
        //     d1.y += 1
        //     d1.color = DotColor.crimson
        //     d1.render()
        // }, 16)
    
        // dotModule.renderPattern(16, 10000)
    
        // module voor Particles
        // Object per particle (constructor)
        const particles = particleModule.generateParticles(50)
        particleModule.startCursorTracking()
        particleModule.animateParticles(particles)
    })
})()