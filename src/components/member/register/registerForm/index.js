import React from "react";

import { Fragment } from "react";

import { Wrapper, TitleBox, Title, FormBox, FormRow, FormCol, Form, FormItemEmail, FormEmail, FormItemValidateCode, FormValidateCode, FormItemValidate, FormValidate, FormItemAccount, FormAccount, FormItemFirstName, FormFirstName, FormItemSecondName, FormSecondName, FormItemSubmitButton, FormSubmitButton, FormItemSex, FormSex, FormItemBirthday, FormBirthday, FormItemPassword, FormPassword, FormItemPasswordCheck, FormPasswordCheck, FormItemPhone, FormPhone, FormItemCellphone, FormCellphone, FormItemAddresses, FormItemAddress, FormAddress, FormItemHint, FormHint, FormItemArea, FormArea } from "./style";

const Index = (props) => {

    const { register, validate } = props;

    const { submitLoading, validateLoading, formData } = props;

    const [form] = Form.useForm();

    return (
        <Fragment>
            <Wrapper>
                <TitleBox>
                    <Title>加入學步</Title>
                </TitleBox>

                <FormBox>

                    <Form onFinish={register} form={form}>
                        <FormRow gutter={16} align="center">
                            <FormCol span={12}>
                                <FormItemEmail label="電子郵件" name="email" rules={[{required: true, message:"請輸入電子郵件"}, {type: "email", message:"請確認電子郵件格式"}]} validateTrigger="onBlur">
                                    <FormEmail placeholder="請輸入您的電子郵件"/>
                                </FormItemEmail>
                            </FormCol>
                            <FormCol span={12}>
                                <FormRow gutter={16} align="center">
                                    <FormCol span={16}>
                                        <FormItemValidateCode label="驗證碼" name="registerValidateCode" rules={[{required: true, message:"請輸入驗證碼"}]} validateTrigger="onBlur">
                                            <FormValidateCode  placeholder="請輸入驗證碼"/>
                                        </FormItemValidateCode>
                                    </FormCol>
                                    <FormCol span={8}>
                                        <FormItemValidate>
                                            <FormValidate htmlType="button" loading={validateLoading} onClick={() => {form.validateFields(['email']).then((value)=>{validate(value)}).catch((err)=>{})}}>請求驗證碼</FormValidate>
                                        </FormItemValidate>
                                    </FormCol>
                                </FormRow>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={12}>
                                <FormItemAccount label="帳號" name="account" rules={[{required: true, message:"請輸入您的帳號"}]} validateTrigger="onBlur">
                                    <FormAccount placeholder="請輸入您的帳號"/>
                                </FormItemAccount>
                            </FormCol>
                            <FormCol span={12}>
                                <FormRow gutter={16} align="center">
                                    <FormCol span={12}>
                                        <FormItemFirstName label="姓氏" name="firstName" rules={[{required: true, message:"請輸入您的姓氏"}]} validateTrigger="onBlur">
                                            <FormFirstName placeholder="請輸入您的姓氏"/>
                                        </FormItemFirstName>
                                    </FormCol>
                                    <FormCol span={12}>
                                        <FormItemSecondName label="名字" name="secondName" rules={[{required: true, message:"請輸入您的名字"}]} validateTrigger="onBlur">
                                            <FormSecondName placeholder="請輸入您的名字"/>
                                        </FormItemSecondName>
                                    </FormCol>
                                </FormRow>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={12}>
                                <FormItemPassword label="密碼" name="password" rules={[{required: true, message:"請輸入您的密碼"}]} validateTrigger="onBlur">
                                    <FormPassword type="password" autoComplete="false" placeholder="請輸入您的密碼" />
                                </FormItemPassword>
                            </FormCol>
                            <FormCol span={12}>
                                <FormItemPasswordCheck label="密碼確認" name="passwordCheck" rules={[{required: true, message:"請再次輸入您的帳號"}, {validator: (rule, value, callback) => {if(form.getFieldValue("password")!=value){return Promise.reject("兩次輸入的密碼不一致");} else {return Promise.resolve();}}}]} validateTrigger="onBlur">
                                    <FormPasswordCheck type="password" autoComplete="false" placeholder="請再次輸入您的密碼"/>
                                </FormItemPasswordCheck>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={12}>
                                <FormItemSex label="性別" name="sex" rules={[{required: true, message:"請選擇您的性別"}]} validateTrigger="onBlur">
                                    <FormSex options={[{label: "男性", value: 1}, {label:"女性", value: 0}]}/>
                                </FormItemSex>
                            </FormCol>
                            <FormCol span={12}>
                                <FormItemBirthday label="生日" name="birthday" rules={[{required: true, message:"請輸入您的生日"}]} validateTrigger="onBlur">
                                    <FormBirthday />
                                </FormItemBirthday>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={12}>
                                <FormItemPhone label="電話" name="phone" rules={[{required: true, message:"請輸入您的電話"}, {pattern: new RegExp(/^(\+?886\-?|0)\d{9}$/, "g"), message: "請輸入含區碼的合法電話"}]} validateTrigger="onBlur">
                                    <FormPhone placeholder="請輸入您的電話"/>
                                </FormItemPhone>
                            </FormCol>
                            <FormCol span={12}>
                                <FormItemCellphone label="手機" name="cellphone" rules={[{required: true, message:"請輸入您的手機"}, {pattern: /^(\+?886\-?|0)?9\d{8}$/, message: "請輸入合法的手機"}]} validateTrigger="onBlur">
                                    <FormCellphone placeholder="請輸入您的手機"/>
                                </FormItemCellphone>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={24}>
                                <FormItemAddresses label="地址">
                                    <FormRow gutter={16} align="center">
                                        <FormCol span={8}>
                                            <FormItemArea name="area" rules={[{required: true, message: "請選擇縣市鄉政區"}]} validateTrigger="onBlur">
                                                <FormArea options={formData.area} placeholder="請選擇您的行政區"/>
                                            </FormItemArea>
                                            
                                        </FormCol>
                                        <FormCol span={16}>
                                            <FormItemAddress name="address" rules={[{required: true, message:"請輸入您的地址"}]} validateTrigger="onBlur">
                                                <FormAddress placeholder="請輸入您的地址"/>
                                            </FormItemAddress>
                                        </FormCol>
                                    </FormRow>
                                </FormItemAddresses>
                            </FormCol>
                        </FormRow>
                        <FormRow>
                            <FormCol span={24}>
                                <FormItemHint>
                                    <FormHint to="/member/login">已有帳號了？點我登入</FormHint>
                                </FormItemHint>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} align="center">
                            <FormCol span={24}>
                                <FormItemSubmitButton>
                                    <FormSubmitButton htmlType="submit" loading={submitLoading}>註冊學步</FormSubmitButton>
                                </FormItemSubmitButton>
                            </FormCol>
                        </FormRow>
                    </Form>
                    
                </FormBox>
            </Wrapper>
        </Fragment>
    )
}

export default Index;