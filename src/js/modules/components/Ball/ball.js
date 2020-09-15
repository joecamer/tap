import config from "../../../../../config.js"
import Toast from "../toast.js"

export default class Ball extends HTMLElement {

  constructor() {
    super()
    this.main = document.createElement('div')
    this.timer = null
    this._top = -config.size.sm
    this.col = this.getAttribute('col') || 0

    this.init()
  }

  init() {

    this.main.style.width = `${config.size.sm}px`
    this.main.style.height = `${config.size.sm}px`
    this.main.style.background = '#000'
    this.main.style.borderRadius = '50%'
    this.main.style.position = 'fixed'
    this.main.style.top = `-100px`
    this.main.style.left = `${config.size.sm * this.col}px`

    this._init()
    this.appendChild(this.main)
  }

  _init(){
    return true
  }

  connectedCallback() {
    this.timer = setInterval( () => {
      this.top = this._top + 1
      if (this._top >= window.innerHeight){
        this.onOutOfScreen()
      } 
    }, 10)

    this.main.addEventListener('click', () => {
      this.onClickEvent()
    })
  }

  disconnectedCallback() {
    clearInterval(this.timer)
  }

  onClickEvent() {
    clearInterval(this.timer)
    new Toast(this)
    this.disapear()
    setTimeout(() => {
      this.dismiss()
    }, 600)
  }

  set top(v) {
    this._top = v
    this.main.style.top = v + 'px'
  }

  get top() {
    return this._top
  }

  disapear() {
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

  }

  setMainStyle(prop, value) {
    this.main.style[prop] = value
  }

  onOutOfScreen() {
    this.dismiss()
  }

  dismiss(){
    this.parentNode.removeChild(this)
  }

}