import Stripe from "stripe"
import * as functions from "firebase-functions"

const {stripe: stripeConfig} = functions.config()
const publicKey = stripeConfig.pubkey
const secretKey = stripeConfig.secretkey

const stripe = new Stripe(secretKey, {
  apiVersion: '2019-12-03',
  typescript: true,
  timeout: 5000
})

export const paymentIntent = async (params: { amount: number, receipt_email: string | undefined }):
  Promise<{ intent: Stripe.PaymentIntent | undefined, error: string | undefined }> => {
  return await stripe.paymentIntents.create({
    amount: params.amount,
    receipt_email: params.receipt_email,
    currency: 'jpy',
    payment_method_types: ['card']
  }).then(result => {
    return {intent: result, error: undefined}
  }).catch((error) => {
    let message = ''
    switch (error.type) {
      case 'StripeCardError':
        message = error.message
        break
      case 'StripeRateLimitError':
        message = "少し時間を置いてから再度送信してください"
        break
      case 'StripeInvalidRequestError':
        message = "不正なリクエストです。内容を確認してください"
        break
      case 'StripeAPIError':
        message = "内部処理でエラーが起きました"
        break
      case 'StripeConnectionError':
        message = "インターネット接続を確認してください"
        break
      case 'StripeAuthenticationError':
        message = "権限がありません"
        break
      default:
        message = "内容が正しいか確認して再度送信してください"
        break
    }
    return {error: message, intent: undefined}
  })
}

export const getPubKey = () => {
  return {pubkey: publicKey}
}





