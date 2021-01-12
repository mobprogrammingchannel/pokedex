import Layout from '../components/Layout'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { useRouter } from 'next/router'

const Title = styled.h1`
  font-size: 72px;
  line-height: 84.17px;
  letter-spacing: 4px;

  span {
    font-weight: bold;
  }
`

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 300;
  line-height: 37px;
  letter-spacing: 0em;
  margin-top: 64px;
`

export const Button = styled.button`
  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 17px 36px;
  margin-top: 64px;
  width: fit-content;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  cursor: pointer;

  &:hover {
    filter: brightness(.9)
  }
`

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Container
        style={{
          paddingTop: 128,
        }}
      >
        <Row reverse={['xs', 'sm']}>
          <Col md={3}>
            <Title>
              <span>Find</span> all your favorite <span>Pokemon</span>
            </Title>
            <Subtitle>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </Subtitle>
            <div style={{ marginBottom: 64 }}>
              <Button onClick={() => router.push('/pokedex')}>See pokemons</Button>
            </div>
          </Col>
          <Col md={5}>
            <img style={{ width: '100%' }} src="/pikachu.png" alt="Pikachu lançando a pokebola" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
