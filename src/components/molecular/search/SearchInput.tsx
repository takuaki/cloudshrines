import React, {useState, useEffect} from "react"
import {OnAtLeastTablet, OnMobile} from "../../atom/responsive"
import ShrineSelector from "../select/ShrineSelector"


interface PropType<T> {
  className?: string,
  title?: string,
  onClick: (value?: T) => void,
  onClickTable: (key: 'category' | 'area', value?: string) => void, //TODO
  list: Array<T>
}

const SearchInput = <T extends { name: string }>({className, title, onClick, onClickTable, list = []}: PropType<T>) => {

  const [value, setValue] = useState<string | undefined>(undefined)
  const [options, setOptions] = useState<Array<T>>([])


  useEffect(() => {
    setOptions(list)
  }, [list])

  return (
    <div className={className || ''}>
      <div className={`field has-addons ${className || ''}`}>
        <div className={"control"}>
          <input className={"input"} type={"text"} placeholder={"伊勢神宮"} value={value || ''}
                 aria-controls={"dropdown-menu"}
                 onBlur={() => {

                 }}
                 onChange={
                   (event) => {
                     event.preventDefault()
                     const name = event.target.value
                     setValue(name)
                     const options = list.filter(option => {
                       return option.name.includes(name)
                     })
                     setOptions(options)
                   }
                 }
                 list={"datalist"}/>
          {list &&
          <div>
            <datalist id={"datalist"}>
              {options?.map((option) => {
                return <option key={option.name} onClick={() => {
                  setValue(option.name)
                }}>{option.name}</option>
              })}
            </datalist>
          </div>
          }
        </div>
        <div className={"control"}>
          <a className={"button is-info"} onClick={() => {
            if (options.length === 1)
              onClick(options.shift())
          }}>{title ?? 'Search'}</a>
        </div>
      </div>
      <OnAtLeastTablet>
        <ShrineSelector<string> list={{
          'area': ['北海道', '東北', '北関東', '首都圏', '甲信越', '北陸', '東海', '近畿', '山陽・山陰', '四国', '九州', '沖縄'],
          'category': ['神明', '八幡宮', '金比羅', '天満宮', '稲荷', '白山', '厳島', '氷川', '住吉', '日吉', '熊野', '津島', '春日', 'その他']
        }} callback={(key, name) => {
          onClickTable(key, name)
        }}
                                className={""}/>
      </OnAtLeastTablet>
    </div>
  )
}

export default SearchInput

