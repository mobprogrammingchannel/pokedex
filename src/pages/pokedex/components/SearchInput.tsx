import { useState } from 'react'
import styled from 'styled-components'

const CustomInput = styled.input`
  width: 100%;
  background: #f2f2f2;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  border-radius: 40px;
  padding: 16px 32px;
  outline: none;
  border: none;

  &:focus {
    border: 2px solid var(--main-color);
  }
`

type CustomLabelProps = {
  hasContent: boolean
}

const CustomLabel = styled.label<CustomLabelProps>`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  top: 16px;
  left: 32px;
  display: ${({ hasContent }) => (hasContent ? 'none' : 'inherit')};
  color: #21212180;
`

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 36px;
`;

const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <Container>
      <CustomLabel
        htmlFor="input-find-pokemon"
        hasContent={Boolean(searchText.length)}
      >
        Find your pokémon
      </CustomLabel>
      <CustomInput
        id="input-find-pokemon"
        type="text"
        value={searchText}
        onChange={({ target: { value } }) => {
          setSearchText(value)
        }}
      />
    </Container>
  )
}

export default SearchInput
