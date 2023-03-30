import styled from 'styled-components'

const NavbarComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1 em 1.2em;
  margin-bottom: 2em;
  background-color: red;
  color: black;
`

// const Logo = styled.image`
// `

export const NavBar = () => {
    return (
        <NavbarComponent>
            {/* <Logo>
                dasdasd
            </Logo> */}
            <p>Teste</p>
            <p>Teste</p>
        </NavbarComponent>
    )
}