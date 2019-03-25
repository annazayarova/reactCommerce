import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const BackLink = ({ type='Bracelets', to }) => {
    return (
        <StyledLink to={ to }>
            <Span>
                Back to
            </Span>

            { type }
        </StyledLink>
    );
}

export default BackLink;

const Span = styled.span`
    color: ${ props => props.theme.greyColor };
    font-weight: 300;
    margin-right: 6px;
`

const StyledLink = styled(Link)`
    color: ${ props => props.theme.inverseColor }
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    display: inline;
    transition: all 0.5s ease;
    margin-bottom: 10px;
`
