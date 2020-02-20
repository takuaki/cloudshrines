import React from "react"
import "./DropDownList.sass"

interface PropType<T> {
  list: Array<T>,
  onClick: (item: T) => void,
  className?: string
}

function DropDownList<T extends { name: string, id: string }>({list, onClick, className}: PropType<T>): any {
  return (
    <div className={"dropdown is-active"}>
      <div className={`dropdown-menu ${className || ''}`}>
        <div className={"dropdown-content"}>
          {list.map((item) => {
            return (
              <li className={"dropdown-item"} key={item.id} onClick={(_) => onClick(item)}>{item.name}</li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DropDownList