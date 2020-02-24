import {Base} from ".."
import * as firebase from "firebase/app"
import "firebase/firestore"
import firestore from "firebase"

const COL_SHRINE = "shrine"

export interface ShrineData {
  name: { alpha: string, kana: string, kanji: string }
  headline: string,
  access: { postal: string, address: { state: string, city: string, line1: string }, location?: firebase.firestore.GeoPoint },
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


  public async searchShrines(param: { [key in 'state' | 'category' | 'city' | 'area']: string | null }): Promise<Array<ShrineData & { id: string } | undefined>> {

    const where: (col: firebase.firestore.Query<firebase.firestore.DocumentData> | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>, field: string, value: string)
      => firebase.firestore.Query<firebase.firestore.DocumentData> = (col, field, value) => {
      return col.where(field, '==', value)
    }
    const col = this.store.collection(COL_SHRINE)

    const array = Object.entries(param).filter(([key, value]) => {
      return value !== null
    }).flatMap(([key, value]) => {
      if (key === 'area')
        return {field: 'access.address.area', value: value!}
      else if (key === 'state')
        return {field: 'access.address.state', value: value!}
      else if (key === 'city')
        return {field: 'access.address.city', value: value!}
      else if (key === 'category')
        return {field: 'category', value: value!}
      return {field: key, value: value!}
    })

    const wheres: (col: firebase.firestore.Query<firebase.firestore.DocumentData> | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>, index: number,
                   array: Array<{ field: string, value: string }>) => firebase.firestore.Query<firebase.firestore.DocumentData> | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
      = (col, index = 0,
         array) => {
      if (array.length === 0)
        return col
      else if (index < array.length - 1) {
        const {field, value} = array.slice(index, index + 1)[0]
        return wheres(where(col, field, value), ++index, array)
      } else {
        const {field, value} = array.slice(index, index + 1)[0]
        return where(col, field, value)
      }
    }

    return wheres(col, 0, array).get()
      .then(shrines => {
        return shrines.docs.map(shrine => {
          return shrine.exists ? {...shrine.data(), id: shrine.id} as ShrineData & { id: string } : undefined
        })
      })
  }
}
