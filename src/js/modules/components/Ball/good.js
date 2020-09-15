import Ball from "./ball.js"
import config from "../../../../../config.js"

export default class GoodBall extends Ball {
    constructor(){
        super()
        this.setMainStyle('background', config.color.good)
    }

    onOutOfScreen(){
        alert("Game Over !")
        this.dismiss()
    }
}