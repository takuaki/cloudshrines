import {Base} from ".."
import * as firebase from "firebase/app"
import "firebase/firestore"

const COL_SHRINE = "shrine"

export interface ShrineData {
  name: { alpha: string, kana: string, kanji: string }
  headline: string,
  access: { postal: string, address: string, location?: firebase.firestore.GeoPoint },
  preview?: Array<string>
}

export class Firestore extends Base {

  private store: firebase.firestore.Firestore

  constructor() {
    super()
    this.store = this.instance.firestore()
  }

  public async loadShrine(id: string): Promise<ShrineData | undefined> {
    return this.store.collection(COL_SHRINE).doc(id).get()
      .then(shrine => {
        return shrine.exists ? shrine.data() as ShrineData : undefined
      })
  }

  public async loadShrineByName(kana: string): Promise<ShrineData & { id: string } | undefined> {
    return this.store.collection(COL_SHRINE).where('name.kana', '==', kana)
      .get().then((doc) => {
        if (doc.docs.length !== 1)
          return undefined
        else {
          const shrine = doc.docs.shift()
          return shrine?.exists ? {...shrine.data() as ShrineData, id: shrine.id} : undefined
        }
      })
  }

  public async loadShrineNames(): Promise<Array<{ id: string, name: { alpha: string, kana: string, kanji: string } }>> {
    return this.store.collection(COL_SHRINE).orderBy('name.kana').get()
      .then(results => {
        return results.docs.map(shrine => {
          const docId = shrine.id
          const name = shrine.data().name as { alpha: string, kana: string, kanji: string }
          return {id: docId, name: name}
        })
      })
  }

  /*public async updatePreviewUrls(id:string,urls: Array<string>) :Promise<any>{
    this.store.collection(COL_SHRINE).doc(id).update({
      preview:firebase.firestore.FieldValue.arrayUnion({

      })
    })

  }*/
}
