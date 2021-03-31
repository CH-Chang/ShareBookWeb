import React from "react";

import { Fragment } from "react";

import Container from "../../common/container";

import { Wrapper, TitleBox, Title, ContentBox, Tabs, TabPane, ProductsBox, ProductBox, ProductImgBox, ProductImg, ProductTitleBox, ProductTitle, ProductStoreBox, ProductStore, ProductPriceBox, ProductPrice, ProductBoxLink } from "./style";


const Index = (props) => {
    const { shopbacks } = props;

    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <TitleBox>
                        <Title>學步導購</Title>
                    </TitleBox>

                    <ContentBox>
                        <Tabs centered defaultActiveKey={1}>
                            {
                                shopbacks.map((shopback, idx) => {
                                    return (
                                        <TabPane tab={shopback.storeName} key={idx}>
                                            <ProductsBox>
                                                {
                                                    shopback.product.map((product, prodidx) => {
                                                        return (
                                                            <ProductBoxLink to={"/shopback/product/id="+product.productId}>
                                                                <ProductBox>
                                                                    <ProductImgBox>
                                                                        <ProductImg src={product.productImg}/>
                                                                    </ProductImgBox>

                                                                    <ProductTitleBox>
                                                                        <ProductTitle to={"/shopback/product/id="+product.productId}>{product.productName}</ProductTitle>
                                                                    </ProductTitleBox>

                                                                    <ProductStoreBox>
                                                                        <ProductStore to={"/shopback/store/id="+shopback.storeId}>{shopback.storeName}</ProductStore>
                                                                    </ProductStoreBox>

                                                                    <ProductPriceBox>
                                                                        <ProductPrice>{product.productCurrency}<span>{product.productPrice}</span></ProductPrice>
                                                                    </ProductPriceBox>
                                                                </ProductBox>
                                                            </ProductBoxLink>
                                                        )
                                                    })
                                                }
                                            </ProductsBox>
                                        </TabPane>
                                    )
                                })
                            }
                        </Tabs>
                    </ContentBox>
                </Container>
            </Wrapper>
        </Fragment>
    )
}


export default Index;
