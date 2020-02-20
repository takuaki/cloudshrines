import React from "react"
import "./Access.sass"
import {FiMapPin} from "react-icons/fi"
import {IconContext} from "react-icons"

interface PropType {
  postal: string,
  address: string
  className?: string
}

const Access = (props: PropType) => {
  return (
    <div className={props.className || ''}>
      <div className={"layout-paragraph"}>
        <p className={"paragraph-headline"}>
          Access
          <IconContext.Provider value={{color: 'white', className: 'map-icon'}}>
            <FiMapPin/>
          </IconContext.Provider>
        </p>
        <div className={"paragraph-contents"}>
          <p className={"access-postal"}>
            {`〒${props.postal}`}
          </p>
          <p className={"access-address"}>
            {props.address}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Access


