import { useEffect, useState } from 'react'
import { Row, Col } from 'react-awesome-styled-grid'

import Layout from '../../components/Layout'
import PokeCard from '../../components/PokeCard'
import SearchInput from './components/SearchInput'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import { Pokemon } from '../../models/pokemon'

import * as Styled from './styles'
import { useLazyQuery, gql, useQuery } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'

const POKEMON_COUNT = gql`
  query pokemonCount {
    getPokemonCount
  }
`

const POKEMON_QUERY = gql`
  query($offset: Int) {
    pokemons(offset: $offset) {
      id
      name
      abilities
      base_experience
      artworkUrl
      types
      stats {
        hp
        attack
        defense
        specialAttack
        specialDefense
      }
    }
  }
`

function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [pokemons, setPokemons] = useState([])
  const { data } = useQuery(POKEMON_COUNT)
  const [getPokemons, { data: pokeData }] = useLazyQuery(POKEMON_QUERY)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (pokeData?.pokemons) {
        setPokemons((oldPokemons) => [...oldPokemons, ...pokeData.pokemons])
      }
    }, 2000)
  }, [pokeData?.pokemons])

  const loadMorePokemon = () => {
    getPokemons({
      variables: {
        offset: pokemons.length,
      },
    })
  }

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedPokemon(null)
  }

  return (
    <Layout bgColor="#fff">
      <button onClick={() => setShowModal(true)}>Modaaal</button>
      <Styled.Container>
        <Row>
          <Styled.Title>
            {data?.getPokemonCount} <strong>Pokémons</strong> for you to choose
            your favorite
          </Styled.Title>
        </Row>
        <Row>
          <SearchInput />
        </Row>
        <InfiniteScroll
          dataLength={pokemons?.length || 0}
          next={loadMorePokemon}
          hasMore={true}
          loader={<Loading />}
          style={{ overflow: 'hidden' }}
        >
          <Row style={{ marginTop: 56 }}>
            {pokemons?.map((pokemon) => (
              <Col key={pokemon.id} sm={8 / 3} style={{ marginBottom: 45 }}>
                <PokeCard pokemon={pokemon} onClick={handleCardClick} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Styled.Container>
      {showModal && <Modal pokemon={selectedPokemon} onClose={closeModal} />}
    </Layout>
  )
}

export default Pokedex
