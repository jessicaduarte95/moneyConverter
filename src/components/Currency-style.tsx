import styled from "styled-components";

export const CurrencyStyled = styled.div `
    width: 50%;
    padding: 50px;

    @media screen and (max-width: 600px){
        width: 300%;
    }
`

export const NameDataStyled = styled.div `
    display: flex;
    height: 28%;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`

export const NameStyled = styled.div `
    font: bolder 5rem "Fira Sans", serif;
    --tw-text-opacity: 1;
    color: rgba(0,168,104,var(--tw-text-opacity));

    @media screen and (max-width: 1400px){
        font: bolder 3.5rem "Fira Sans", serif;
    }
`

export const LineNameStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    div {
        background-color: rgba(0,168,104,var(--tw-text-opacity));
        width: 11.5rem;
        height: 0.5rem;
        border-radius: 10px;
        margin: 1rem 0.5rem 0 0;
    };
    p{
        font-size: 2rem;
    }

    @media screen and (min-width: 300px) and (max-width: 1400px){
        div {
            width: 8.5rem;
            height: 0.5rem;
            margin: 0.5rem 0.5rem 0 0;
        };
        p{
            font-size: 1.2rem;
        }
    }

`

export const DataStyled = styled.div `
    font-size: 1rem;
    padding-top: 2.5rem;
    font-family: 'roboto';
    margin-Left: 2rem;

    @media screen and (max-width: 1400px){
        font-size: 0.9rem;
        padding-top: 1.6rem;
    }

    @media screen and (max-width: 600px){
        margin-Left: 0;
    }
`