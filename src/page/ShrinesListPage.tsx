import React, {useEffect, useState} from "react"
import FixedDarkLayout from "../components/atom/layout/FixedDarkLayout"
import src from "../assets/background.jpg"
import "./ShrinesListPage.sass"
import ShrineCardItem from "../components/organism/card/ShrineCardItem"
import {ShrineModel} from "../model"
import {useHistory, useLocation} from "react-router"
import {searchShrines} from "../model/usecase"
import {default as SimpleHeader} from "../components/organism/header/Header"

const ShrinesListPage: React.FC = () => {

  const history = useHistory()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const category = params.get('category')
  const state = params.get('state')
  const city = params.get('city')
  const area = params.get('area')
  const [shrines, setShrines] = useState<Array<ShrineModel>>([])

  useEffect(() => {
    searchShrines({city: city, state: state, category: category, area: area}).then(shrines => {
      setShrines(shrines)
    })
  }, [location.search])

  return (
    <div>
      <FixedDarkLayout background={src}>
        <header>
          <header>
            <SimpleHeader onClick={() => {
              history.push('/')
            }} height={"5vh"}/>
          </header>
        </header>
        <main>
          <div className={"list-page-container"}>
            {shrines.map(shrine => {
              return (
                <ShrineCardItem className={"list-page-item"} key={shrine.id} shrine={shrine} select={(id) => {
                  history.push(`/shrines/${id}`)
                }}/>
              )
            })}
          </div>
        </main>
      </FixedDarkLayout>
    </div>
  )
}

export default ShrinesListPage
