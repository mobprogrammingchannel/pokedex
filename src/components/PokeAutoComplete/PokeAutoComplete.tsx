import { useState } from 'react'
import styled from 'styled-components'
import pokemons from 'pokemon'
import Autosuggest from 'react-autosuggest'

const pokemonName = pokemons.all()

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
`

const CustomAutosuggest = styled.div`
  width: 100%;

  .react-autosuggest__container {
    width: 100%;
  }
`

const getSuggestionValue = (suggestion) => suggestion

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : pokemonName.filter(
        (name) => name.toLowerCase().slice(0, inputLength) === inputValue
      )
}

const renderSuggestion = (suggestion) => <div>{suggestion}</div>

const SearchInput = (props) => {
  return (
    <Container>
      <CustomLabel
        htmlFor="input-find-pokemon"
        hasContent={Boolean(props?.value)}
      >
        Find your pokémon
      </CustomLabel>
      <CustomInput id="input-find-pokemon" type="text" {...props} />
    </Container>
  )
}

const PokeAutoComplete = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const onSuggestionsFetchRequested = ({ value }) => {
    console.log('Oin')
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    console.log('Oin2')

    setSuggestions([])
  }

  const inputProps = {
    value: searchText,
    onChange: (event, { newValue }) => {
      console.log('opa!!!')
      setSearchText(newValue)
    },
  }

  return (
    <CustomAutosuggest>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={SearchInput}
      />
    </CustomAutosuggest>
  )
}

export default PokeAutoComplete
