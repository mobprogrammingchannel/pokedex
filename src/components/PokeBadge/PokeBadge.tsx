import styled from "styled-components"
import colorsType from "../colorsType"


export const StyledBadge = styled.span`
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

const PokeBadge = ({ type }) => {
  return (
    <div>
      <StyledBadge style={{ backgroundColor: colorsType[type] }}>
        {type}
      </StyledBadge>
    </div>
  )
}

export default PokeBadge