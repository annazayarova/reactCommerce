import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopHat = ({ total=0 }) => {
    return (
        <Wrapper>
            <Logo to='/'>
                ISerbat
            </Logo>

            <Cart to='/cart'>
                Cart <Items>{ total }</Items>
            </Cart>
        </Wrapper>
    );
}

export default TopHat;

const Cart = styled(Link)`
    align-items: center;
    color: ${ props => props.theme.inverseColor };
    display: flex;
    font-size: 1em;
    letter-spacing: 1px;
    position: absolute;
    right: 40px;
    text-transform: uppercase;
    top: 40px;

    @media(max-width: 815px) {
        top: 20px;
        right: 40px;
    }

    @media(max-width: 555px) {
        top: 20px;
        right: 20px;
    }
`
const Items = styled.span`
    background: ${ props => props.theme.greyColor };
    border-radius: 50%;
    color: ${ props => props.theme.mainColor };
    display: flex;
    font-family: ${ props => props.theme.primaryFont };
    font-size: 18px;
    height: 30px;
    justify-content: center;
    margin-left: 5px;
    width: 30px;
`

const Logo = styled(Link)`
    color: ${ props => props.theme.inverseColor };
    font-family: ${ props => props.theme.primaryFont };
    font-size: 5vw;
    letter-spacing: 2vw;
    text-decoration: none;
    text-transform: uppercase;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0;
    width: 100%;
`
