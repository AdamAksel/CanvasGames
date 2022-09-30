import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Main } from './components/index'
import { BrowserRouter as Router } from 'react-router-dom'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Router>
        <Main />
      </Router>
    </StyledApp>
  )
}

export default App
