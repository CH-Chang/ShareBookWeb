import React from "react";

import { Fragment } from "react"

import logo from "../../../assets/svg/logo.svg";

import Container from "../container/index";

import { Wrapper, LogoCol, ContactCol, AboutCol, AppCol, MainRow, LogoBox, Logo, LogoTitle, LogoSlogan, ContactBox, ContactTitle, ContactItem, AboutBox, AboutTitle, AboutItem, AppBox, AppTitle, AppItem, DeclarationRow, DeclarationBox, DeclarationCopyright, DeclarationCookies} from "./style";

const Index = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <MainRow gutter={16} align="center">
                        <LogoCol lg={6}>
                            <LogoBox>
                                <Logo src={logo} />
                                <LogoTitle>學步</LogoTitle>
                                <LogoSlogan>我的書就是你的書</LogoSlogan>
                            </LogoBox>
                        </LogoCol>
                        <ContactCol lg={6}>
                            <ContactBox>
                                <ContactTitle>聯絡學步</ContactTitle>
                                <ContactItem>新北市淡水區英專路191號</ContactItem>
                                <ContactItem>02-22224444</ContactItem>
                                <ContactItem>Facebook 粉絲專頁</ContactItem>
                                <ContactItem>Instagram</ContactItem>
                            </ContactBox>
                        </ContactCol>
                        <AboutCol lg={6}>
                            <AboutBox>
                                <AboutTitle>關於學步</AboutTitle>
                                <AboutItem>關於學步</AboutItem>
                                <AboutItem>團隊招募</AboutItem>
                                <AboutItem>學步會員條款</AboutItem>
                                <AboutItem>隱私權條款</AboutItem>
                            </AboutBox>
                        </AboutCol>
                        <AppCol lg={6}>
                            <AppBox>
                                <AppTitle>學步APP</AppTitle>
                                <AppItem>Google Play</AppItem>
                                <AppItem>App Store</AppItem>
                            </AppBox>
                        </AppCol>
                    </MainRow>
                    <DeclarationRow align="middle">
                        <DeclarationBox>
                            <DeclarationCopyright>Copyright © 2021 SHARE BOOK 學步</DeclarationCopyright>
                            <DeclarationCookies>本網站使用Cookies記錄與存取您的瀏覽使用訊息，若繼續使用網站，即表明您同意 cookie 及其他類似技術的使用</DeclarationCookies>
                        </DeclarationBox>
                    </DeclarationRow>
                </Container>
            </Wrapper>
        </Fragment>
    )
}

export default Index;  