import React, {useState,useEffect} from "react"
import "./Pager.sass"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import {TransitionGroup} from "react-transition-group"
import {CSSTransition} from "react-transition-group"

interface PropType {
  items: Array<string>,
  className?: string
}

const Pager: React.FC<PropType> = ({className, items}: PropType) => {

  const n: number = 3 //if this value changed , change .sass too.
  const N: number = n + 2
  const L: number = items.length

  if (items.length < n)
    throw new Error(`item should be equal or larger than ${n}`)
  else if (items.length < 3)
    throw new Error(`item should be equal or more than 3`)

  let [index, setIndex] = useState(0)
  let [itemList, setItems] = useState(() =>
    items.slice(-1).concat(
      items.length > N - 1 ? items.slice(0, N - 1) :
        items.length === N - 1 ? items :
          items.length === N - 2 ? items.concat(items.slice(0, 1)) : [/*never used*/]))

  useEffect(()=>{
    setItems(items)
  },[items])

  const handlePrevPage = (_: any) => {
    const i = (index - 1) % L
    const prev = i === 0 ? itemList.slice(-1) : itemList.slice(i - 1, i)
    setItems(prev.concat(itemList.slice(0, -1)))
    setIndex(prev => prev - 1)
  }

  const handleNextPage = (_: any) => {
    const i = (index + N) % L
    const next = i === -1 ? itemList.slice(-1) : itemList.slice(i, i + 1)
    setItems(prev => prev.slice(1).concat(next))
    setIndex(prev => prev + 1)
  }

  return (
    <div className={`layout-pager ${className}`}>
      <FaChevronLeft className={"pager-control-left"} onClick={handlePrevPage}/>
      <div className={"pager-component"}>
        <TransitionGroup className={"pager-list"}>
          {itemList.map((url, index) => (
            <CSSTransition timeout={500} classNames={"item"} key={index}>
              <div className={"pager-item"}>
                <figure className={"image is-4by3"}>
                  <img src={url} alt={""} className={"pager-item-img"}/>
                </figure>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <FaChevronRight className={"pager-control-right"} onClick={handleNextPage}/>
    </div>
  )
}

export default Pager