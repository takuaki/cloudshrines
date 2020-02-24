import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import SearchInput from "../components/molecular/search/SearchInput"
import "./TopPage.sass"
import Layout from "../components/atom/layout/FixedDarkLayout"
import {loadShineIds} from "../model/usecase"
import src from "../assets/background.jpg"
import {NameModel} from "../model"

const Title: React.FC<{ className: string }> = ({className, ...props}) => {
  return (
    <p
      className={`title is-size-2-mobile is-size-1 has-text-centered has-text-white has-text-weight-semibold ${className}`}>{props.children}</p>
  )
}

const Caption: React.FC<{ className: string }> = ({className, ...props}) => {
  return (
    <p className={`is-size-6-mobile is-size-5 has-text-left has-text-white ${className}`}>{props.children}</p>
  )
}

const Strong: React.FC<{ level: number }> = ({level = 5, ...props}) => {
  return (
    <span className={`is-size-${level}  has-text-weight-semibold`}>
      {props.children}
    </span>
  )
}

const Top: React.FC = () => {
  const history = useHistory()
  const [list, setList] = useState<Array<{ id: string } & { name: NameModel }>>([])

  useEffect(() => {
    const f = async () => {
      const shrines = await loadShineIds()
      setList(shrines)
    }
    f()
  }, [])


  return (
    <main>
      <Layout background={src}>
        <div className={"top-container"}>
          <Title className={"top-title"}>Cloud Shrine</Title>
          <Caption className={"top-caption"}>
            <Strong level={5}>W</Strong>
            eb shrine is a new platform for visiting Japanese shrine anywhere you want to go.
            Let you feel more comfortable like you are there.
            Enjoy visiting shrines!
          </Caption>
          <SearchInput<{ name: string, id: string }>
            list={list.map(({id, name}) => {
              return {id: id, name: name.kanji}
            })}
            className={'top-search'}
            onClickTable={(key, prop) => {
              history.push(`/shrines?${key}=${prop}`)
            }}
            onClick={(prop) => {
              if (prop)
                history.push(`/shrines/${prop.id}`)
            }}/>
        </div>
      </Layout>
    </main>
  )
}

export default Top