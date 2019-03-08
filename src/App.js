import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainLayout>
                    <Switch>
                        <Route exact path="/" component={ ProductList } />
                        <Route path="/details" component={ Details } />
                        <Route path="/cart" component={ Cart } />
                        <Route component={ Default } />
                    </Switch>
                </MainLayout>
            </>
        );
    }
}

export default App;

const MainLayout = styled.div`
    position: relative;
    margin-top: 90px;
    padding: 0 15px;
`
