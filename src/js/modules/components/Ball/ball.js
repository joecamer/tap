import config from "../../../../../config.js"

export default class Ball extends HTMLElement {

    constructor(){
        super()
        this.main = document.createElement('div')
        this.timer = null
        this._top = 0

        this.init()
    }

    init(){

        this.main.style.width = `${config.size.sm}px`
        this.main.style.height = `${config.size.sm}px`
        this.main.style.background = '#000'
        this.main.style.borderRadius = '50%'
        this.main.style.position = 'fixed'
        this.main.style.top = this._top

        this.appendChild(this.main)
    }

    connectedCallback(){
        this.timer = setInterval(_ => {
            this.top = this._top + 1
            console.log(this.top)
        }, 10)

        this.main.addEventListener('click', () => {
            this.onClickEvent()
        })
    }

    disconnectedCallback(){
        clearInterval(this.timer)
    }

    onClickEvent(){
    clearInterval(this.timer)
        
        this.main.animate([
            {
                transform: 'scale(1)',
                opacity: 1
            },
            {
                transform: 'scale(3)',
                opacity: 0
            }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        setTimeout(() => {
            this.parentNode.removeChild(this)
        }, 600)
    }

    set top (v){
        this._top = v
        this.main.style.top = v + 'px'
    }

    get top (){
        return this._top
    }

}