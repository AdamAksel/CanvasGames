import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Main } from './components/index'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Main />
    </StyledApp>
  )
}

export default App
