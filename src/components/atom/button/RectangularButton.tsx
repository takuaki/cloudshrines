import React, {MouseEventHandler} from "react"
import {IconBaseProps, IconContext, IconType} from "react-icons"
import "./RectangularButton.sass"

interface PropType {
  title: string,
  size?: string
  icon?: any,
  type?: "reset" | "button" | 'submit',
  className?: string,
  theme?: 'light' | 'dark',
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const RectangularButton: React.FC<PropType> =
  ({
     title, size = "1.2rem", icon, className, theme = 'light',
     disabled = false, type = "button",
     onClick = (e) => {
       e.preventDefault()
       /*nothing to do default*/
     }
   }) => {
    return (
      <button className={`button ${"layout-button-" + theme} ${className || ''}`}
              onClick={onClick} disabled={disabled} type={type}
              style={{fontSize: size}}>
        {icon && (
          <IconContext.Provider value={{className: 'button-icon', size: size}}>
            {icon}
          </IconContext.Provider>)
        }
        <span>
          {title}
        </span>
      </button>
    )
  }

export default RectangularButton