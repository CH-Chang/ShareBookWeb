import React from "react";

import { Fragment } from "react";

import Container from "../../common/container/index";

import { Wrapper, CarouselBox, Carousel, CarouselItem, CarouselImage, CarouselLink } from "./style";

export default (props) => {
    const { carousel } = props;

    return (
        <Fragment>
            <Wrapper>
                <Container>
                    <CarouselBox>
                        <Carousel effect="fade" autoplay>
                            {
                                carousel.map((img, idx) => {
                                    return (
                                        <CarouselItem>
                                            <CarouselLink to={img.link}>
                                                <CarouselImage src={img.img}/>
                                            </CarouselLink>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </Carousel>
                    </CarouselBox>
                </Container>
            </Wrapper>
        </Fragment>
    )
}