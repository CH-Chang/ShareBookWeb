import React from "react";

import { Fragment } from "react";
import { connect } from "react-redux";

import { Wrapper, Form, FormCol, FormRow, FormItemSchool, FormSchool, FormItemSchoolEmail, FormSchoolEmail, FormItemValidateCode, FormValidateCode, FormItemGetValidateCode, FormGetValidateCode, FormItemSubmit, FormSubmit} from "./style.js";

const Index = (props) => {
    const { schoolVerify, getSchoolVerifyValidateCode } = props;
    const { editSchoolFormData, member, editSchoolValidateLoading, editSchoolSubmitLoading } = props;

    const [form] = Form.useForm();

    if(member.account.university){
        
        return (
            <Fragment>
                <Wrapper>
                    <Form onFinish={schoolVerify} form={form} initialValues={getInitialValue(member)}>
                        <FormRow gutter={24}>
                            <FormCol span={18}>
                                <FormItemSchool label="大學校系" name="school" rules={[{required: true, message:"請選擇您的大學校系"}]} validateTrigger="onBlur">
                                    <FormSchool placeholder="請選擇您的大學校系" options={editSchoolFormData.school} disabled={true}/>
                                </FormItemSchool>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={18}>
                                <FormItemSchoolEmail label="校級信箱" name="schoolEmail" rules={[{required: true, message:"請輸入您的校級信箱"}, {type: "email", message:"請輸入正確的電子信箱格式"}]} validateTrigger="onBlur">
                                    <FormSchoolEmail placeholder="請輸入您的校級信箱" disabled={true}/>
                                </FormItemSchoolEmail>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} justify="end">
                            <FormCol span={4}>
                                <FormItemSubmit>
                                    <FormSubmit htmlType="submit" disabled={true}>已驗證</FormSubmit>
                                </FormItemSubmit>
                            </FormCol>
                        </FormRow>
                        
                    </Form>
                </Wrapper>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Wrapper>
                    <Form onFinish={schoolVerify} form={form}>
                        <FormRow gutter={24}>
                            <FormCol span={18}>
                                <FormItemSchool label="大學校系" name="school" rules={[{required: true, message:"請選擇您的大學校系"}]} validateTrigger="onBlur">
                                    <FormSchool placeholder="請選擇您的大學校系" options={editSchoolFormData.school}/>
                                </FormItemSchool>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={18}>
                                <FormItemSchoolEmail label="校級信箱" name="schoolEmail" rules={[{required: true, message:"請輸入您的校級信箱"}, {type: "email", message:"請輸入正確的電子信箱格式"}]} validateTrigger="onBlur">
                                    <FormSchoolEmail placeholder="請輸入您的校級信箱"/>
                                </FormItemSchoolEmail>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={24}>
                            <FormCol span={18} >
                                <FormItemValidateCode label="驗證碼" name="validateCode" rules={[{required: true, message: "請輸入驗證碼"}]} validateTrigger="onBlur">
                                    <FormValidateCode placeholder="請輸入您的驗證碼" />
                                </FormItemValidateCode>
                            </FormCol>
                        </FormRow>
                        <FormRow gutter={16} justify="end">
                            <FormCol span={4}>
                                <FormItemGetValidateCode>
                                    <FormGetValidateCode htmlType="button" loading={editSchoolValidateLoading} onClick={() => {form.validateFields(['schoolEmail', 'school']).then((value)=>{getSchoolVerifyValidateCode(value)}).catch((err)=>{console.log(err)})}}>取得驗證碼</FormGetValidateCode>
                                </FormItemGetValidateCode>
                            </FormCol>
                            <FormCol span={4}>
                                <FormItemSubmit>
                                    <FormSubmit htmlType="submit" loading={editSchoolSubmitLoading}>送出</FormSubmit>
                                </FormItemSubmit>
                            </FormCol>
                        </FormRow>
                        
                    </Form>
                </Wrapper>
            </Fragment>
        )
    }
}

const getInitialValue = (member) => {
    return {
        school: [member.account.university.universityId, member.account.university.collegeId, member.account.university.departmentId],
        schoolEmail: member.account.university.schoolEmail,
    }
}

const mapStateToProps = (state) => {
    return {
        member: state.member.toJS(),
        editSchoolFormData: state.memberEdit.get("editSchoolFormData").toJS(),
        editSchoolSubmitLoading: state.memberEdit.get("editSchoolSubmitLoading"),
        editSchoolValidateLoading: state.memberEdit.get("editSchoolValidateLoading"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Index);