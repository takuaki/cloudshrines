import React, {MouseEventHandler} from "react"
import styled from "styled-components"
import {Button} from "react-bulma-components"

const FloatHamburgerLine = styled.span`
  display: block;
  background-color: gray;
  height: 2px;
  width: 30px;
`

const FloatHamburgerLayout = styled(Button)`
  > ${FloatHamburgerLine}:not(:last-child){
    margin-bottom: 8px;
  }
  padding: 6px 4px;
  flex-direction: column;
`

interface PropType {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const FloatHamburger = (props: PropType) => {
  return (
    <FloatHamburgerLayout onClick={props.onClick}>
      <FloatHamburgerLine/>
      <FloatHamburgerLine/>
      <FloatHamburgerLine/>
    </FloatHamburgerLayout>
  )
}

export default styled(FloatHamburger)``