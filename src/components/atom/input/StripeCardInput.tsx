import React, {FC} from "react"
import {CardElement} from "@stripe/react-stripe-js"
import "./StripeCardInput.sass"
import {StripeCardElementChangeEvent} from "@stripe/stripe-js"

const style = {
  base: {
    color: '#303238',
    fontSize: '1.2rem',
    fontFamily: '"Open Sans", sans-serif',
    borderRadius: '0',
    fontSmoothing: 'antialiased',
    '::placeholder': {
      color: 'lightgray',
    },
  },
  invalid: {
    color: '#e5424d',
    ':focus': {
      color: '#303238',
    },
  },
}

interface PropType {
  errorHandler?: (event: StripeCardElementChangeEvent) => void
}

const StripeCardInput: FC<PropType> = ({
                                         errorHandler = (event) => {
                                         }
                                       }) => {
  return (
    <CardElement className={"stripe-card-element"}
                 onChange={errorHandler}
                 options={{
                   style: style
                 }}/>)
}

export default StripeCardInput