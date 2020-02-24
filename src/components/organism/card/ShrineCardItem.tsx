import React from "react"

import {Columns, Tag, Content} from "react-bulma-components"
import "./ShrineCardItem.sass"
import Curtain from "../../atom/curtain/Curtain"
import {ShrineModel} from "../../../model"

interface PropType {
  className?: string,
  shrine: ShrineModel,
  select: (id: string) => void
}

const ShrineCardContent: React.FC<{ shrine: ShrineModel }> = ({shrine}) => {

  const {city, state, line1} = shrine.access.address
  const address = state + city + line1

  return (
    <div className={"shrine-card-content"}>
      <div className={"shrine-card-content__headings"}>
        <p className={"is-size-6-mobile is-size-4"}>{shrine.name.kanji}</p>
        <p className={"is-size-7-mobile is-size-6"}>{shrine.name.alpha}</p>
        <p className={"is-size-7-mobile is-size-6"}>{address}</p>
      </div>
      <hr className={"shrine-card-content__border"}/>
      <div className={"shrine-card-content__tags"}>
        <Tag.Group textAlignment={"centered"} textSize={6} className={"shrine-card-content__tags"}>
          <Tag className={"shrine-card-content__tags__tag"}>お賽銭</Tag>
          <Tag className={"shrine-card-content__tags__tag"} color={"info"}>お土産</Tag>
          <Tag className={"shrine-card-content__tags__tag"} color={"primary"}>おみくじ</Tag>
        </Tag.Group>
      </div>
      <div className={"shrine-card-content__accordion"} onClick={() => {
      }}>
        <hr className={"shrine-card-content__border"}/>
        <Curtain color={"#fafafa"}>
          <h3 className={"shrine-card-content__accordion__content"}>{shrine.headline}</h3>
        </Curtain>
        {/*<IconContext.Provider value={{className: 'shrine-card-content__accordion__icon'}}>
          <IoIosArrowDown/>
        </IconContext.Provider>*/}
      </div>
    </div>
  )
}

const ShrineCardItem: React.FC<PropType> = ({shrine, className, select}) => {
  console.log(shrine.preview.pop())
  return (
    <div className={className}>
      <Columns breakpoint={"mobile"} className={"shrine-card"} onClick={(e) => {
        e.preventDefault()
        select(shrine.id)
      }}>
        <Columns.Column size={3} className={"shrine-card-image"} paddingless={true}>
          <figure className={"image is-square"}>
            <img src={shrine.preview.pop()} alt={"Shrine Contents"}/>
          </figure>
        </Columns.Column>
        <Columns.Column paddingless={true}>
          <ShrineCardContent shrine={shrine}/>
        </Columns.Column>
      </Columns>
    </div>
  )
}

export default ShrineCardItem
