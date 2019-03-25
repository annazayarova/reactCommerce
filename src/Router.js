import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import Backstage from './components/Backstage';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Products from './components/Products';

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={ Products } />
            <Route path="/about" component={ About } />
            <Route path="/backstage" component={ Backstage } />
            <Route path="/details" component={ Details } />
            <Route path="/cart" component={ Cart } />
            <Route component={ Default } />
        </Switch>
    )
}

export default Router;
