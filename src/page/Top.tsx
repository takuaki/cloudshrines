import React from "react"
import SearchInput from "../components/molecular/search/SearchInput"
import "./Top.sass"
import Layout from "../components/atom/layout/FixedDarkLayout"
import src from "../assets/background.jpg"

const Title: React.FC<{ className: string }> = ({className, ...props}) => {
  return (
    <p
      className={`title is-size-2 has-text-centered has-text-white has-text-weight-semibold${className}`}>{props.children}</p>
  )
}

const Caption: React.FC<{ className: string }> = ({className, ...props}) => {
  return (
    <p className={`has-text-left has-text-white is-size-6 ${className}`}>{props.children}</p>
  )
}

const Strong: React.FC<{ level: number }> = ({level = 5, ...props}) => {
  return (
    <span className={`is-size-${level}  has-text-weight-semibold`}>
      {props.children}
    </span>
  )
}


const Top = () => {
  return (
    <main>
      <Layout background={src}>
        <div className={"top-container"}>
          <Title className={"top-title"}>Cloud Shrine</Title>
          <Caption className={"top-caption"}>
            <Strong level={5}>W</Strong>
            eb shrine is a new platform for visiting Japanese shrine anywhere you want to go.
            Let you feel more comfortable like you are there.<br/>
            Enjoy visiting shrines!
          </Caption>
          <SearchInput className={'top-search'}/>
        </div>
      </Layout>
    </main>
  )
}

export default Top