import React from "react"
import styled from "styled-components"

interface PropType {
  className?: string
  color?: string,
  size?: string,
  width?: string
}

const Title = styled.p<PropType>`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '1.4rem'};
  width: ${(props) => props.width || 'fit-content'};
  font-weight: 600;
  text-align: left;
  padding: .3em 1.5em .2em 1.2em;
  border-bottom: 1px solid yellow;
`

const SimpleTitle: React.FC<PropType> = ({className, color, size, width, ...props}) => {
  return (
    <Title className={className || ''} color={color} size={size} width={width} {...props}>
      {props.children}
    </Title>
  )
}

export default SimpleTitle