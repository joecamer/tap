import Ball from "./ball.js"
import config from "../../../../../config.js"

export default class BadBall extends Ball {
    constructor(){
        super()
        this.main.style.background = config.color.bad
    }

    onClickEvent(){
        this.disapear()
        alert("Game over !")
        clearInterval(this.timer)
        this.dismiss()
    }

}