import styled from "styled-components";
import { Row as antdRow, Col as antdCol, Form as antdForm, Input as antdInput, Button as antdButton, Radio as antdRadio, DatePicker as antdDatePicker, Cascader as antdCascader } from "antd"
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    margin: auto;

    width: 110vmin;

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

export const FormRow = styled(antdRow)``
export const FormCol = styled(antdCol)``

export const Form = styled(antdForm)``

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

export const FormItemValidate = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormValidate = styled(antdButton)`
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

export const FormItemPasswordCheck = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormPasswordCheck = styled(antdInput)`
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

export const FormSex = styled(antdRadio.Group)`
    
`

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
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormArea = styled(antdCascader)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;

    background-color: transparent;

    > input {
        border: 0;
        border-bottom: 2px solid #d4d4d4;

        text-align: center;
    }

    > span {
        text-align: center;
    }
`

export const FormItemAddress = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FormAddress = styled(antdInput)`
    border: 0;
    border-bottom: 2px solid #d4d4d4;
    background: transparent;
    text-align: center;
    font-size: 1.5vmin;
`

export const FormItemHint = styled(antdForm.Item)`
    text-align: right;
`

export const FormHint = styled(Link)`
    margin: 0 1vmin;

    font-family: "Noto Sans TC";
    font-size: 1.6vmin;
    font-weight: 300;
    line-height: 1;
    color: #141414;
`



export const FormItemSubmitButton = styled(antdForm.Item)`
    text-align: center;
`

export const FormSubmitButton = styled(antdButton)`
    width: 15%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    border: 1px solid #F2BC25;
    border-radius: 999rem;
    background: #F2BC25;

    &:hover{
        
    }
`

