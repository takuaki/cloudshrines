import React from "react"
import styled from "styled-components"
import "./Pager.sass"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import {TransitionGroup, CSSTransition} from "react-transition-group"

interface PropType {
  items: Array<{ src: string }>,
  className?: string
}

interface StateType {
  items: Array<{ src: string }>
}

class Pager extends React.Component<PropType, StateType> {

  private index: number = 0
  private readonly n: number = 3 //if this value changed , change .sass too.
  private readonly N: number = this.n + 2
  private readonly items: Array<{ src: string }>
  private readonly L: number

  handlePrevPage(_: any): void {
    const i = (this.index - 1) % this.L
    const prev = i === 0 ? this.items.slice(-1) : this.items.slice(i - 1, i)
    this.setState({
      items: prev.concat(this.state.items.slice(0, -1))
    })
    this.index = this.index - 1
  }

  handleNextPage(_: any): void {
    const i = (this.index + this.N - 1) % this.L
    const next = i === -1 ? this.items.slice(-1) : this.items.slice(i, i + 1)
    this.setState({
        items: this.state.items.slice(1).concat(next)
      }
    )
    this.index = this.index + 1
  }

  constructor({items, className}: PropType) {
    super({items, className})
    if (items.length < this.n)
      throw new Error(`item should be equal or larger than ${this.n}`)
    else if (items.length < 3)
      throw new Error(`item should be equal or more than 3`)
    this.items = items
    this.L = this.items.length
    this.handleNextPage = this.handleNextPage.bind(this)
    this.handlePrevPage = this.handlePrevPage.bind(this)
    this.state = {
      items: items.slice(-1).concat(
        items.length > this.N - 1 ? items.slice(0, this.N - 1) :
          items.length === this.N - 1 ? items :
            items.length === this.N - 2 ? items.concat(items.slice(0, 1)) :
              [/*never reach*/]
      )
    }
  }

  render() {
    return (
      <div className={`layout-pager ${this.props.className}`}>
        <FaChevronLeft className={"pager-control-left"} onClick={this.handlePrevPage}/>
        <div className={"pager-component"}>
          <TransitionGroup className={"pager-list"}>
            {this.state.items.map(({src}, index) => (
              <CSSTransition timeout={500} classNames={"item"} key={index}>
                <div className={"pager-item"}>
                  <figure className={"image is-4by3"}>
                    <img src={src} alt={""} className={"pager-item-img"}/>
                  </figure>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <FaChevronRight className={"pager-control-right"} onClick={this.handleNextPage}/>
      </div>
    )
  }
}

export default Pager