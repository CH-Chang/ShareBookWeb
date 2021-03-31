import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
    width: 100%;

    padding: 2vmin 0 2vmin 0;

    margin-top: 5vmin;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

export const DeclarationBox = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const DeclarationCopyright = styled.p`
    font-family: "Noto Sans TC";
    font-size: 1.4vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;
`

export const DeclarationCookies = styled.p`
    margin-top: 1.0vmin;

    font-family: "Noto Sans TC";
    font-size: 1.4vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;
`

export const FuncLinkBox = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 1.8vmin;
`

export const FuncLink = styled(Link)`

    margin: 0 0.5vmin;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;
`