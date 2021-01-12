import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  height: 93px;
  align-items: center;
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`

const Menu = styled.nav`
  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    font-weight: 400;
    font-size: 25px;

    li{
      padding-top: 20px;
      padding-bottom: 20px;

      &.active {
        border-bottom: 3px solid #212121;
      }
    }

    li + li {
      margin-left: 50px;
    }

    a {
      text-decoration: none;
      color: #212121;
    }
  }
`

function Header() {
  const router = useRouter()

  const currentRoute = router.pathname;

  return (
    <HeaderContainer>
      <Container>
        <Row align="center">
          <Col sm={2} align="start">
            <img src="/Logo.svg" alt="Pokémon" />
          </Col>
          <Col sm={6} align="flex-end">
            <Menu>
              <ul>
                <li className={currentRoute === '/' ? 'active' : ''}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className={currentRoute === '/pokedex' ? 'active' : ''}>
                  <Link href="/pokedex">
                    <a>Pokédex</a>
                  </Link>
                </li>
              </ul>
            </Menu>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  )
}

export default Header
