import React, {TouchEventHandler, useState} from "react"
import "./ShrineSelector.sass"

interface PropType<T> {
  className?: string,
  list: { [key in 'area' | 'category']: Array<T> },
  callback: (key: 'area' | 'category', name: T) => void
}

const ShrineSelector = <T extends {}>(props: PropType<T>) => {

  const [selected, select] = useState<'area' | 'category'>('area')

  return (
    <div className={`${props.className} shrine-selector`}>
      <div className={"shrine-selector-tabs tabs is-boxed is-left"}>
        <ul>
          <li className={`tab ${selected === 'area' ? 'is-active' : ''}`}>
            <a href={"#"} onClick={() => {
              select('area')
            }}>地域</a>
          </li>
          <li className={`tab ${selected === 'category' ? 'is-active' : ''}`}>
            <a href={"#"} onClick={() => {
              select('category')
            }}>分類</a>
          </li>
        </ul>
      </div>
      <div className={"shrine-selector-contents"}>
        <div className={"columns is-multiline"}>
          {
            props.list[selected].map(item => {
              return (
                <div className={"column is-one-third"} onClick={() => {
                  props.callback(selected, item)
                }}>
                  <h3 className={"has-text-centered"}>
                    {item}
                  </h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


export default ShrineSelector