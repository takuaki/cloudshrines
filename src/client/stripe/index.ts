import axios from "axios"

const https = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
})

const api = {
  //TODO implements
  getPublicStripeKey: async () => {
    return await https.post('/public-key').then(value => value.data)
  },
  createPaymentIntent: async (params: { receipt_email?: string, amount: number }):
    Promise<{ client_secret?: string, error?: string }> => {
    try {
      const {client_secret, error} = await https.post('/create-payment-intent', params).then(res => res.data)
      return {client_secret: client_secret, error: error}
    } catch (error) {
      return {client_secret: undefined, error: error}
    }
  },
}

export default api

