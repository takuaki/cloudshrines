import React, {useState, useEffect} from "react"
import Layout from "../components/atom/layout/FixedDarkLayout"
import "./Checkout.sass"
import {useHistory} from "react-router-dom"
import src from "../assets/background.jpg"
import api from "../client/stripe"
import CheckOutForm from "../components/organism/form/CheckOutForm"
import SimpleTitle from "../components/atom/title/SimpleTitle"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import {default as SimpleHeader} from "../components/organism/header/Header"

interface PropType {
  className?: string,
  contents: string
}

const Checkout = (props: PropType) => {

  const [apikey, setApiKey] = useState<string | null>(null)
  const history = useHistory()

  useEffect(() => {
    api.getPublicStripeKey().then(apiKey => {
      setApiKey(apiKey)
    })
  })

  return (
    <Layout background={src}>
      <header>
        <SimpleHeader onClick={() => {
          history.push('/search')
        }} height="5vh"/>
      </header>
      <main className={"checkout-layout"}>
        <SimpleTitle>Effect</SimpleTitle>
        <p className={"checkout-contents"}>
          {props.contents}
        </p>
        {apikey && (
          <Elements stripe={loadStripe(apikey)}>
            <CheckOutForm/>
          </Elements>
        )}
      </main>
    </Layout>
  )

}

export default Checkout