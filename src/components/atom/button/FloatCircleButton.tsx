import React, {Children} from "react"
import styled from "styled-components"
import {GiPayMoney} from "react-icons/all"
import {IconContext} from "react-icons"
import "./FloatCircleButton.sass"

interface PropType {
  right: string,
  bottom: string,
  //color: string,
  props?: any
}

const FloatButton = styled.button<PropType>`
  position: absolute;
  //border: .5px solid lightgray;
  border-style: none;
  right: ${({right}) => (right)};
  bottom: ${({bottom}) => (bottom)};
  background-color: rgb(253,119,115);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
`

const FloatCircleButton = ({right, bottom}: PropType) => {
  return (
    <FloatButton right={right} bottom={bottom} className={"button is-rounded is-hovered"}>
      <IconContext.Provider value={{className: 'float-button-icon', color: 'white'}}>
        <GiPayMoney/>
      </IconContext.Provider>
    </FloatButton>
  )
}

export default styled(FloatCircleButton)``
