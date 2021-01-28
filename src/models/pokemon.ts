export type Pokemon = {
  id: number
  name: string
  abilities: string[]
  // eslint-disable-next-line camelcase
  base_experience: number
  artworkUrl: string
  types: string[]
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
  }
}
