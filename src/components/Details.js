import React, { Component } from 'react';
import styled from 'styled-components';

import { ProductConsumer } from '../context';

import BackLink from './BackLink';
import Button from './Button';

class Details extends Component {

    handleClick = () => {

    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        img1,
                        material,
                        rock,
                        inCart,
                        info,
                        price,
                        title
                    } = value.detailProduct;
                    return (
                        <Wrapper>
                            <ImgCol>
                                <BackLink to='/' />

                                <img src={ img1 } alt='product' />
                            </ImgCol>

                            <TextCol>
                                <Title>
                                    { title }
                                </Title>

                                <Price>
                                    ${ price }
                                </Price>

                                <Value>
                                    <Span>
                                        Type:
                                    </Span>

                                    { material }
                                </Value>

                                <Value>
                                    <Span>
                                        Rocks:
                                    </Span>

                                    { rock }
                                </Value>

                                <Info>
                                    { info }
                                </Info>

                                <Button disabledLabel="added"
                                    inCart={ inCart }
                                    label='add to cart'
                                    onClick={ this.handleClick }
                                />
                            </TextCol>
                        </Wrapper>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;

const ImgCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 20px;

    @media(max-width: 815px) {
        padding: 0;
        width: 100%;
    }
`

const TextCol = styled.div`
    width: 40%;
    padding: 20px;

    @media(max-width: 815px) {
        width: 100%;
        padding: 0;
    }
`

const Info = styled.div`
    margin-bottom: 40px;
`

const Value = styled.div`
    margin-bottom: 20px;
`

const Span = styled.span`
    font-weight: 700;
    margin-right: 6px;
`

const Price = styled.div`
    font-size: 1.2em;
    margin-bottom: 20px;
`

const Title = styled.div`
    font-size: 2em;
    margin: 60px 0 20px;
    font-weight: 900;
`

const Wrapper = styled.div`
    display: flex;

    @media(max-width: 815px) {
        flex-direction: column;
    }

`
