import React from 'react';
import styled from 'styled-components';

const Button = props => {
    const {
        disabled,
        icon,
        label,
        onClick
    } = props;

    return (
        <ButtonWrapper disabled = { disabled } onClick={ onClick }>
            {
                icon &&
                    <i className={ `fas fa-${ icon }` } />
            }

            <Label>
                { label }
            </Label>
        </ButtonWrapper>
    );
}

export default Button;

const ButtonWrapper = styled.button`
background: transparent;
border: none;
color: var(--text);
corder-radius: 0;
cursor: pointer;
font-size: 14px;
padding: 0 20px;
text-transform: uppercase;
transition: all 0.5s ease;

&:hover {
    color: var(--link)
}

&:focus {
    outline: none
}

&:disabled {
    color: var(--darkGrey);
    cursor: default;
}
`
const Label = styled.span`
margin-left: 5px;
`
