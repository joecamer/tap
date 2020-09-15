import config from "../../../../config.js"
import Ball from "./Ball/ball.js"

export default class Toast{
    constructor(parent = new Ball(), points = 1){
        const t = document.createElement('span')

        t.innerHTML = `<b>+ ${points * config.level} pts`
        t.style.textShadow = '0 0 5px black'
        t.style.color = '#fff'
        t.style.position = 'fixed'
        t.style.top = parent.main.style.top
        t.style.left = parent.main.style.left

        parent.appendChild(t)

        t.animate([
            {
                top: 20,
                opacity: 1
            },
            {
                top: 0,
                opacity: 0
            }
        ], {
            fill: 'forwards',
            duration: 1000
        })

        setTimeout(() => {
            parent.removeChild(t)
        }, 1000)
    }

}