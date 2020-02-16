import React from "react"
import "./ChargeButtons.sass"

const ChargeButtons: React.FC<{ onClick: (money: number) => void, className?: string }> = ({onClick, className, ...props}) => {
  return (
    <div className={"control"}>
      <div className={`buttons ${className || ''}`} {...props}>
        {[100, 500, 1000].map((money, index) => {
          return (
            <button className={"button"} onClick={event => {
              event.preventDefault()
              onClick(money)
            }} key={index}>
              ¥{money.toLocaleString()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ChargeButtons