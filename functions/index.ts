import {https} from "firebase-functions"
import {paymentIntent, getPubKey} from "./src/stripe"

export const getPublicKey = https.onCall((data, context) => {
  return getPubKey()
})

export const getPaymentIntent = https.onCall(async (data, context) => {
  const {amount, receipt_email} = data
  if (typeof amount === 'undefined')
    throw new https.HttpsError('invalid-argument', 'argument must has amount attributes')
  else {
    return await paymentIntent({
      amount: amount,
      receipt_email: receipt_email
    }).then(({intent, error}) => {
      return {client_secret: intent?.client_secret, error: error}
    }).catch(reason => {
      throw new https.HttpsError('unknown', reason)
    })
  }
})
