import styled from "styled-components";

import { Link as ReactRouterDomLink } from "react-router-dom";

export const TitleBox = styled.div``

export const Title = styled.h3`

    display: inline-block;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    color: #141414;
    font-weight: 500;
    line-height: 1;

    padding-bottom: 0.5vmin;

    border-bottom: 3px solid #F2BC25;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2vmin;
`

export const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;

    padding-top: 1.2vmin;
    padding-bottom: 1.2vmin;
    padding-left: 1.5vmin;
    padding-right: 1.5vmin;

    margin-bottom: 0.1vmin;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    color: #141414;

    > span:first-child {
        margin-right: 2vmin;
    }

    > span:last-child{
        margin-left: auto;
    }

    &:hover{
        background: #ddd;
        transition: background-color linear .2s;

        border-radius: 5px;
    }

    
`

export const Link = styled(ReactRouterDomLink)`

    
    
    
    

`