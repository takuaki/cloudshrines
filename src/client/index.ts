import firebase from "firebase"

export class Base {
  private static app_name = "cloud-shrine"

  private static firebaseConfig = {
    apiKey: "AIzaSyBA2kmwE9XC9rkvXcGwdnh0RbYcqAM9hOE",
    authDomain: "cloud-shrine.firebaseapp.com",
    databaseURL: "https://cloud-shrine.firebaseio.com",
    projectId: "cloud-shrine",
    storageBucket: "cloud-shrine.appspot.com",
    messagingSenderId: "887933406481",
    appId: "1:887933406481:web:bef6342716c18a781050b0",
    measurementId: "G-6Q587DS696"
  };

  protected instance: firebase.app.App

  constructor() {
    const instance = firebase.apps.find(app => {
      return app.name === Base.app_name
    })
    this.instance = instance ?? firebase.initializeApp(Base.firebaseConfig, Base.app_name)
  }
}
