import { RESTDataSource } from 'apollo-datasource-rest'

type PokemonType = 'fire' | 'normal' | 'electric' | 'water'

class PokeAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getAllPokemons() {
    return this.get('pokemon')
  }

  async getPokemon(id: string | number) {
    return this.get(`pokemon/${id}`)
  }

  async getPokemonsByType(pokemonType: PokemonType) {
    return this.get(`type/${pokemonType}`)
  }
}

export default PokeAPI
