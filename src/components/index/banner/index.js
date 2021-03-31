import React from "react";

import { Fragment } from "react";

import Container from "../../common/container/index";

import { Wrapper, Banner, BannerLink } from "./style";

const Index = (props) => {

    const { banner } = props;

    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <BannerLink to={banner.link}>
                        <Banner src={banner.img} alt={banner.alt}/>
                    </BannerLink>
                </Container>
            </Wrapper>
        </Fragment>
    )
}

export default Index;