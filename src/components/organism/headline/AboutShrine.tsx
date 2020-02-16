import React from "react"
import AwesomeTitle from "../../atom/title/AwesomeTitle"
import LikeyButton from "../../atom/button/LikeyButton"
import {BrowserRouter as Router} from "react-router-dom"
import LinkTitle from "../../atom/link/DefaultLink"
import "./AboutShrine.sass"

interface PropType {
  title: string,
  subtitle: string,
  headline: string,
  links: Array<{ title: string, href?: string }>,
  className?: string
}

const AboutShrine: React.FunctionComponent<PropType> = ({title, subtitle, headline, links, className}: PropType) => {

  return (
    <div className={className || ''}>
      <article className={"about-layout"}>
        <div className={"about-header"}>
          <AwesomeTitle title={title} subtitle={subtitle} className={"about-header-title"}/>
          <LikeyButton className={"about-header-button"}/>
        </div>
        <div className={"about-content"}>
          <p className={"about-content-headline"}>
            {headline}
          </p>
          {/*<div className={"about-content-link"}>
            <Router>
              {links.map(({title, href},index) => {
                return (
                  <LinkTitle title={title} className={"about-content-item"} href={href || ''} key={index}/>
                )
              })}
            </Router>
          </div>*/}
        </div>
      </article>
    </div>
  )
}

export default AboutShrine