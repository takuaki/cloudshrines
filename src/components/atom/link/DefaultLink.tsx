import {IconContext} from "react-icons"
import {MdChevronRight} from "react-icons/md"
import React from "react"
import {Link} from "react-router-dom"
import "./DefaultLink.sass"

interface PropType {
  title: string,
  href: string,
  color?: string,
  className?: string
}

const LinkTitle = ({title, color = 'white', href, className = ''}: PropType) => {
  return (
    <p className={`link-layout ${className}`}>
      <IconContext.Provider value={{color: color, className: 'link-icon'}}>
        <MdChevronRight/>
      </IconContext.Provider>
      <Link className={"link-title"} to={href}>
        {title}
      </Link>
    </p>
  )
}

export default LinkTitle