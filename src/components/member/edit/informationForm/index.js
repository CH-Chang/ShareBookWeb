import React from "react";
import moment from "moment"

import { Fragment } from "react";
import { connect } from "react-redux";

import { Wrapper, FormBox, Form, FormRow, FormCol, FormItemAccount, FormArea, FormAccount, FormItemFirstName, FormFirstName, FormItemPhone, FormItemSecondName, FormSecondName, FormItemNickname, FormNickname, FormItemBirthday, FormBirthday, FormItemSex, FormSex, FormItemEmail, FormEmail, FormItemEmailValidateCode, FormEmailValidateCode, FormItemGetEmailValidateCode, FormGetEmailValidateCode, FormPhone, FormItemCellphone, FormItemNewPassword, FormNewPassword, FormItemNewPasswordCheck, FormNewPasswordCheck, FormItemPassword, FormPassword, FormItemSubmit, FormSubmit, FormItemAddresses, FormItemAddress, FormItemArea, FormAddress } from "./style.js";

const Index = (props) => {

    const { editInformation, getEditInformationValidateCode } = props;
    const { editInformationFormData, member, editInformationSubmitLoading, editInformationValidateLoading} = props;

    const [form] = Form.useForm()
    return (
        <Fragment>
            <Wrapper>
                <FormBox>
                    <Form initialValues={getDefaultValue(member)} form={form} onFinish={editInformation}>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemAccount label="帳號" name="account" rules={[{required: true, message: "請輸入您的帳號"}]} validateTrigger="onBlur">
                                    <FormAccount disabled={true} />
                                </FormItemAccount>
                            </FormCol>
                            <FormCol span={12}>
                                <FormRow gutter={8}>
                                    <FormCol span={12}>
                                        <FormItemFirstName label="姓氏" name="firstName" rules={[{required: true, message: "請輸入您的姓氏"}]} validateTrigger="onBlur">
                                            <FormFirstName placeholder="請輸入您的姓氏" />
                                        </FormItemFirstName>
                                    </FormCol>
                                    <FormCol span={12}>
                                        <FormItemSecondName label="名字" name="secondName" rules={[{required: true, message: "請輸入您的名字"}]} validateTrigger="onBlur">
                                            <FormSecondName placeholder="請輸入您的名字"/>
                                        </FormItemSecondName>
                                    </FormCol>
                                </FormRow>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemBirthday label="生日" name="birthday" rules={[{required: true, message: "請選擇您的生日"}]} validateTrigger="onBlur">
                                    <FormBirthday placeholder="請選擇您的生日" />
                                </FormItemBirthday>
                            </FormCol>
                            <FormCol span={12}>
                                <FormRow gutter={8}>
                                    <FormCol span={12}>
                                        <FormItemNickname label="暱稱" name="nickname" rules={[{required: true, message: "請輸入您的暱稱"}]} validateTrigger="onBlur">
                                            <FormNickname placeholder="請輸入您的暱稱" />
                                        </FormItemNickname>
                                    </FormCol>
                                    <FormCol span={12}>
                                        <FormItemSex label="性別" name="sex" rules={[{required: true, message: "請選擇您的性別"}]} validateTrigger="onBlur">
                                            <FormSex options={[{label: "男性", value: 1}, {label:"女性", value: 0}]}/>
                                        </FormItemSex>
                                    </FormCol>
                                </FormRow>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemPhone label="電話" name="phone" rules={[{required: true, message: "請輸入您的電話號碼"}, {pattern: new RegExp(/^(\+?886\-?|0)\d{9}$/, "g"), message: "請輸入含區碼的合法電話"}]} validateTrigger="onBlur">
                                    <FormPhone placeholder="請輸入您的電話號碼" />
                                </FormItemPhone>
                            </FormCol>
                            <FormCol span={12}>
                                <FormItemCellphone label="手機" name="cellphone" rules={[{required: true, message: "請輸入您的手機號碼"}, {pattern: /^(\+?886\-?|0)?9\d{8}$/, message: "請輸入合法的手機"}]} validateTrigger="onBlur">
                                    <FormPhone placeholder="請輸入您的手機號碼" />
                                </FormItemCellphone>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={24}>
                                <FormItemAddresses label="地址">
                                    <FormRow gutter={8}>
                                        <FormCol span={8}>
                                            <FormItemArea name="area" rules={[{required: true, message: "請選擇縣市鄉政區"}]} validateTrigger="onBlur">
                                                <FormArea placeholder="請選擇行政區" options={editInformationFormData.area}/>
                                            </FormItemArea>
                                        </FormCol>
                                        <FormCol span={16}>
                                            <FormItemAddress name="address" rules={[{required: true, message: "請輸入您的地址"}]} validateTrigger="onBlur">
                                                <FormAddress placeholder="請輸入您的地址" />
                                            </FormItemAddress>
                                        </FormCol>
                                    </FormRow>
                                </FormItemAddresses>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemEmail label="電子郵件" name="email" rules={[{required: true, message: "請輸入您的電子郵件"}, {type: "email", message:"請確認您的郵箱格式正確"}]} validateTrigger="onBlur">
                                    <FormEmail />
                                </FormItemEmail>
                            </FormCol>
                            <FormCol span={12}>
                                <FormRow gutter={8}>
                                    <FormCol span={16}>
                                        <FormItemEmailValidateCode label="驗證碼" name="emailValidateCode" validateTrigger="onBlur" rules={[{validator: (rule, value, callback) => { if(form.getFieldValue("email")!==member.account.email){ return Promise.reject("請取得驗證碼並輸入")} else {return Promise.resolve();}}}]}>
                                            <FormEmailValidateCode />
                                        </FormItemEmailValidateCode>
                                    </FormCol>
                                    <FormCol span={8}>
                                        <FormItemGetEmailValidateCode>
                                            <FormGetEmailValidateCode loading={editInformationValidateLoading} htmlType="button" onClick={()=>{form.validateFields(['email']).then((value)=>{getEditInformationValidateCode(value)})}}>取得驗證碼</FormGetEmailValidateCode>
                                        </FormItemGetEmailValidateCode>
                                    </FormCol>
                                </FormRow>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemNewPassword label="新密碼" name="newPassword" validateTrigger="onBlur">
                                    <FormNewPassword />
                                </FormItemNewPassword>
                            </FormCol>
                            <FormCol span={12}>
                                <FormItemNewPasswordCheck label="新密碼確認" name="newPasswordCheck" rules={[{validator: (rule, value, callback) => {if(form.getFieldValue("newPassword")!=value){return Promise.reject("兩次輸入的密碼不一致");} else {return Promise.resolve();}}}]}  validateTrigger="onBlur">
                                    <FormNewPasswordCheck />
                                </FormItemNewPasswordCheck>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={12}>
                                <FormItemPassword label="舊密碼" name="password" rules={[{required: true, message: "請輸入您的舊密碼"}]} validateTrigger="onBlur">
                                    <FormPassword />
                                </FormItemPassword>
                            </FormCol>
                        </FormRow>
                        <FormRow>
                            <FormCol span={24}>
                                <FormItemSubmit>
                                    <FormSubmit loading={editInformationSubmitLoading} htmlType="submit">送出</FormSubmit>
                                </FormItemSubmit>
                            </FormCol> 
                        </FormRow>
                        
                    </Form>
                </FormBox>
            </Wrapper>
        </Fragment>
    )
}

const getDefaultValue = (member) => {
    return {
        account: member.account.account,
        email: member.account.email,
        firstName: member.account.firstName,
        secondName: member.account.secondName,
        nickname: member.account.nickname,
        birthday: moment(member.account.birthday),
        sex: member.account.sex,
        phone: member.account.phone,
        cellphone: member.account.cellphone,
        area: [member.account.cityId, member.account.districtId],
        address: member.account.address,
    }
}

const mapStateToProps = (state) => {
    return {
        member: state.member.toJS(),
        editInformationFormData: state.memberEdit.get("editInformationFormData").toJS(),
        editInformationValidateLoading: state.memberEdit.get("editInformationValidateLoading"),
        editInformationSubmitLoading: state.memberEdit.get("editInformationSubmitLoading")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Index);