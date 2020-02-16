import React from "react"
import styled from "styled-components"


interface PropType {
  title: string,
  subtitle: string,
  className?: string,
}

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  text-align: left;
`
const SubTitle = styled.p`
  font-size: .8rem;
  color: white;
`
const Layout = styled.div<{ theme: 'yellow' | 'blue' | 'red' }>`
  background-color: rgba(228,220,0,0.53);
  padding: .3em 1.5em .2em 1.0em;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .34;
    z-index: -1;
  }
`

const AwesomeTitle = (props: PropType) => {
  return (
    <Layout className={props.className}>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
    </Layout>
  )
}

export default styled(AwesomeTitle)``
