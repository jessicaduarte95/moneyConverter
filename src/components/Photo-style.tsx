import styled from "styled-components";

export const PhotoStyled = styled.div `
    width: 50%;
    display: flex;
        align-items: flex-end;
    img{
        width: 100%;
        border-top-left-radius: 100%
    };

@media screen and (max-width: 1000px){
    width: 0%;
    img{
       display: none;
    }
}
`