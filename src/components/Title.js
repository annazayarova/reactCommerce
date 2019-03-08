import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
    return (
        <Wrapper>
            { title }
        </Wrapper>
    );
}

export default Title;

const Wrapper = styled.h1`
color: var(--text);
font-size; 18px;
font-weight: bold;
margin-left: 10px;
`
