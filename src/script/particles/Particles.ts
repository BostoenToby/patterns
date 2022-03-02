import { canvasDrawModule } from "../generic/canvasDrawModule"

export function Particle({ x, y, dX, dY, size, color }) {
    // this = eigenaar van de code (instantie van deze constructor)
    Object.assign(this, { x, y, dX, dY, size, color })

    Particle.prototype.render = function(){
        canvasDrawModule.circle(this.x, this.y, this.size, this.color)
    }
}