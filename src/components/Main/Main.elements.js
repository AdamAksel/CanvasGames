import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 4vh;
`
export const NavArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 99%;
  background-color: #141c3a;
`
export const NavItem = styled.h3`
  color: whitesmoke;

  :hover {
    color: lightblue;
    cursor: pointer;
  }
`
