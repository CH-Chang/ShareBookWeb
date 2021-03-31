import React from "react";

import { Fragment } from "react";

import { HomeOutlined, NotificationOutlined, EditOutlined, ShoppingOutlined, RightOutlined } from "@ant-design/icons"

import { TitleBox, Title, ContentBox, LinkBox, Link } from "./style";

const Index = (props) => {
    return (
        <Fragment>
            <TitleBox>
                <Title>相關連結</Title>
            </TitleBox>
            <ContentBox>
                <Link to="/member/home">
                    <LinkBox>
                        
                            <HomeOutlined />
                            帳號總覽
                            <RightOutlined />
                        
                    </LinkBox>
                </Link>
                <Link to="/member/edit">
                    <LinkBox>
                        
                            <EditOutlined />
                            修改資料
                            <RightOutlined />
                        
                    </LinkBox>
                </Link>
                <Link to="/member/notifications">
                    <LinkBox>
                        <NotificationOutlined />
                        我的通知
                        <RightOutlined />
                    </LinkBox>
                </Link>
                <Link to="/member/purchases">
                    <LinkBox>
                        <ShoppingOutlined />
                        我的購買
                        <RightOutlined />
                        
                    </LinkBox>
                </Link>
                
            </ContentBox>
        </Fragment>
    )
}

export default Index;