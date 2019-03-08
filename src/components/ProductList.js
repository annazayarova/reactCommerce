import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Product from './Product';
import Title from './Title';
import { storeProducts, detailProduct } from '../data';

class ProductList extends PureComponent {
    state={
        products: storeProducts,
        detailProduct: detailProduct
    }

    render() {

        return (
            <>
                <Title title='Products' />

                <ProductsWrapper>
                    {
                        this.state.products.map(product =>
                            <Product key={ product.id }
                                product={ product }
                            />
                        )
                    }
                </ProductsWrapper>
            </>
        );
    }
}

export default ProductList;

const ProductsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`
