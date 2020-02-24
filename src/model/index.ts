export interface NameModel {
  alpha: string,
  kana: string,
  kanji: string
}

export interface ShrineModel {
  id: string,
  name: NameModel,
  headline: string,
  access: { postal: string, address: { state: string, city: string, line1: string }, location?: { lat?: number, lng?: number } },
  preview: Array<string>
}


