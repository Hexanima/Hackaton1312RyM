export interface Character {
  id: number

  image: string // url 300x300 img
  
  url: string // url, char endpoint
  name: string
  status: string
  species: string
  type: string
  gender: string

  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }

  episode: string[] // url[]
  created: string // createdAt timestamp
}
