import React from "react";

import { Fragment } from "react";

import logo from "../../../../assets/svg/logo.svg";

import { Wrapper, LogoBox, Logo, LogoLink } from "./style";


const Index  = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <LogoBox>
                    <LogoLink to="/">
                        <Logo src={logo}/>
                    </LogoLink>
                </LogoBox>
            </Wrapper>
        </Fragment>
    )
}


export default Index;