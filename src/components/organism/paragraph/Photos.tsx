import React from "react"
import "./Photos.sass"
import {FiCamera} from "react-icons/fi"
import {IconContext} from "react-icons"
import Pager from "../../molecular/carousel/Pager"

interface PropType {
  photosUrl: Array<string>,
  className?: string
}

const Photos = ({className, photosUrl}: PropType) => {
  return (
    <div className={className || ''}>
      <div className={"layout-paragraph"}>
        <p className={"paragraph-heading"}>
          Gallery
          <IconContext.Provider value={{color: 'white', className: 'camera-icon'}}>
            <FiCamera/>
          </IconContext.Provider>
        </p>
        <Pager className={"photos-pager"} items={photosUrl.map(url => ({
          'src': url
        }))}>
        </Pager>
      </div>
    </div>
  )
}

export default Photos