import * as Styled from './styles'
import colorsType from '../colorsType'

type PokeCardProps = {
  pokemon: {
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
}

const PokeType = ({ type }) => {
  return (
    <div>
      <Styled.PokeBadge style={{ backgroundColor: colorsType[type] }}>
        {type}
      </Styled.PokeBadge>
    </div>
  )
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  return (
    <Styled.CardContainer>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%', padding: '5px 0 12px 25px' }}>
          <Styled.CardTitle>{pokemon.name}</Styled.CardTitle>
          <div style={{ display: 'flex' }}>
            <Styled.SkillWrapper>
              <Styled.SkillItem>{pokemon.stats.attack}</Styled.SkillItem>
              <Styled.SkillTitle>Attack</Styled.SkillTitle>
            </Styled.SkillWrapper>
            <Styled.SkillWrapper>
              <Styled.SkillItem>{pokemon.stats.defense}</Styled.SkillItem>
              <Styled.SkillTitle>Defense</Styled.SkillTitle>
            </Styled.SkillWrapper>
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
                <PokeType key={`${pokemon.id}-${type}`} type={type} />
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
