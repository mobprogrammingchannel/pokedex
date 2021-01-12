import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'
import Layout from '../../components/Layout'

type CustomLabelProps = {
  hasContent: boolean
}

const CustomInput = styled.input`
  width: 100%;
  background: #f2f2f2;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  border-radius: 40px;
  padding: 16px 32px;
`

const CustomLabel = styled.label<CustomLabelProps>`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  top: 16px;
  left: 32px;
  display: ${({ hasContent }) => (hasContent ? 'none' : 'inherit')};
`

function Pokedex() {
  return (
    <Layout bgColor="#fff">
      <Row>
        <h1>800 Pokemons for you to choose your favorite</h1>
      </Row>
      <Row>
        <div style={{ width: '100%', position: 'relative' }}>
          <CustomLabel htmlFor="input-find-pokemon" hasContent={true}>
            Find your pokémon
          </CustomLabel>
          <CustomInput id="input-find-pokemon" type="text" />
        </div>
      </Row>
      <Row>
        <div>
          <Col>
            <Row>
              <span>Pikachu</span>
            </Row>
            <Row>
              <div>
                <span>419</span>
                <span>Attack</span>
              </div>
              <div>
                <span>49</span>
                <span>Defense</span>
              </div>
            </Row>
            <Row>
              <span>Grass</span>
              <span>Poison</span>
            </Row>
          </Col>
          <Col>PokeImagem</Col>
        </div>
      </Row>
    </Layout>
  )
}

export default Pokedex
