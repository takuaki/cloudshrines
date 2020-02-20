import {NameModel, ShrineModel} from "./"
import {Firestore} from "../client/firestore"
import {Storage} from "../client/cloudstorage"

export const loadShrine = async (id: string): Promise<ShrineModel | undefined> => {
  const firestore = new Firestore()
  const storage = new Storage()
  const shrine = await firestore.loadShrine(id)
  let preview = shrine?.preview ?? await storage.loadPreviews(id)
  if (typeof preview === 'undefined' || typeof shrine === 'undefined')
    return undefined
  const {longitude, latitude} = {...shrine.access.location}
  return {
    id: id,
    name: shrine.name,
    headline: shrine.headline,
    preview: preview,
    access: {
      postal: shrine.access.postal,
      address: shrine.access.address,
      location: {
        lat: latitude,
        lng: longitude
      }
    }
  } as ShrineModel
}

export const loadShrineByName = async (kana: string): Promise<ShrineModel | undefined> => {
  const firestore = new Firestore()
  const storage = new Storage()
  const shrine = await firestore.loadShrineByName(kana)
  if (typeof shrine === 'undefined')
    return undefined
  let preview = shrine.preview ?? await storage.loadPreviews(shrine.id).then(previews => {
    return previews.length >= 3 ? previews : undefined
  })
  if (typeof preview === 'undefined' || typeof shrine === 'undefined')
    return undefined
  const {longitude, latitude} = {...shrine.access.location}
  return {
    id: shrine.id,
    name: shrine.name,
    headline: shrine.headline,
    preview: preview,
    access: {
      postal: shrine.access.postal,
      address: shrine.access.address,
      location: {
        lat: latitude,
        lng: longitude
      }
    }
  }
}

export const loadShineIds = async (): Promise<Array<{ id: string } & { name: NameModel }>> => {
  const firestore = new Firestore()
  return await firestore.loadShrineNames()
}



