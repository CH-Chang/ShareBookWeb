import React from "react";

import { Fragment } from "react";
import { StarOutlined, ShoppingOutlined, WalletOutlined, AppstoreOutlined, BookOutlined } from '@ant-design/icons';

import Container from "../../common/container/index";


import { Wrapper, FuncsBox, FuncBox, FuncLink, FuncIconBox, FuncTitleBox, FuncTitle } from "./style";

const Index = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <FuncsBox>
                        <FuncBox>
                            <FuncLink to="/">
                                <FuncIconBox><StarOutlined /></FuncIconBox>
                            </FuncLink>
                            <FuncTitleBox><FuncTitle>學步官書</FuncTitle></FuncTitleBox>
                        </FuncBox>
                        <FuncBox>
                            <FuncLink to="/">
                                <FuncIconBox><ShoppingOutlined /></FuncIconBox>
                            </FuncLink>
                            <FuncTitleBox><FuncTitle>學步導購</FuncTitle></FuncTitleBox>
                        </FuncBox>
                        <FuncBox>
                            <FuncLink to="/">
                                <FuncIconBox><WalletOutlined /></FuncIconBox>
                            </FuncLink>
                            <FuncTitleBox><FuncTitle>學步錢包</FuncTitle></FuncTitleBox>
                        </FuncBox>
                        <FuncBox>
                            <FuncLink to="/">
                                <FuncIconBox><AppstoreOutlined /></FuncIconBox>
                            </FuncLink>
                            <FuncTitleBox><FuncTitle>學步APP</FuncTitle></FuncTitleBox>
                        </FuncBox>
                        <FuncBox>
                            <FuncLink to="/">
                                <FuncIconBox><BookOutlined /></FuncIconBox>
                            </FuncLink>
                            <FuncTitleBox><FuncTitle>關於學步</FuncTitle></FuncTitleBox>
                        </FuncBox>
                        
                    </FuncsBox>
                </Container>
            </Wrapper>
        </Fragment>
    )
}

export default Index;