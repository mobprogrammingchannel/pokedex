/* eslint-disable dot-notation */
import { FC as ReactFC, useRef } from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import { linearGradient, darken } from 'polished'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import PokeBadge from '../PokeBadge'
import { Pokemon } from '../../models/pokemon'
import PokeStat from '../PokeStat'
import colorsType from '../colorsType'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const ModalOverlay = styled.div<{ verticalOffset: number }>`
  overflow-y: hidden;
  position: absolute;
  top: ${({ verticalOffset }) => verticalOffset}px;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  height: 420px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  border-radius: 8px;
  animation: openmodal 0.25s;

  @keyframes openmodal {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

const BadgesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 16px;
  bottom: 16px;

  div & div {
    margin-left: 10px;
  }
`

const StyledCard = styled.div`
  background-color: #fdfdfd;
  padding: 16px 24px;
  border-radius: 8px;
  min-width: 100px;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;
`

const StyledCardInline = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  align-self: flex-end;
  justify-self: flex-end;
`

const PokemonImageWrapper = styled.div<{ color: string }>`
  width: 45%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  padding: 16px;
  ${({ color }) =>
    linearGradient({
      colorStops: ['rgba(50, 50, 50, .3) 10%', color],
      toDirection: 'to right',
      fallback: color,
    })}
`

const PokemonDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  border-radius: 0 8px 8px 0;
  padding: 32px 24px;
  ${({ color }) =>
    linearGradient({
      colorStops: [`${darken(0.3, color)} 70%`, color],
      toDirection: 'to bottom',
      fallback: color,
    })}
`

const PokeName = styled.h4`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  text-align: left;
  text-transform: capitalize;
  color: #fdfdfd;
`

const PokeId = styled.div`
  width: 41px;
  height: 41px;
  background: #f2cb07;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PokeStatData = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2px 0;
`

interface Props {
  pokemon: Pokemon
  onClose: () => void
}

const Modal: ReactFC<Props> = ({ pokemon, onClose }) => {
  const ref = useRef(null)
  useLockBodyScroll()
  useOnClickOutside(ref, onClose)

  const verticalOffset = window.pageYOffset

  return (
    <Portal>
      <ModalOverlay verticalOffset={verticalOffset}>
        <div style={{ display: 'flex', flexDirection: 'column' }} ref={ref}>
          <Button onClick={onClose} aria-label="Close">
            <img src="/close.svg" alt="Close icon" />
          </Button>
          <ModalContent>
            <PokemonImageWrapper color={colorsType[pokemon.types[0]]}>
              <img style={{ width: '100%' }} src={pokemon.artworkUrl} />
              <BadgesWrapper>
                {pokemon.types.map((type) => (
                  <PokeBadge key={`${pokemon.id}-${type}`} type={type} />
                ))}
              </BadgesWrapper>
            </PokemonImageWrapper>
            <PokemonDataWrapper color={colorsType[pokemon.types[0]]}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <PokeName>{pokemon.name}</PokeName>
                <PokeId>{pokemon.id}</PokeId>
              </div>
              <StyledCard style={{ width: 'fit-content' }}>
                <p>abilities</p>
                <span>{pokemon.abilities.join(' - ')}</span>
              </StyledCard>
              <StyledCardInline>
                <PokeStatData style={{ borderBottom: '5px solid #64D368' }}>
                  <span>Healthy Points</span>
                  <span style={{ fontWeight: 700 }}>{pokemon.stats.hp}</span>
                </PokeStatData>
                <PokeStatData style={{ borderBottom: '5px solid #F2B807' }}>
                  <span>Experience</span>
                  <span style={{ fontWeight: 700 }}>
                    {pokemon['base_experience']}
                  </span>
                </PokeStatData>
              </StyledCardInline>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <StyledCard>
                  <PokeStat label="Defense" value={pokemon.stats.defense} />
                </StyledCard>
                <StyledCard>
                  <PokeStat label="Attack" value={pokemon.stats.attack} />
                </StyledCard>
                <StyledCard>
                  <PokeStat
                    label="SP Defense"
                    value={pokemon.stats.specialDefense}
                  />
                </StyledCard>
                <StyledCard>
                  <PokeStat
                    label="SP Attack"
                    value={pokemon.stats.specialAttack}
                  />
                </StyledCard>
              </div>
            </PokemonDataWrapper>
          </ModalContent>
        </div>
      </ModalOverlay>
    </Portal>
  )
}

export default Modal

// export { default } from './Portal'
