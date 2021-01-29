import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    --main-color: #f5db13;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`
