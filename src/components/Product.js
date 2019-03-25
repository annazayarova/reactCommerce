import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

const Product = ({ product }) => {
    const {
        img1,
        price,
        title
    } = product;

    return (
        <ProductWrapper>
            <Card>
                <Link to='/details'>
                    <Img src={ img1 } alt='Irina Serbat' />
                </Link>

                <CardFooter>
                    <span>{ title }</span>

                    <Price>$ { price }</Price>
                </CardFooter>
            </Card>
        </ProductWrapper>
    );
}

export default Product;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const CardFooter = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1em;
`

const Img = styled.img`
    margin-bottom: 10px;
    transition: all 0.6s ease;
    overflow: hidden;
    &:hover {
        transform: scale(1.02)
    }
`

const Price = styled.span`
    margin-top: 5px;
    font-family: ${ props => props.theme.secondaryFont };
    color: ${ props => props.theme.greyColor };
    font-size: 1.1em;
`

const ProductWrapper = styled.div`
    box-sizing: border-box;
    flex: auto;
    padding: 20px;
    position: relative;
    width: 33.3333333%;

    @media(max-width: 815px) {
        flex-basis: 50%;
    }

    @media(max-width: 555px) {
        flex-basis: 100%;
        padding: 20px 0;
    }
`
