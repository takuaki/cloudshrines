import React, {useState, MouseEventHandler} from "react"
import "./CheckOutForm.sass"
import {Stripe} from "../../../client/stripe"
import {useHistory} from "react-router-dom"
import StripeCardInput from "../../atom/input/StripeCardInput"
import ChargeInput from "../../atom/input/ChargeInput"
import ChargeButtons from "../../molecular/select/ChargeButtons"
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js"
import {StripeCardElement} from "@stripe/stripe-js"
import {GiPayMoney} from "react-icons/all"
import RectangularButton from "../../atom/button/RectangularButton"

const CheckOutForm: React.FC = () => {
  const history = useHistory()
  const stripe = useStripe()
  const server = new Stripe()
  const elements = useElements()
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState<string | undefined>(undefined)
  const [cardError, setCardError] = useState<string | undefined>(undefined)
  const [amountError, setAmountError] = useState<string | undefined>(undefined)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault()
    if (!stripe || !elements)
      return
    const cardElement: StripeCardElement | null = elements.getElement(CardElement)
    if (!cardElement) {
      return
    }
    const {client_secret, error} = await server.createPaymentIntent({amount: amount})
    if (error) {
      setError(error)
      return
    }
    const {paymentIntent, error: stripeError} = await stripe.confirmCardPayment(client_secret!, {
      payment_method: {
        card: cardElement
      }
    })
    if (stripeError) {
      setError(stripeError?.message)
      return
    }
    history.push('/thanks')
  }

  return (
    <form className={"checkout-form"}>
      <fieldset>
        {!!error && (
          <p className={"has-text-warning is-size-6 has-text-left"}>{error}</p>
        )}
        <div className={"field"}>
          <label className={"label has-text-white is-size-6"}>Pay Amount</label>
          <ChargeButtons className={"checkout-form-buttons"} onClick={
            (amount) => {
              setAmount(amount)
              setAmountError(undefined)
            }
          }/>
        </div>
        {!!amountError && (
          <p className={"has-text-warning is-size-7 has-text-left"}>{amountError}</p>
        )}
        <ChargeInput defaultValue={amount} className={"checkout-form-input"} errorHandler={
          (error) => {
            setAmountError(error)
          }
        }/>
        <div className={"field"}>
          <label className={"label has-text-white is-size-6"}>Credit Card</label>
          {!!cardError && (<p className={"has-text-warning is-size-7 has-text-left"}>{cardError}</p>)}
          <StripeCardInput errorHandler={(e) => {
            setCardError(e.error?.message)
          }}/>
        </div>
        <RectangularButton title={"お賽銭を入れる"}
                           icon={<GiPayMoney/>}
                           className={"checkout-form-submit"}
                           type={"submit"}
                           onClick={handleSubmit}
                           disabled={!!cardError || !!amountError}/>
      </fieldset>
    </form>
  )
}

export default CheckOutForm