import React from "react"
import styled from "styled-components"
import {Menu, Box} from "react-bulma-components"

export interface PropType {
  items?: Array<string>
}

const MenuLayout = styled(Box)`
  padding: 0.5rem 0.3rem;
  margin: 0 auto;
`

const FloatSimpleMenu = (props: PropType) => {
  return (
    <MenuLayout>
      <Menu>
        <Menu.List title={"menu"}>
          {props.items?.map(item => {
            return <Menu.List.Item>{item}</Menu.List.Item>
          })}
        </Menu.List>
      </Menu>
    </MenuLayout>
  )
}

export default styled(FloatSimpleMenu)``