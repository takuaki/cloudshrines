import React, {ReactNode} from "react"
import styled from "styled-components"

const Layout = styled.div<{ color?: string, children?: ReactNode }>`
  position: relative;
  &::before{
    position: absolute;
    content: '';
    top: 0 ;
    left: 0 ;
    width: 100% ;
    height: 100% ;
    z-index: 10 ;
    background: linear-gradient(rgba(0, 0, 0, 0),${(props) => props.color || 'white'}) ;
  }
`

const Curtain: React.FC<{ color?: string }> = (
  {
    children
    , color = 'white'
  }) => {
  return (
    <Layout color={color}>
      {children}
    </Layout>
  )
}

export default Curtain