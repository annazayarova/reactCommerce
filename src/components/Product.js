import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const Product = ({ product }) => {
    const {
        id,
        img,
        inCart,
        onClick,
        price,
        title
    } = product;

    return (
        <ProductWrapper>
            <Card onClick={ onClick }>
                <Link to='/details'>
                    <Img src={ img } alt='product' />
                </Link>

                <Button inCart={ inCart }
                    label='add to cart'
                    disabledLabel="added"
                />
            </Card>
        </ProductWrapper>
    );
}

export default Product;

const ProductWrapper = styled.div`
    -ms-flex: auto;
    box-sizing: border-box;
    flex-basis: 33.33333%;
    padding: 15px;
    position: relative;
    width: 259px;

    @media(max-width: 815px) {
        flex-basis: 50%;
    }

    @media(max-width: 555px) {
        flex-basis: 100%;
    }
`
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Img = styled.img`
margin-bottom: 10px;
`
