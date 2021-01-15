import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700;500&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    --main-color: #f5db13;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
  }
`
