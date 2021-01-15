import { Row, Col } from 'react-awesome-styled-grid'
import Layout from '../../components/Layout'
import PokeCard from '../../components/PokeCard'
import SearchInput from './components/SearchInput'
import * as Styled from './styles'

function Pokedex() {
  const pokemons = [
    {
      id: 1,
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      base_experience: 64,
      artworkUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['grass', 'poison'],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
      },
    },
    {
      id: 1,
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      base_experience: 64,
      artworkUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['grass', 'poison'],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
      },
    },
    {
      id: 1,
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      base_experience: 64,
      artworkUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['grass', 'poison'],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
      },
    },
    {
      id: 1,
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      base_experience: 64,
      artworkUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['fairy', 'steel'],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
      },
    },
    {
      id: 1,
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      base_experience: 64,
      artworkUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['bug', 'water'],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
      },
    },
  ]

  return (
    <Layout bgColor="#fff">
      <Styled.Container>
        <Row>
          <Styled.Title>
            800 <strong>Pokémons</strong> for you to choose your favorite
          </Styled.Title>
        </Row>
        <Row>
          <SearchInput />
        </Row>
        <Row style={{ marginTop: 56 }}>
          {pokemons.map((pokemon) => (
            <Col key={pokemon.id} sm={8 / 3} style={{ marginBottom: 45 }}>
              <PokeCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </Styled.Container>
    </Layout>
  )
}

export default Pokedex
