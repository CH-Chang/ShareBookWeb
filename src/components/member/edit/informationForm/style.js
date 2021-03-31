import styled from "styled-components"
import { Row as antdRow, Col as antdCol, Form as antdForm, Input as antdInput, Button as antdButton, Radio as antdRadio, DatePicker as antdDatePicker, Cascader as antdCascader } from "antd";

export const Wrapper = styled.div``

export const FormBox = styled.div`
    padding: 1vmin;
`

export const FormRow = styled(antdRow)``
export const FormCol = styled(antdCol)``

export const Form = styled(antdForm)``

export const FormItemAccount = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormAccount = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemEmail = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormEmail = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemEmailValidateCode = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormEmailValidateCode = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemGetEmailValidateCode = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormGetEmailValidateCode = styled(antdButton)`
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

export const FormItemFirstName = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormFirstName = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemSecondName = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormSecondName = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemNickname = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormNickname = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemSex = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    text-align: center;
`

export const FormSex = styled(antdRadio.Group)``

export const FormItemBirthday = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormBirthday = styled(antdDatePicker)`
    width: 100%;

    background: transparent;

    border: 0;
    border-bottom: 2px solid #d4d4d4;

    >div{
        >input {
            text-align: center;
            font-size: 1.5vmin;
            font-family: "Noto Sans TC";
        }
    }
`

export const FormItemPhone = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormPhone = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemCellphone = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormCellphone = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemAddresses = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormItemArea = styled(antdForm.Item)`
    margin-bottom: 0; 
`

export const FormArea = styled(antdCascader)`
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

export const FormItemAddress = styled(antdForm.Item)`
    margin-bottom: 0; 
`

export const FormAddress = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemNewPassword = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormNewPassword = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemNewPasswordCheck = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormNewPasswordCheck = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemPassword = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormPassword = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemSubmit = styled(antdForm.Item)`
    text-align: right;
`

export const FormSubmit = styled(antdButton)`
    width: 20%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    border: 1px solid #F2BC25;
    border-radius: 999rem;
    background: #F2BC25;

    &:hover{
        
    }
`