export interface PersonType {
  name: string
  species: any
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  films: []
}

export interface SpeciesType {
  name: string
}

export interface FilmType {
  name: string
  results: Array<object>
}
