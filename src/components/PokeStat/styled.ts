import styled from 'styled-components'

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

export const SkillTitle = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #4b4b4b;
`
