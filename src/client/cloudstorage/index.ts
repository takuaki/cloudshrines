import {Base} from ".."
import * as firebase from "firebase/app"
import "firebase/storage"

export class Storage extends Base {

  private storage: firebase.storage.Storage

  constructor() {
    super()
    this.storage = this.instance.storage()
  }

  public async loadPreviews(id: string): Promise<Array<string>> {
    return this.storage.ref(`preview/${id}`).listAll().then(list => {
      return Promise.all(list.items.map((pic) => {
        return pic.getDownloadURL()
      }))
    })
  }
}