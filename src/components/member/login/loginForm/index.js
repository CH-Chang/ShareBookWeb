import React from "react";

import { Fragment } from "react";

import { Wrapper, TitleBox, Title, FormBox, Form, FormItemAccountInput, FormItemPasswordInput, FormItemSubmitButton, AccountInput, PasswordInput, SubmitButton, FormItemHint, Hint } from "./style";



const Index  = (props) => {
    
    const { login, submitLoading } = props;

    return (
        <Fragment>
            <Wrapper>
                <TitleBox>
                    <Title>登入學步</Title>
                </TitleBox>

                <FormBox>
                    <Form onFinish={login}>
                        <FormItemAccountInput name="account" validateTrigger="onBlur" rules={[{ required: true, message: "請輸入您的帳號"}]}>
                            <AccountInput placeholder="請輸入您的帳號" />
                        </FormItemAccountInput>
                        <FormItemPasswordInput name="password" validateTrigger="onBlur" rules={[{ required: true, message: "請輸入您的密碼"}]}>
                            <PasswordInput placeholder="請輸入您的密碼" size="large"/>
                        </FormItemPasswordInput>
                        <FormItemHint>
                            <Hint to="/member/forgotPassword">忘記密碼</Hint>
                            <Hint to="/member/register">加入學步</Hint>
                        </FormItemHint>
                        <FormItemSubmitButton>
                            <SubmitButton htmlType="submit" size="large" loading={submitLoading}>登入</SubmitButton>
                        </FormItemSubmitButton>
                    </Form>
                </FormBox>
            </Wrapper>

        </Fragment>
    )
}


export default Index;