import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 8px;
  background: #f6f7f9;
  box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.25);
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;
  margin-bottom: 12px;
`

export const SkillItem = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid #212121;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  margin-bottom: 6px;
  color: #212121;
`
export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 8px;
  }
`

export const SkillTitle = styled.caption`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #4b4b4b;
`
export const PokeImage = styled.div`
  background-color: #70a83b;
  background-size: cover;
  background-position: center;
  background-image: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png);
  height: 136px;
  border-radius: 0px 8px 8px 0px;
`

export const PokeBadge = styled.span`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 2px 16px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: capitalize;
`
