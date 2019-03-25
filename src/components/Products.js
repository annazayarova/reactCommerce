import React from 'react';
import styled from 'styled-components';

import Product from './Product';
import { ProductConsumer } from '../context';

const Products = () => {
    return (
        <Wrapper>
             <ProductConsumer>
                { value => {
                    return value.products.map(product => {
                        return (
                            <Product key={ product.id }
                                product={ product }
                            />
                        )
                    })
                }}
            </ProductConsumer>
        </Wrapper>
    );
}

export default Products;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
`
