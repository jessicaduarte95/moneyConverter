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
`

export const NameStyled = styled.div `
font: bolder 5rem "Fira Sans", serif;
--tw-text-opacity: 1;
color: rgba(0,168,104,var(--tw-text-opacity));

@media screen and (min-width: 300px) and (max-width: 1400px){
    font: bolder 3.5rem "Fira Sans", serif;
}
`

export const DataStyled = styled.div `
 font-size: 1rem;
 padding-top: 1.4rem;
 font-family: 'roboto';
 margin-Left: 2rem;

 @media screen and (min-width: 300px) and (max-width: 1400px){
    font-size: 0.9rem;
    padding-top: 1.5rem;
}
`