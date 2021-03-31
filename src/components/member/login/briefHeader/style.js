import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.header`
    padding: 4vmin 0 4vmin 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const LogoBox = styled.div`
    display: inline-block;
`

export const LogoLink = styled(Link)``

export const Logo = styled.img`
    width: 8vmin;
`