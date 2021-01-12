import { FC } from 'react'
import * as Styled from './styles'
import Header from '../Header'
import { Container, Row, Col } from 'react-awesome-styled-grid'

type LayoutProps = {
  bgColor?: string
}

const Layout: FC<LayoutProps> = ({ children, bgColor }) => {
  return (
    <Styled.Container bgColor={bgColor}>
      <Header />
      <Styled.Content>
        {children}
      </Styled.Content>
      <Styled.Footer>
        <Container>
          <Row justify="space-between" align="center">
            <Col>
              <span>Make with ❤️ for the PokéSpartans team Platzi Master</span>
              <span>Developed with ❤️ by @mobprogramming </span>
            </Col>
            <Col align="flex-end">
              <span>Ours Team</span>
            </Col>
          </Row>
        </Container>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Layout
