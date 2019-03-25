import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Button = props => {
    const {
        disabledLabel,
        inCart,
        label
    } = props;

    const handleClick = (event) => {
        const {
            history,
            onClick,
            to
        } = this.props;

        if (to) {
            return history.push(to);
        }

        if (typeof onClick === 'function') {
            return onClick(event);
        }
    }

    return (
        <ButtonWrapper disabled = { inCart }
            onClick={ handleClick }
        >
            {
                inCart ?
                    <Label>
                        { disabledLabel }
                    </Label>
                    :
                    <Label>
                        { label }
                    </Label>
            }

        </ButtonWrapper>
    );
}

export default withRouter(Button);

const ButtonWrapper = styled.button`
    background: transparent;
    border: 1px solid ${ props => props.theme.greyColor };
    color: ${ props => props.theme.inverseColor }
    corder-radius: 0;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 15px 30px;
    text-transform: uppercase;
    transition: all 0.5s ease;

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
