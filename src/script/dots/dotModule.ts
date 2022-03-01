import { canvasDrawModule } from "../generic/canvasDrawModule"

// TODO: make revealing module pattern
export const dotModule = (function() {
    const drawDots = (gridSize: number): void => {
        canvasDrawModule.clearCanvas() //ready for new drawing

        const gutters = {
            x: window.innerWidth / (gridSize + 1),
            y: window.innerHeight / (gridSize + 1),
        }

        for (let i = 0; i<gridSize; i++){
            for (let j = 0; j<gridSize; j++){
                console.log(i, j)
                canvasDrawModule.circle(i * gutters.x, j * gutters.y, 20, 'black')
            }
        }
    }

    const renderPattern = (interval = 1000, maxAmount = 300) => {
        //TODO: render rijen en kolommen iedere seconde
        let amountOfRows = 1
        const timer = setInterval(() => {
            //amountOfRows * amountOfRows --> in een vierkant van 2 op 2 passen 4 dots bijvoorbeeld
            if (amountOfRows * amountOfRows >= maxAmount){
                //clearInterval(timer)
                amountOfRows = 1
            } //als er teveel dots zijn

            drawDots(amountOfRows)
            amountOfRows += 1

        }, interval)
    }

    return {
        renderPattern,
    }
})() 
//vanaf deze functie ingelezen wordt --> direct uitgevoerd