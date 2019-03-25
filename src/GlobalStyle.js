import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background: ${ props => props.theme.mainColor };
    font-family: ${ props => props.theme.secondaryFont };
    font-size: 15px;
    margin: 0;
    padding: 0;
    width: 100%;
}

img, svg {
    width: 100%;
}

a {
    text-decoration: none
}
`
export const theme = {
    greyColor: '#777',
    inverseColor: '#282828',
    mainColor: '#fff',
    primaryFont: 'Playfair Display',
    secondaryColor: '#E5B2B8',
    secondaryFont: 'Raleway'
}
