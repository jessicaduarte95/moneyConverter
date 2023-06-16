import styled from "styled-components";

export const CurrencyStyled = styled.div `
    width: 50%;
    padding: 50px;

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`

export const NameDataStyled = styled.div `
    display: flex;

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

    @media screen and (max-width: 600px){
        font-size: 2.5rem
    }
`

export const LineNameStyled = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    div {
        background-color: rgba(0,168,104,var(--tw-text-opacity));
        width: 11.5rem;
        height: 0.3rem;
        border-radius: 10px;
        margin: 1rem 0.5rem 0 0;
    };
    p{
        font-size: 2rem;
    }

    @media screen and (max-width: 1400px){
        justify-content: center;
        div {
            width: 8.5rem;
            height: 0.3rem;
            margin: 0.5rem 0.5rem 0 0;
        };
        p{
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 600px){
        justify-content: flex-start;
        div {
            width: 5.5rem;
            margin-left: 0.3rem;
        }
        p {
            font-size: 1rem;
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

export const ContainerConverter = styled.div `
    margin-top: 6rem;

    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const MoneyConverter = styled.div `
    display: flex;
    flex-direction: column;

    p {
        font-size: 1.1rem;
        margin-right: 5.5rem;
        margin-bottom: 0.5rem;
        font-style: normal;
        font-weight: 540;
        line-height: 21px;
        color: rgb(46, 55, 66);
    }

    input {
        width: 10.5rem;
        height: 3rem;
        background-color: #fff;
        border-radius: 0.35rem;
        border: 1px solid #E3E0E0;
        outline: 0;
        box-shadow: 5px 5px 5px #EBEBEB;
        padding: 0.5rem
    }
`

export const ButtonConverter = styled.button `
    height: 3.4rem;
    width: 8rem;
    background-color: rgb(140, 156, 173);
    border-radius: 0.35rem;
    border: 1px solid green;
    margin-Top: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover {
        background-color: #A4B1C0;
    }

    p {
        color: #fff;
        margin-Left: 0.5rem;
        font-size: 1rem;
    }
`

export const TypeMoney = styled.div `
    margin-Top: 1.8rem;

    p {
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 540;
        line-height: 21px;
        color: rgb(46, 55, 66);
    }
`

export const CheckboxStyeld = styled.div `
    display: flex;
    margin-Top: 1.3rem;

`

export const ContainerResultStyeld = styled.div `
    margin-top: 3rem;
`

export const ButtonResultStyeld = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 5.5rem;
    border-radius: 0.35rem;
    border: 1px solid #9698A0;
    box-shadow: 3px 5px 5px #C3C3C3;

    :hover {
        background-color: #EAEAEA;
    }
    
    p {
        font-weight: bold;
        margin-Left: 0.5rem
    }
`

export const ResultStyeld = styled.p `
    margin-top: 2rem;
    font-size: 1.1rem;
    font-weight: bold;
`

export const ResultMoneyStyeld = styled.p `
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-family: "Fira Sans", serif;
    --tw-text-opacity: 1;
    color: rgba(0,168,104,var(--tw-text-opacity));
`

export const ResultCompraStyeld = styled.p `
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #353535;
`