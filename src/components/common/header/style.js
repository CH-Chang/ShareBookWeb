import styled from "styled-components";

import { Row as antdRow, Col as antdCol, Form as antdForm, Input as antdInput, Button as antdButton } from "antd";
import { Link } from "react-router-dom";


export const TopRow = styled(antdRow)``;
export const BtmRow = styled(antdRow)``;
export const LogoCol = styled(antdCol)``;
export const SearchCol = styled(antdCol)``;
export const FuncCol = styled(antdCol)``;
export const MemCol = styled(antdCol)``;

export const Wrapper = styled.header`
    background-color: #FFFFFF;
    padding-top: 4vmin;
    padding-bottom: 1.5vmin;
`;

export const LogoBox = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

export const LogoLink = styled(Link)``

export const Logo = styled.img`
    width: 8vmin;
`

export const LogoTitle = styled.p`
    display: inline-block;

    margin-top: 1vmin;

    font-family: "Noto Sans TC";
    font-weight: 100;
    font-size: 1.8vmin;
    line-height: 1;
`

export const SearchBox = styled.div`
    width: 100%;
    
`

export const SearchFormBox = styled.div`
    width: 100%;
`

export const SearchForm = styled(antdForm)`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

`

export const SearchFormItemInput = styled(antdForm.Item)`
    flex: 5;

    margin: 0 0.5rem 0 0.5rem;
`

export const SearchInput = styled(antdInput)`
    width: 100%;
    height: 4vmin;

    padding: 1vmin 3.5vmin 1vmin 3.5vmin;

    border: 1px solid #707070;
    border-radius: 1.5rem;

    font-family: 'Noto Sans TC';
    font-weight: 300;
    font-size: 1.5vmin;
    color: #141414;
`

export const SearchFormItemCommit = styled(antdForm.Item)`
    flex: 1;

    margin: 0 0.5rem 0 0.5rem;
`

export const SearchCommit = styled(antdButton)`
    width: 100%;
    height: 4vmin;

    border: 1px solid #F2BC25;
    border-radius: 1.5rem;

    background-color: #F2BC25;

    font-family: 'Noto Sans TC';
    font-weight: 300;
    font-size: 1.5vmin;
    color: #141414;



    &:hover{
        background-color: #ffffff;
        color: #F2BC25;
    }
    
`

export const SearchSuggestBox = styled.div`
    margin-top: 1vmin;
    margin-left: 3vmin;
    margin-right: 3vmin;
`

export const SearchSuggest = styled(Link)`
    padding: 0 1vmin 0 1vmin;

    font-family: "Noto Sans TC";
    font-weight: 300;
    font-size: 1.5vmin;
    color: #141414;
`

export const QuickLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
`

export const QuickLink = styled(Link)`
    font-size: 3vmin;
    color: #141414;

    flex: 1;
`

export const MemberBox = styled.div`
    margin-left: auto;
    display: inline-block;

    margin-top: 3vmin;
`

export const MemberTitle = styled.p`
    display: inline-block;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    font-weight: 300;
    color: #141414;
`

export const MemberName = styled.p`
    display: inline-block;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    font-weight: 500;
    color: #141414;
`

export const MemberLink = styled(Link)`
    display: inline-block;

    margin-left: 0.2vmin;
    margin-right: 0.2vmin;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    font-weight: 300;
    color: #F2BC25;
    text-decoration: underline;
`