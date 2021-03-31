import styled from "styled-components";

import { Row, Col } from "antd";

export const MainRow = styled(Row)``;
export const LogoCol = styled(Col)``;
export const ContactCol = styled(Col)``;
export const AboutCol = styled(Col)``;
export const AppCol = styled(Col)``;
export const DeclarationRow = styled(Row)``

export const Wrapper = styled.footer`
    background-color: #FFFFFF;

    border-top: 4px solid #F2BC25;

    padding-top: 7vmin;
    padding-bottom: 7vmin;

    margin-top: 10vmin;
`

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

export const Logo = styled.img`
    width: 7vmin;
`

export const LogoTitle = styled.p`
    display: inline-block;

    margin-top: 0.5vmin;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    color: #141414;
    font-weight: 100;
    line-height: 1;
`

export const LogoSlogan = styled.p`
    display: inline-block;

    margin-top: 1.5vmin;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    font-weight: 100;
    line-height: 1;
`

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
`

export const ContactTitle = styled.dl`
    font-family: "Noto Sans TC";
    font-size: 1.7vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;

    margin-bottom: 1.5vmin;
`

export const ContactItem = styled.dt`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;

    margin-top: 1vmin;
    margin-bottom: 1vmin;
`

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
`

export const AboutTitle = styled.dl`
    font-family: "Noto Sans TC";
    font-size: 1.7vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;

    margin-bottom: 1.5vmin;
`

export const AboutItem = styled.dt`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;

    margin-top: 1vmin;
    margin-bottom: 1vmin;
`

export const AppBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
`

export const AppTitle = styled.dl`
    font-family: "Noto Sans TC";
    font-size: 1.7vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;

    margin-bottom: 1.5vmin;
`

export const AppItem = styled.dt`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;

    margin-top: 1vmin;
    margin-bottom: 1vmin;
`

export const DeclarationBox = styled.div`
    margin: 5vmin auto 0 auto;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const DeclarationCopyright = styled.p`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;
`

export const DeclarationCookies = styled.p`
    margin-top: 1.2vmin;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;
`