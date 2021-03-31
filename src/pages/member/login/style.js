import styled from "styled-components";

import { notification as antdNotification } from "antd";

export const BackgroundImg = styled.div`
    min-width: 100%;
    min-height: 100vh;

    background-image: url(${props => props.backgroundImg});
    background-size: cover;
`

export const BackgroundAlpha = styled.div`
    min-width: 100%;
    min-height: 100vh;
    background:rgba(255,255,255,0.5);
`
