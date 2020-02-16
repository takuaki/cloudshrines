import React, {useEffect, useState} from "react"
import {IconContext} from "react-icons"
import {MdClose} from "react-icons/md"

interface PropType {
  defaultValue: number,
  className?: string,
  minValue?: number,
  maxValue?: number,
  errorHandler?: (err?: string) => void
}

const ChargeInput: React.FC<PropType>
  = ({
       className = '', minValue = 100, maxValue = 5000, defaultValue = 500
       , errorHandler = (_) => {
  }
     }) => {

  const [amount, setAmount] = useState(defaultValue)
  useEffect(() => {
    setAmount(defaultValue)
  }, [defaultValue])

  const showClose = () => {
    return amount !== 0
  }

  return (
    <div className={`field has-addons ${className}`}>
      <p className={"control"}>
        <a className={"button is-static"}>¥</a>
      </p>
      <p className={"control is-expanded has-icons-right"}>
        <input className={"input"} value={amount.toLocaleString()}
               type={"text"}
               onChange={({target}) => {
                 const amount = Number(target.value.replace(',', ''))
                 if (amount < minValue || maxValue < amount) {
                   setAmount(amount)
                   errorHandler(`入力は¥${minValue.toLocaleString()}以上、¥${maxValue.toLocaleString()}以下です`)
                 } else if (Number.isNaN(amount)) {
                   errorHandler('不正な値が入力されました。数値のみ入力してください。')
                 } else {
                   errorHandler(undefined)
                   setAmount(amount)
                 }
               }}/>
        {/*<span className={"icon is-small is-right"} onClick={() => {
          setAmount(minValue)
        }}>
            <IconContext.Provider value={{
              className: '',
              color: 'gray',
            }}>
              <MdClose/>
            </IconContext.Provider>
        </span>*/}
      </p>
    </div>
  )
}

export default ChargeInput