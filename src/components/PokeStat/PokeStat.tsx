import * as Styled from './styled'

interface Props {
  label: string
  value: number
}

function PokeStat({ label, value }: Props) {
  return (
    <Styled.SkillWrapper>
      <Styled.SkillItem>{value}</Styled.SkillItem>
      <Styled.SkillTitle>{label}</Styled.SkillTitle>
    </Styled.SkillWrapper>
  )
}

export default PokeStat
