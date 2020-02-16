import React from "react"
import FloatHamburger from "../../atom/button/FloatHamburger"
import {Dropdown, Button} from "react-bulma-components"
import styled from "styled-components"

const HamburgerLine = styled.span`
  display: block;
  background-color: gray;
  height: 2px;
  width: 30px;
`

const HamburgerButton = styled(Button)`
  display: flex;
  padding: 6px 4px;
  flex-direction: column;
  justify-content: center;
  ${HamburgerLine}{
    flex-basis: 1;
  }
`

const FloatMenuLayout = styled(Dropdown)`
  //position: absolute;
  //display: flex;
  //flex-direction: column;
  //justify-contents: flex-end;

`

class FloatMenu extends React.Component<any, any> {

  handleClick() {

  }

  render() {
    return (
      <div className={"drowdown is-up"}>
        <div className={"dropdown-trigger"}>
          <FloatHamburger aria-haspopup={"true"} aria-controls={"dropdown-menu"}/>
        </div>
        <div className={"dropdown-menu"} id={"dropdown-menu"} role={"menu"}>
          <div className={"dropdown-content"}>
            <a className={"dropdown-item"} href={"#"}>
              DropDown item
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default styled(FloatMenu)`
`