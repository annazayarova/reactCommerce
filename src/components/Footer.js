import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <span>
                Site by

                <Coder href="http://annazayarova.com" target="_black">
                    annazayarova.com
                </Coder>
            </span>

            <span>
                Copyright &copy; 2019 Irina Serbat. All rights reserved
            </span>
        </Wrapper>
    );
}

export default Footer;

const Coder = styled.a`
    margin-left: 5px;
    text-decoration: none;
    color: ${ props => props.theme.inverseColor };
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: ${ props => props.theme.greyColor };
    padding: 20px 30px;
    line-height: 1.5em;
`
