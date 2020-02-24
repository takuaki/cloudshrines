import React, {MouseEventHandler, useState} from "react"
import "./Accordion.sass"


const Accordion = ({...props}) => {
  return (
    <ul {...props} className={"accordion-list list"}>
      {props.children}
    </ul>
  )
}

const Item: React.FC<{ handleClick?: MouseEventHandler<HTMLElement>, title: string }> =
  ({handleClick, title, ...props}) => {
    const [state, setState] = useState(false)
    return (
      <li className={"accordion-item list-item"}>
        <p className={"is-size-5 has-text-black has-text-left"} onClick={() => {
          setState(!state)
        }}> {title}</p>
        <div className={`accordion-toggle ${state ? 'show' : 'hide'}`}>
          {props.children}
        </div>
      </li>
    )
  }

Accordion.Item = Item

export default Accordion

