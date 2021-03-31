import React from "react";

import { Fragment, Component } from "react";
import { connect } from "react-redux";
import { notification } from "antd";
import moment from "moment";

import Container from "../../../components/common/container/index";
import Header from "../../../components/common/header/index";
import Footer from "../../../components/common/footer/index";

import LinkBox from "../../../components/member/edit/linkbox/index";
import EditForm from "../../../components/member/edit/editForm/index";

import { actionCreators } from "../../../stores/memberEdit/index";
import { actionCreators as memberActionCreators } from "../../../stores/member/index";
import { apiGetSchoolVerifyValidateCode, apiSchoolVerify } from "../../../apis/member";
import { RSAEncrypt } from "../../../utils/RSAHelper";
import { apiEditInformation, apiGetEditInformationValidateCode } from "../../../apis/member"

import { Content, Row, Col, } from "./style";

class Index extends Component {
    constructor(props){
        super(props);

        this.schoolVerify = this.schoolVerify.bind(this);
        this.editInformation = this.editInformation.bind(this);
        this.getSchoolVerifyValidateCode = this.getSchoolVerifyValidateCode.bind(this);
        this.getEditInformationValidateCode = this.getEditInformationValidateCode.bind(this);

    }

    render(){

        return (
            <Fragment>
                <Header />
                <Content>
                    <Container>
                        <Row gutter={24}>
                            <Col span={6}>
                                <LinkBox />
                            </Col>
                            <Col span={18}>
                                <EditForm schoolVerify={this.schoolVerify} getSchoolVerifyValidateCode={this.getSchoolVerifyValidateCode} editInformation={this.editInformation} getEditInformationValidateCode={this.getEditInformationValidateCode} />
                            </Col>
                        </Row>
                    </Container>
                </Content>
                <Footer />
            </Fragment>
        )
    }

    componentDidMount(){
        const { getEditInformationFormData, getEditSchoolFormData } = this.props;
        
        getEditInformationFormData();
        getEditSchoolFormData();
    }

