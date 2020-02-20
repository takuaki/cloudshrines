import React from "react"
import "./Photos.sass"
import {FiCamera} from "react-icons/fi"
import {IconContext} from "react-icons"
import Pager from "../../molecular/carousel/Pager"

interface PropType {
  photosUrl: Array<string>,
  className?: string
}

const Photos:React.FC<PropType> = ({className, photosUrl}: PropType) => {
  return (
    <div className={className || ''}>
      <div className={"layout-paragraph"}>
        <p className={"paragraph-headline"}>
          Gallery
          <IconContext.Provider value={{color: 'white', className: 'camera-icon'}}>
            <FiCamera/>
          </IconContext.Provider>
        </p>
        <Pager className={"photos-pager"} items={photosUrl}/>
      </div>
    </div>
  )
}

export default Photos