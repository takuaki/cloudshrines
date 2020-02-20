import React, {useEffect, useState} from "react"
import CheckOutForm from "../form/CheckOutForm"
//import api from "../../../client/stripe"
import {Stripe} from "../../../client/stripe"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

interface PropType {
  isOpen: boolean,
  closeModal: any
}


const CheckoutFormDialog = ({isOpen, closeModal}: PropType) => {

  const [apikey, setApiKey] = useState<string | null>(null)

  useEffect(() => {
    const stripe = new Stripe()
    console.log('useEffect')
    stripe.getPubKey().then(apiKey => {
      setApiKey(apiKey)
    })
  }, [])

  if (!isOpen) {
    return null
  } else {

    return (
      <div className={"modal is-active"}>
        <div className={"modal-background"}/>
        <div className={"modal-content"}>
          {!!apikey && (
            <Elements stripe={loadStripe(apikey)}>
              <CheckOutForm/>
            </Elements>
          )}
        </div>
        <button className={"modal-close is-large"} aria-label={"close"} onClick={closeModal}/>
      </div>
    )
  }
}

export default CheckoutFormDialog