import Ball from "./ball.js"
import config from "../../../../../config.js"

export default class ExtraBall extends Ball{
    constructor(){
        super()

        this.setMainStyle('display', 'flex')
        this.setMainStyle('justifyContent', 'center')
        this.setMainStyle('alignItems', 'center')
        this.setMainStyle('fontSize', '2em')
        this.setMainStyle('color', 'yellow')
        this.setMainStyle('background', config.color.extra)


        this.main.innerText = '*'
    }
}