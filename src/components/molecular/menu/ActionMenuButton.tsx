import React, {MouseEventHandler, useState} from "react"
import {IconContext} from "react-icons"
import {GiShintoShrine, GiPayMoney, GiPencil} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import "./ActionMenuButton.sass"

interface PropType {
  handleClick: (index: number) => void
}

const ActionMenuButton = (props: PropType) => {
  const [state, setState] = useState(false)

  return (
    <div className={"action-buttons"}>
      <div className={"action-buttons-container"}>
        <button className={"button is-hovered is-rounded action-buttons"} onClick={() => {
          setState(state => !state)
        }}>
          <IconContext.Provider value={{className: 'action-button-icon'}}>
            {
              !state ? <GiShintoShrine/> : <MdClose/>
            }
          </IconContext.Provider>
        </button>
        <button onClick={(_) => {
          props.handleClick(0)
        }} className={`button is-hovered is-rounded action-buttons ${state ? 'is-active' : ''}`}>
          <IconContext.Provider value={{className: 'action-button-icon'}}>
            <GiPayMoney/>
          </IconContext.Provider>
        </button>
        <button onClick={(_) => {
          props.handleClick(1)
        }} className={`button is-hovered is-rounded action-buttons ${state ? 'is-active' : ''}`}>
          <IconContext.Provider value={{className: 'action-button-icon'}}>
            <GiPencil/>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}

export default ActionMenuButton