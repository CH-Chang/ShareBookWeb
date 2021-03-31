import styled from "styled-components";

import { Form as antdForm, Input as antdInput, Button as antdButton } from "antd";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    margin: auto;

    width: 65vmin;

    border-radius: 2vmin;

    background: rgba(255,255,255,0.5);

    padding: 12vmin 10vmin 12vmin 10vmin;
`

export const TitleBox = styled.div`

    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

export const Title = styled.p`

    font-family: "Noto Sans TC";
    font-size: 2.2vmin;
    font-weight: 500;
    line-height: 1;
    color: #141414;

`

export const FormBox = styled.div`
    margin-top: 8vmin;
`

export const Form = styled(antdForm)`

`


export const FormItemAccountInput = styled(antdForm.Item)`
    
`

export const FormItemPasswordInput = styled(antdForm.Item)`

    margin-bottom: 5vmin;
    
`

export const FormItemHint = styled(antdForm.Item)`
    margin-bottom: 5vmin;
    text-align: center;
`

export const FormItemSubmitButton = styled(antdForm.Item)`
    text-align: center;
`

export const AccountInput = styled(antdInput)`
    padding: 1vmin 0;

    text-align: center;

    border: 0;
    border-bottom: 2px solid #d4d4d4;

    background: transparent;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;
`

export const PasswordInput = styled(antdInput.Password)`
    padding: 1vmin 0;

    border: 0;
    border-bottom: 2px solid #d4d4d4;

    background: transparent;


    > input {
        background: transparent;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: 1.5vmin;
        font-weight: 300;
        line-height: 1;
        color: #141414;
    }
`

export const SubmitButton = styled(antdButton)`
    width: 25%;
    height: 4vmin;

    background: #F2BC25;
    border-radius: 2vmin;

    font-family: "Noto Sans TC";
    font-size: 1.6vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;

`

export const Hint = styled(Link)`
    margin: 0 1vmin;

    font-family: "Noto Sans TC";
    font-size: 1.6vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;
`