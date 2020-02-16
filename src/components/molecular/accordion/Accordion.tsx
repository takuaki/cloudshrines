import React, {MouseEventHandler, useState} from "react"
import "./Accordion.sass"

interface PropType {
  children: ChildNode,
  props: object
}


const Accordion = ({children, ...props}: PropType) => {
  return (
    <ul {...props} className={"accordion-list list"}>
      {children}
    </ul>
  )
}

const Item = ({children, title, handleClick, ...props}: { children: ChildNode, title: string, handleClick: MouseEventHandler<HTMLElement>, props: object }) => {
  const [state, setState] = useState(false)
  return (
    <li className={"accordion-item list-item"}>
      <p className={"is-size-5 has-text-black has-text-left"} onClick={() => {
        setState(!state)
      }}> {title}</p>
      <div className={`accordion-toggle ${state ? 'show' : 'hide'}`}>
        {children}
      </div>
    </li>
  )
}

Accordion.Item = Item


export default Accordion

