import React, { Component } from 'react';

import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    setProducts = () => {
        let tempProducts = [];

        storeProducts.forEach(item => {
            const singleItem = { ...item };

            tempProducts = [ ...tempProducts, singleItem ]
        })

        this.setState(() => {
            return { products: tempProducts }
        })
    }

    componentDidMount() {
        this.setProducts();
    }

    addToCart = () => {
        console.log('cart')
    }

    handleDetail = () => {
        console.log('detail')
    }

    render() {
        const { children  } = this.props;

        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                handleDetail: this.handleDetail,
            }}>
                { children }
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
