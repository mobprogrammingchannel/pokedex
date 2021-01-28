import * as Styled from './styles'
import colorsType from '../colorsType'
import PokeBadge from '../PokeBadge'
import { Pokemon } from '../../models/pokemon'
import PokeStat from '../PokeStat'

type PokeCardProps = {
  pokemon: Pokemon
  onClick: (pokemon: Pokemon) => void
}

const PokeCard = ({ pokemon, onClick }: PokeCardProps) => {
  return (
    <Styled.CardContainer onClick={() => onClick(pokemon)}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%', padding: '5px 0 12px 25px' }}>
          <Styled.CardTitle>{pokemon.name}</Styled.CardTitle>
          <div style={{ display: 'flex' }}>
            <PokeStat label="Attack" value={pokemon.stats.attack} />
            <PokeStat label="Defense" value={pokemon.stats.defense} />
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                position: 'absolute',
                top: '11px',
              }}
            >
              {pokemon.types.map((type) => (
                <PokeBadge key={`${pokemon.id}-${type}`} type={type} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '60%' }}>
          <Styled.PokeImage
            image={pokemon.artworkUrl}
            color={colorsType[pokemon.types[0]]}
          />
        </div>
      </div>
    </Styled.CardContainer>
  )
}

export default PokeCard
