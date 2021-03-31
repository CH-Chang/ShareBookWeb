import React from "react";

import { Fragment } from "react";

import { Wrapper, DeclarationBox, DeclarationCopyright, DeclarationCookies, FuncLinkBox, FuncLink } from "./style";


const Index  = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <DeclarationBox>
                    <DeclarationCopyright>Copyright © 2021 SHARE BOOK 學步</DeclarationCopyright>
                    <DeclarationCookies>本網站使用Cookies記錄與存取您的瀏覽使用訊息，若繼續使用網站，即表明您同意 cookie 及其他類似技術的使用</DeclarationCookies>
                </DeclarationBox>
                <FuncLinkBox>
                    <FuncLink>聯絡學步</FuncLink>
                    <FuncLink>相關條款</FuncLink>
                    <FuncLink>團隊招募</FuncLink>
                    <FuncLink>學步APP</FuncLink>
                </FuncLinkBox>
            </Wrapper>
        </Fragment>
    )
}


export default Index;