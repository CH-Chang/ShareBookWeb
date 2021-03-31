import React from "react";

import { Fragment } from "react"

import Container from "../../common/container/index";

import { Wrapper, TitleBox, Title, ProductsBox, ProductBox, ProductImgBox, ProductImg, ProductTitleBox, ProductTitle, ProductStoreBox, ProductStore, ProductPriceBox, ProductPrice, ProductBoxLink } from "./style";

const Index  = (props) => {

    const { title, products } = props;

    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <TitleBox>
                        <Title>{title}</Title>
                    </TitleBox>

                    <ProductsBox>

                        {
                            products.map((product, idx) => {
                                return (
                                    <ProductBoxLink to={"/product/id="+product.productId}>
                                        <ProductBox>
                                            <ProductImgBox>
                                                <ProductImg src={product.productImg}/>
                                            </ProductImgBox>

                                            <ProductTitleBox>
                                                <ProductTitle to={"/product/id="+product.productId}>{product.productName}</ProductTitle>
                                            </ProductTitleBox>

                                            <ProductStoreBox>
                                                <ProductStore to={"/store/id="+product.storeId}>{product.storeName}</ProductStore>
                                            </ProductStoreBox>

                                            <ProductPriceBox>
                                                <ProductPrice>{product.productCurrency}/{product.productUnit}<span>{product.productPrice}</span></ProductPrice>
                                            </ProductPriceBox>
                                        </ProductBox>
                                    </ProductBoxLink>
                                )
                            })
                        }
                        

                        

                        

                        

                    </ProductsBox>
                    
                </Container>
            </Wrapper>
        </Fragment>
    )
}

export default Index;