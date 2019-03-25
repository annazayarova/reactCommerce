import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavItem = ({ label, to }) => {
    return (
        <StyledLink exact to={ to } >
            { label }
        </StyledLink>
    );
}

export default NavItem;

const StyledLink = styled(NavLink)`
    border-bottom: 1px solid transparent;
    color: ${ props => props.theme.greyColor };
    font-size: 1em;
    margin: 0 30px 10px;
    padding-bottom: 2px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
        border-bottom: 1px solid ${ props => props.theme.inverseColor };
        color: ${ props => props.theme.inverseColor };
    }

    &.active {
        border-bottom: 1px solid ${ props => props.theme.inverseColor };
        color: ${ props => props.theme.inverseColor };
    }
`
