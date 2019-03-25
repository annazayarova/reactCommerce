import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const items = [{
    label: 'bracelets',
    to: '/'
}, {
    label: 'earrings',
    to: '/earrings'
}, {
    label: 'necklaces',
    to: '/necklaces'
}, {
    label: 'rings',
    to: '/rings'
}, {
    label: 'about',
    to: '/about'
}, {
    label: 'backstage',
    to: '/backstage'
}];

const NavItems = () => {
    return (
        <Nav>
            {
                items.map(({ label, to }) =>
                    <NavItem label={ label }
                        to = { to }
                    />
                )
            }
        </Nav>
    );
}

export default NavItems;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
`
