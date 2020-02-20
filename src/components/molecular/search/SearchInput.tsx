import React, {ChangeEvent, ChangeEventHandler, TouchEventHandler, useState, FunctionComponent, useEffect} from "react"
import {type} from "os"

interface PropType<T> {
  className?: string,
  title?: string,
  onClick: (value?: T) => void,
  list: Array<T>
}

const SearchInput = <T extends { name: string }>({className, title, onClick, list = []}: PropType<T>) => {

  const [value, setValue] = useState<string | undefined>(undefined)
  const [options, setOptions] = useState<Array<T>>([])

  useEffect(() => {
    setOptions(list)
  }, [list])

  return (
    <div className={`field has-addons ${className || ''}`}>
      <div className={"control"}>
        <input className={"input"} type={"text"} placeholder={"伊勢神宮"} value={value || ''}
               aria-controls={"dropdown-menu"}
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
        <datalist id={"datalist"}>
          {options?.map((option) => {
            return <option key={option.name} onClick={() => {
              setValue(option.name)
            }}>{option.name}</option>
          })}
        </datalist>
        })}
      </div>
      <div className={"control"}>
        <a className={"button is-info"} onClick={() => {
          if (options.length === 1)
            onClick(options.shift())
        }}>{title ?? 'Search'}</a>
      </div>
    </div>
  )
}

export default SearchInput

