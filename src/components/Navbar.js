import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

import { ReactComponent as Logo } from '../logo.svg';

const Navbar = () => {
    return (
        <NavWrapper>
            <LinkLogo to='/'>
                <Logo />
            </LinkLogo>

            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <StyledLink to='/' >
                        products
                    </StyledLink>
                </li>
            </ul>

            <Link to='/cart'>
                <Button icon='cart-plus'
                    label='cart'
                />
            </Link>
        </NavWrapper>
    );
}

export default Navbar;

const LinkLogo = styled(Link)`
    width: 60px;
    margin-left: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--text)
`

const NavWrapper = styled.nav`
    align-items: center;
    background: var(--grey);
    display: flex;
    font-size: 14px;
    height: 60px;
    justify-content: space-between;
    position: fixed;
    text-transform: capitalize;
    top: 0;
    width: 100%;
`
