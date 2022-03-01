// iife | self invocing function -> closure (variabelen hierin worden bijgehouden in de loop van de applicatie)
export const canvasDrawModule = (() => {
    let context: CanvasRenderingContext2D | null = null
    const FULL_CIRCLE = Math.PI * 2

    const scaleCanvasToParentElement = () => {
        const { clientHeight, clientWidth } = context.canvas.parentElement

        console.dir(context.canvas.parentElement)

        context.canvas.width = clientWidth
        context.canvas.height = clientHeight
    }
    const setup = (element: HTMLCanvasElement) => {
        if (!element){
            throw new Error("Unable to set the context")
        }
        context = element.getContext("2d")

        window.addEventListener('resize', scaleCanvasToParentElement) //als de window qua breedte/hoogte verandert opnieuw de scale function oproepen

        scaleCanvasToParentElement() //first time in setup
    }

    const clearCanvas = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height) //rectangle clearen startend van coord(0, 0) met breedte en lengte van scherm
    }

    const circle = (x: number, y: number, size: number, color: string) => {
        context.fillStyle = color
        context.beginPath()
        context.arc(x, y, size, 0, FULL_CIRCLE) //niet in de functie Math.PI gebruiken want als we deze veel oproepen --> performance niet ideaal
        context.fill()
    }

    return {
      //make public
      setup,
      circle,
      clearCanvas,
    }
  })()