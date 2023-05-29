import styled from "styled-components";

export const PhotoStyled = styled.div `
width: 50%;
display: flex;
    align-items: flex-end;
img{
    width: 100%;
    border-top-left-radius: 100%
};
@media screen and (max-width: 800px){
    img{
        width: 130%;
    }
}

@media screen and (max-width: 700px){
    img{
        width: 150%;
    }
}

@media screen and (max-width: 600px){
    img{
       display: none;
    }
}
`