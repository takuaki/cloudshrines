import styled from "styled-components"

const Layout = styled.div<{ background: string }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background:  url(${props => props.background}) no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  &::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: .78;
    z-index: -10;
  }
`

export default Layout