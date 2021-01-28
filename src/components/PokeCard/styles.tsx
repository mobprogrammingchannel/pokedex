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

type PokeImageProps = {
  image: string
  color: string
}

export const PokeImage = styled.div<PokeImageProps>`
  background-color: ${({ color }) => color};
  background-size: cover;
  background-position: center 25%;
  background-image: url(${({ image }) => image});
  height: 136px;
  border-radius: 0px 8px 8px 0px;
`
