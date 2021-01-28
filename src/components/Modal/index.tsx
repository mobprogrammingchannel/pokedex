import { FC as ReactFC } from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import PokeBadge from '../PokeBadge'
import { Pokemon } from '../../models/pokemon'
import PokeStat from '../PokeStat'

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
`

const BadgesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  right: 0;

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

interface Props {
  pokemon: Pokemon
  onClose: () => void
}

const Modal: ReactFC<Props> = ({ pokemon, onClose }) => {
  // const {} = props
  useLockBodyScroll()

  const verticalOffset = window.pageYOffset

  return (
    <Portal>
      <ModalOverlay verticalOffset={verticalOffset}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button onClick={onClose} aria-label="Close">
            <img src="/close.svg" alt="Close icon" />
          </Button>
          <ModalContent>
            <div
              style={{
                width: '45%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img style={{ width: '100%' }} src={pokemon.artworkUrl} />
              <BadgesWrapper>
                {pokemon.types.map((type) => (
                  <PokeBadge key={`${pokemon.id}-${type}`} type={type} />
                ))}
              </BadgesWrapper>
            </div>
            <div style={{ width: '55%' }}>
              <div>
                {pokemon.name} - {pokemon.id}
              </div>
              <StyledCard>
                <p>abilities</p>
                <span>{pokemon.abilities.join(' - ')}</span>
              </StyledCard>
              <StyledCard>
                <div>
                  <span>Healthy Points</span>
                  <span>{pokemon.stats.hp}</span>
                </div>
                <div>
                  <span>Experience</span>
                  <span>{pokemon['base_experience']}</span>
                </div>
              </StyledCard>
              <div style={{ display: 'flex', gap: 24 }}>
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
            </div>
          </ModalContent>
        </div>
      </ModalOverlay>
    </Portal>
  )
}

export default Modal

// export { default } from './Portal'
