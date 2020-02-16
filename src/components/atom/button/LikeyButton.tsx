import styled from "styled-components"
import React, {useState} from "react"
import {IconContext} from "react-icons"
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io"
import "./LikeyButton.sass"

interface PropType {
  colors?: { active: string, inactive: string }
  liked?: Boolean,
  className?: string,
  size?: string
}

const LikeyButton =
  ({
     colors = {active: 'red', inactive: 'white'},
     liked = false, className = '',
     size = '20'
   }: PropType) => {
    const [like, setLike] = useState(liked)
    return (
      <span onClick={() => setLike(like => !like)} className={`${className}`}>
      <IconContext.Provider value={{
        className: 'likey-icon',
        color: like ? colors.active : colors.inactive,
        size: size
      }}>
        {like ? <IoMdHeart/> : <IoMdHeartEmpty/>}
      </IconContext.Provider>
    </span>
    )
  }

export default styled(LikeyButton)``