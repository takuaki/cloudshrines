import React from "react"
import {useHistory} from "react-router-dom"
import {IconContext} from "react-icons"
import {MdCheckCircle} from "react-icons/md"
import "./ThanksPage.sass"

const ThanksPage: React.FC = () => {
  const history = useHistory()
  return (
    <main className={"thanks-layout"}>
      <IconContext.Provider value={{
        className: 'thanks-icon',
        size: '4.0rem',
        color: 'lightseagreen'
      }}>
        <MdCheckCircle/>
      </IconContext.Provider>
      <div className={"content"}>
        <p className={"thanks-title title is-size-5"}>
          Thanks for your Kindness!
        </p>
        <p className={"thanks-subtitle sub-title"}>
          We receipted your checkout.
          Money will be send to shrine soon
        </p>
        <button className={"button"} onClick={() => {
          history.push('/')
        }}>
          HOME
        </button>
      </div>
    </main>
  )
}

export default ThanksPage
