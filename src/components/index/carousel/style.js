import styled from "styled-components";

import { Carousel as antdCaroused } from "antd";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    background-color: #555555;
    height: 50vmin;
`

export const CarouselBox = styled.div`
    width: 100%;
    height: 50vmin;
`

export const Carousel = styled(antdCaroused)`
    width: 100%;
    height: 50vmin;
`

export const CarouselItem = styled.div`
    width: 100%;
    height: 50vmin;
`

export const CarouselLink = styled(Link)``

export const CarouselImage = styled.img`
    width: 100%;
    height: 50vmin;
    object-fit: cover;
`