    schoolVerify(value){

        const { switchEditSchoolSubmitLoading, schoolVerify } = this.props;

        switchEditSchoolSubmitLoading(true);

        const encryptedSchoolEmail = RSAEncrypt(value.schoolEmail);
        const encryptedSchool = RSAEncrypt(value.school.toString());
        const encryptedSchoolVerifyValidateCode = RSAEncrypt(value.validateCode);

        apiSchoolVerify(encryptedSchool, encryptedSchoolEmail, encryptedSchoolVerifyValidateCode)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "驗證成功",
                        description: "校園身分驗證成功"
                    })

                    schoolVerify(res.data.data);
                } else if (res.status===200 && res.data.res===-1){
                    notification['warning']({
                        message: "驗證失敗",
                        description: res.data.msg,
                    })
                } else {
                    notification['error']({
                        message: "驗證失敗",
                        description: "發生未知錯誤，請聯繫開發人員"
                    })
                }

                switchEditSchoolSubmitLoading(false);
            })
            .catch((err) => {
                notification['error']({
                    message: "驗證失敗",
                    description: "發生未知錯誤，請聯繫開發人員"
                })

                switchEditSchoolSubmitLoading(false);
            })
    }

    getSchoolVerifyValidateCode(value){
        const { switchEditSchoolValidateLoading } = this.props;

        switchEditSchoolValidateLoading(true);

        const encryptedSchoolEmail = RSAEncrypt(value.schoolEmail);
        const encryptedSchool = RSAEncrypt(value.school.toString());

        apiGetSchoolVerifyValidateCode(encryptedSchoolEmail, encryptedSchool)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "驗證碼發送成功",
                        description: "驗證碼發送成功，請查核",
                    });
                } else if (res.status===200 && res.data.res===-1) {
                    notification['warning']({
                        message: "驗證碼發送失敗",
                        description: res.data.msg,
                    })
                } else {
                    notification['error']({
                        message: "驗證碼發送失敗",
                        description: "發生未知錯誤",
                    })
                }

                switchEditSchoolValidateLoading(false);
            })
            .catch((err) => {
                notification['error']({
                    message: "驗證碼發送失敗",
                    description: "發生未知錯誤",
                })

                switchEditSchoolValidateLoading(false);
            })
    }

    getEditInformationValidateCode(value){
        const { switchEditInformationValidateLoading } = this.props;

        switchEditInformationValidateLoading(true);

        const encryptedEmail = RSAEncrypt(value.email);

        apiGetEditInformationValidateCode(encryptedEmail)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "驗證碼發送成功",
                        description: "驗證碼發送成功，請查核",
                    });
                } else if (res.status===200 && res.data.res!==0){
                    notification['warning']({
                        message: "驗證碼發送失敗",
                        description: res.data.msg,
                    })
                } else if (res.status===400 && res.data.res!==0){
                    notification['warning']({
                        message: "驗證碼發送失敗",
                        description: res.data.msg,
                    })
                } else {
                    notification['error']({
                        message: "驗證碼發送失敗",
                        description: "發生未知錯誤",
                    })
                }

                switchEditInformationValidateLoading(false);

            })
            .catch((err) =>{
                notification['error']({
                    message: "驗證碼發送失敗",
                    description: "發生未知錯誤",
                })

                switchEditInformationValidateLoading(false);
            })
    }

    editInformation(value){
        const { switchEditInformationSubmitLoading } = this.props;

        switchEditInformationSubmitLoading(true)

        const encryptedEmail = RSAEncrypt(value.email);
        const encryptedEmailValidateCode = value.emailValidateCode ? RSAEncrypt(value.emailValidateCode) : undefined;
        const encryptedFirstName = RSAEncrypt(value.firstName);
        const encryptedSecondName = RSAEncrypt(value.secondName);
        const encryptedPassword = RSAEncrypt(value.password);
        const encryptedNewPassword = value.newPassword ? RSAEncrypt(value.newPassword) : undefined
        const encryptedSex = RSAEncrypt(value.sex.toString());
        const encryptedBirthday = RSAEncrypt(moment(value.birthday).format("YYYY-MM-DD"));
        const encryptedPhone = RSAEncrypt(value.phone);
        const encryptedCellphone = RSAEncrypt(value.cellphone);
        const encryptedCity = RSAEncrypt(value.area[0].toString());
        const encryptedDistrict = RSAEncrypt(value.area[1].toString());
        const encryptedAddress = RSAEncrypt(value.address);

        apiEditInformation(encryptedEmail, encryptedEmailValidateCode, encryptedFirstName, encryptedSecondName, encryptedPassword, encryptedNewPassword, encryptedSex, encryptedBirthday, encryptedPhone, encryptedCellphone, encryptedCity, encryptedDistrict, encryptedAddress)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "帳戶資料變更成功",
                        description: "帳戶資料變更成功",
                    });
                } else if (res.status===200 && res.data.res!==0){
                    notification['warning']({
                        message: "帳戶資料變更失敗",
                        description: res.data.msg,
                    })
                } else if (res.status===400 && res.data.res!==0){
                    notification['warning']({
                        message: "帳戶資料變更失敗",
                        description: res.data.msg,
                    })
                } else {
                    notification['error']({
                        message: "帳戶資料變更失敗",
                        description: "發生未知錯誤",
                    })
                }

                switchEditInformationSubmitLoading(false);
            })
            .catch((err) => {
                notification['error']({
                    message: "帳戶資料變更失敗",
                    description: "發生未知錯誤",
                })

                switchEditInformationSubmitLoading(false);
            })
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEditInformationFormData(){
            dispatch(actionCreators.getEditInformationFormData());
        },
        getEditSchoolFormData(){
            dispatch(actionCreators.getEditSchoolFormData());
        },
        switchEditInformationSubmitLoading(value){
            dispatch(actionCreators.switchEditInformationSubmitLoading(value));
        },
        switchEditInformationValidateLoading(value){
            dispatch(actionCreators.switchEditInformationValidateLoading(value));
        },
        switchEditSchoolSubmitLoading(value){
            dispatch(actionCreators.switchEditSchoolSubmitLoading(value));
        },
        switchEditSchoolValidateLoading(value){
            dispatch(actionCreators.switchEditSchoolValidateLoading(value));
        },
        schoolVerify(value){
            dispatch(memberActionCreators.schoolVerify(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);