import styled from "styled-components";

import { Tabs as antdTabs } from "antd";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    padding: 3vmin 0 3vmin 0;
`

export const TitleBox = styled.div`
    
`

export const Title = styled.p`
    display: inline-block;

    padding: 0 1vmin 0.1vmin 1vmin;

    border-bottom: 4px solid #F2BC25;

    font-family: "Noto Sans TC";
    font-size: 1.6vmin;
    font-weight: 700;
    line-height: 1;
`

export const ContentBox = styled.div`
    margin-top: 2vmin;
`

export const Tabs = styled(antdTabs)`
    font-family: "Noto Sans TC";
`

export const TabPane = styled(antdTabs.TabPane)`
`




export const ProductsBox = styled.div`
    width: 100%;

    margin-top: 2vmin;

    padding: 0 0 2vmin 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;

    overflow-x: auto;

    ::-webkit-scrollbar {
        height: 1vmin;
    }

    ::-webkit-scrollbar-track {
        background: #FFFFFF;
    }

    ::-webkit-scrollbar-thumb {
        background: #B4B4B4;
        border-radius: 20vmin;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    scrollbar-color: #B4B4B4 #ffffff ;
	scrollbar-width: thin;

    
`

export const ProductBoxLink = styled(Link)``;

export const ProductBox = styled.div`
    margin: 0 1vmin;

    width: 22vmin;

    border: 1px solid #B4B4B4;
    border-radius: 2vmin;

    padding: 2.5vmin 3vmin 2.5vmin 3vmin;
`

export const ProductImgBox = styled.div`
    margin: 0 auto;

    

    width: 15vmin;
    height: 18vmin;
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`

export const ProductTitleBox = styled.div`
    width: 100%;

    margin-top: 2vmin;

     
    overflow: hidden;
    white-space: nowrap;
`

export const ProductTitle = styled(Link)`
    width: 100%;

    font-family: "Noto Sans TC";
    font-size: 1.6vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;
`

export const ProductStoreBox = styled.div`
    margin-top: 0.5vmin;
`

export const ProductStore = styled(Link)`
    font-family: "Noto Sans TC";
    font-size: 1.2vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;
`

export const ProductPriceBox = styled.div`
    margin-top: 1.5vmin;


`


export const ProductPrice = styled.p`

    font-family: "Noto Sans TC";
    font-size: 1.4vmin;
    font-weight: 500;
    line-height: 1;
    text-align: end;
    color: #141414;
    

    > span {
        margin-left: 0.5vmin;

        color: #ff0000;
        font-size: 2vmin;
    }
`