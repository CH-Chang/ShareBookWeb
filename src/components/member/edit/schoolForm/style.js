import styled from "styled-components"
import { Form as antdForm, Cascader as antdCascader, Input as antdInput, Button as antdButton, Row as antdRow, Col as antdCol } from "antd";

export const Wrapper = styled.div`
    padding: 1vmin;
`

export const FormRow = styled(antdRow)``

export const FormCol = styled(antdCol)``

export const Form = styled(antdForm)``

export const FormItemSchool = styled(antdForm.Item)`
`

export const FormSchool = styled(antdCascader)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;

    background-color: transparent;

    > input {
        border: 0;
        border-bottom: 2px solid #d4d4d4;
        font-size: 1.5vmin;

        text-align: center;
    }

    > span {
        text-align: center;
    }
`

export const FormItemSchoolEmail = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormSchoolEmail = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemValidateCode = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormValidateCode = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemGetValidateCode = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormGetValidateCode = styled(antdButton)`
    width: 100%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    border: 1px solid #F2BC25;
    border-radius: 999rem;
    background: #F2BC25;

    &:hover{
        
    }
`

export const FormItemSubmit = styled(antdForm.Item)`
`

export const FormSubmit = styled(antdButton)`
    width: 100%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    border: 1px solid #F2BC25;
    border-radius: 999rem;
    background: #F2BC25;

    &:hover{
        
    }
`