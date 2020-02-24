import React from "react"
import "./Access.sass"
import {FiMapPin} from "react-icons/fi"
import {IconContext} from "react-icons"

interface PropType {
  postal: string,
  address: { city: string, state: string, line1: string }
  className?: string
}

const Access = ({postal, className, address}: PropType) => {
  return (
    <div className={className || ''}>
      <div className={"layout-paragraph"}>
        <p className={"paragraph-headline"}>
          Access
          <IconContext.Provider value={{color: 'white', className: 'map-icon'}}>
            <FiMapPin/>
          </IconContext.Provider>
        </p>
        <div className={"paragraph-contents"}>
          <p className={"access-postal"}>
            {`〒${postal}`}
          </p>
          <p className={"access-address"}>
            {address.state + address.city + address.line1}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Access


