import { canvasDrawModule } from "../generic/canvasDrawModule"
export enum DotColor {
    crimson = 'crimson',
    hotpink = 'hotpink',
    honeydew = 'honeydew',
}

export class Dot {
    x: number
    y: number
    size: number
    color: DotColor

    constructor(x: number, y: number, size: number, color: DotColor) {
        // this.x = x
        // this.y = y
        // this.size = size
        // this.color = color
        Object.assign(this, {x, y, size, color}) //hetzelfde als hetgeen hierboven maar compacter
    }

    render() {
        canvasDrawModule.circle(this.x, this.y, this.size, this.color.toString())
    }
}