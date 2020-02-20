import React, {MouseEventHandler} from "react"
import {MdChevronLeft} from "react-icons/md"
import {IconContext} from "react-icons"
import "./Header.sass"

interface PropType {
  onClick: MouseEventHandler<HTMLElement>,
  height?: string,
  color?: string,
}

const Header = (props: PropType) => {
  return (
    <div className={"header-layout"} style={{height: props.height || '2rem'}}>
      <IconContext.Provider value={{color: props.color || 'white', className: 'header-back'}}>
        <div onClick={props.onClick}>
          <MdChevronLeft/>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Header