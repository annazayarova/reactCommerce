import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";

import Footer from './components/Footer';
import NavItems from './components/NavItems';
import Router from './Router';
import TopHat from './components/TopHat';

import { GlobalStyle, theme } from './GlobalStyle';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <>
                    <GlobalStyle />

                    <MainLayout>
                        <TopHat />

                        <NavItems />

                        <Router />

                    </MainLayout>

                    <Footer />
                </>
            </ThemeProvider>
        );
    }
}

export default App;

const MainLayout = styled.div`
    padding: 0 20px 80px;
`
