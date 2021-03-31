import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    padding: 3vmin 0 3vmin 0;
`

export const FuncsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;

    padding: 0 10vmin 0 10vmin;
`

export const FuncBox = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

export const FuncLink = styled(Link)``

export const FuncIconBox = styled.div`
    width: 8.5vmin;
    height: 8.5vmin;

    background-color: #ffffff;

    border: solid 2px #F2BC25;
    border-radius: 999rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    font-size: 3vmin;

    &:hover{
        background-color: #F2BC25;
        color: #ffffff;
    }
`

export const FuncTitleBox = styled.div`

    margin-top: 1.5vmin;

`

export const FuncTitle = styled.p`
    font-family: "Noto Sans TC";
    font-weight: 500;
    font-size: 1.5vmin;
    line-height: 1;
    color: #141414;

`