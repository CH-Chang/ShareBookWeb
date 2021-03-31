import styled from "styled-components";

import { Form as antdForm, Checkbox as antdCheckbox, Select as antdSelect, Cascader as antdCascader, Rate as antdRate, Button as antdButton, Row as antdRow, Col as antdCol } from "antd";


export const Wrapper = styled.div`
    padding-top: 2vmin;
    padding-bottom: 2vmin;
`

export const TitleBox = styled.div``

export const Title = styled.h3`

    display: inline-block;

    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    color: #141414;
    font-weight: 500;
    line-height: 1;

    padding-bottom: 0.5vmin;

    border-bottom: 3px solid #F2BC25;
`

export const ConditionFormBox = styled.div`
    margin-top: 3vmin;
`


export const ConditionForm = styled(antdForm)`
    width: 100%;
`

export const ConditionFormRow = styled(antdRow)``

export const ConditionFormCol = styled(antdCol)``

export const ConditionFormItemArea = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`

export const ConditionFormArea = styled(antdCascader)``

export const ConditionFormItemUniversity = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`


export const ConditionFormUniversity = styled(antdSelect)``

export const ConditionFormUniversityOption = styled(antdSelect.Option)``

export const ConditionFormItemDelivery = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`

export const ConditionFormDelivery = styled(antdSelect)``

export const ConditionFormDeliveryOption = styled(antdSelect.Option)``

export const ConditionFormItemPayment = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`

export const ConditionFormPayment = styled(antdSelect)``

export const ConditionFormPaymentOption = styled(antdSelect.Option)``

export const ConditionFormItemReview = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 3vmin;
`

export const ConditionFormReview = styled(antdRate)`
    text-align: center;
`

export const ConditionFormItemOther = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`

export const ConditionFormOther = styled(antdSelect)``

export const ConditionFormOtherOption = styled(antdSelect.Option)``

export const ConditionFormItemResource = styled(antdForm.Item)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    font-weight: 300;
    color: #141414;
    line-height: 1;

    margin-bottom: 1.5vmin;
`

export const ConditionFormResource = styled(antdSelect)``

export const ConditionFormResourceOption = styled(antdSelect.Option)``

export const ConditionFormItemCommit = styled(antdForm.Item)`
    margin-bottom: 0;
`

export const ConditionFormCommit = styled(antdButton)`
    width: 12vmin;

    border: 1px solid #F2BC25;
    border-radius: 1.5vmin;
    
    background: #F2BC25;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    font-weight: 300;
`

export const ConditionFormItemClear = styled(antdForm.Item)`
    margin-bottom: 0;
`

export const ConditionFormClear = styled(antdButton)`
    width: 12vmin;

    border: 1px solid #F2BC25;
    border-radius: 1.5vmin;

    background: #F2BC25;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #141414;
    font-weight: 300;

`


