import styled from 'styled-components'
import { Container as AwesomeContainer } from 'react-awesome-styled-grid'
export const Container = styled.div<{ bgColor?: string }>`
  height: 100%;
  background: ${({ bgColor }) =>
    bgColor || 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)'};
`

export const Footer = styled.footer`
  height: 80px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`

export const Content = styled(AwesomeContainer)`
  min-height: calc(100vh - 93px - 80px );
`
