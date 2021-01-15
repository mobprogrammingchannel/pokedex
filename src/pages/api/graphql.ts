import { ApolloServer, gql } from 'apollo-server-micro'
import PokemonDataSource from '../../graphql/dataSource'
import pokemonFormat from '../../graphql/utils/pokemonFormat'

const typeDefs = gql`
  type Query {
    pokemons(id: Int): [Pokemon]
    getPokemonsByType(pokemonType: String, offset: Int): [Pokemon]
  }

  type PokemonStat {
    hp: Int
    attack: Int
    defense: Int
    specialAttack: Int
    specialDefense: Int
  }

  type Pokemon {
    id: Int
    name: String
    abilities: [String]
    base_experience: Int
    artworkUrl: String
    stats: PokemonStat
    types: [String]
  }
`

const resolvers = {
  Query: {
    async pokemons(_, args, { dataSources }) {
      const response = await dataSources.pokemon.getAllPokemons()
      if (response?.results) {
        return response.results.map(async (pokemon) => {
          const pokemonData = await dataSources.pokemon.getPokemon(pokemon.name)
          return pokemonFormat(pokemonData)
        })
      }

      return []
    },
    async getPokemonsByType(_, { pokemonType, offset }, { dataSources }) {
      const response = await dataSources.pokemon.getPokemonsByType(pokemonType)
      if (!response?.pokemon) return []

      return response.pokemon
        .slice(offset, offset + 20)
        .map(async ({ pokemon }) => {
          const pokemonData = await dataSources.pokemon.getPokemon(pokemon.name)
          return pokemonFormat(pokemonData)
        })
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemon: new PokemonDataSource(),
  }),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
