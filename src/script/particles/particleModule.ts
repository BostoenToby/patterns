// TODO: revealing module pattern here
// met functie generateParticles (amount)

import { canvasDrawModule } from "../generic/canvasDrawModule"
import { Particle } from "./Particles"
export interface ParticleInterface {
    x: number
    y: number
    dX: number
    dY: number
    size: number
    color: string
    render: any
}

export const particleModule = (function() {
    const colors = ['#1DB9C3',
        '#7027A0',
        '#C32BAD',
        '#F56FAD']

    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const startCursorTracking = () => {
        window.addEventListener('mousemove', (e) => {
            // console.log(e.x, e.y)
            position.x = e.x
            position.y = e.y
        })
    }

    const renderParticles = (particles: ParticleInterface[]) => {
        for (const p of particles) {
            p.render()
        }
    }

    const generateParticle = () => {
        const maxVelocity: number = Math.random() * 10
        const size: number = Math.random() * 10 + 10
        const e = window.event
        // TODO: random kleur uit vastgeleged kleuren pallet

        // TODO: bots particles tegen de rand (eenvoudig)

        // TODO: laat een particle uitfaden (een te kleine particle wordt vervangen door een nieuwe)

        // TODO: laat de particles starten vanuit je cursor


        return new Particle({
            x: position.x, 
            y: position.y, 
            dX:Math.random() * (maxVelocity * 2) - maxVelocity, 
            dY:Math.random() * (maxVelocity * 2) - maxVelocity, 
            size,
            color: colors[Math.round(Math.random() * colors.length)]
        })
    }

    const generateParticles = (amount: number) => {
        const particles: ParticleInterface[] = []
        for (let i = 0; i < amount; i++){
            particles.push(generateParticle())
        }
        return particles
    }

    const animateParticles = (particles: ParticleInterface[]): void => {
        canvasDrawModule.clearCanvas()

        for (const p of particles) {
            p.size = p.size * 0.94
            if (p.size <= 1){
                particles = particles.filter((pCur: ParticleInterface) => pCur !== p)
                particles.push(generateParticle())
            }

            p.x = p.x + p.dX
            p.y = p.y + p.dY

            if (p.x <= p.size/2){ //zodat als de bol tegen de rand zit de richting verandert en niet als het center tegen de rand zit
                p.dX = p.dX * -1
            }

            if (p.y <= p.size/2){
                p.dY = p.dY * -1
            }

            if (p.x >= (canvasDrawModule.getContext().canvas.width - p.size/2)){
                p.dX = p.dX * -1
            }

            if (p.y >= (canvasDrawModule.getContext().canvas.height - p.size/2)){
                p.dY = p.dY * -1
            }

        }

        renderParticles(particles)

        requestAnimationFrame(() => {
            animateParticles(particles)
        }) // als er een frame beschikbaar is opnieuw de animateParticles functie oproepen
    }

    return {
        animateParticles,
        generateParticles,
        startCursorTracking,
    }
})()