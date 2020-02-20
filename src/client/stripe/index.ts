import * as firebase from "firebase"
import {Base} from ".."

export class Stripe extends Base {

  private function: firebase.functions.Functions

  constructor() {
    super();
    this.function = this.instance.functions()
    this.function.useFunctionsEmulator("http://localhost:5000")
  }

  public async getPubKey() {
    return this.function.httpsCallable('getPublicKey')({})
      .then(({data}) => {
        return data.pubkey
      })
  }

  public async createPaymentIntent(params: { receipt_email?: string, amount: number }) {
    return this.function.httpsCallable('getPaymentIntent')(params)
      .then(({data}) => {
        return {client_secret: data.client_secret, error: undefined}
      }).catch((error: firebase.functions.HttpsError) => {
        return {client_secret: undefined, error: error.message}
      })
  }
}

