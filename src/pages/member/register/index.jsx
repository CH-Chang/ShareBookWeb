import React from "react";
import moment from "moment";

import { Fragment, Component } from "react";
import { connect } from "react-redux";
import { notification } from "antd";

import bgRegister from "../../../assets/bg/bgRegister.jpg";

import Header from "../../../components/member/register/briefHeader/index";
import RegisterForm from "../../../components/member/register/registerForm/index";
import Footer from "../../../components/member/register/briefFooter/index";

import { BackgroundImg, BackgroundAlpha} from "./style";
import { RSAEncrypt } from "../../../utils/RSAHelper";
import { apiGetRegisterValidateCode, apiRegister } from "../../../apis/member";
import { actionCreators as registerActionCreators } from "../../../stores/register/index"


class Index extends Component{


    constructor(props){
        super(props);


        this.validate = this.validate.bind(this);
        this.register = this.register.bind(this);
    }

    render(){

        const { submitLoading, validateLoading, formData } = this.props;

        return (
            <Fragment>
                <BackgroundImg backgroundImg={bgRegister}>
                    <BackgroundAlpha>
                        <Header />
                        <RegisterForm register={this.register} validate={this.validate} submitLoading={submitLoading} validateLoading={validateLoading} formData={formData} />
                        <Footer />
                    </BackgroundAlpha>
                </BackgroundImg>

                
            </Fragment>
        )
    }

    componentDidMount(){

        const { getFormData } = this.props;

        getFormData();
    }



    register(value){
        
        const {switchSubmitLoading} = this.props;

        switchSubmitLoading(true);

        const encryptedEmail = RSAEncrypt(value.email);
        const encryptedRegisterValidateCode = RSAEncrypt(value.registerValidateCode);
        const encryptedAccount = RSAEncrypt(value.account);
        const encryptedFirstName = RSAEncrypt(value.firstName);
        const encryptedSecondName = RSAEncrypt(value.secondName);
        const encryptedPassword = RSAEncrypt(value.password);
        const encryptedSex = RSAEncrypt(value.sex.toString());
        const encryptedBirthday = RSAEncrypt(moment(value.birthday).format("YYYY-MM-DD"));
        const encryptedPhone = RSAEncrypt(value.phone);
        const encryptedCellphone = RSAEncrypt(value.cellphone);
        const encryptedCity = RSAEncrypt(value.area[0].toString());
        const encryptedDistrict = RSAEncrypt(value.area[1].toString());
        const encryptedAddress = RSAEncrypt(value.address);


        apiRegister(encryptedEmail, encryptedPassword, encryptedRegisterValidateCode, encryptedFirstName, encryptedSecondName, encryptedSex, encryptedBirthday, encryptedPhone, encryptedCellphone, encryptedCity, encryptedDistrict, encryptedAddress, encryptedAccount)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "註冊成功",
                        description: "註冊成功，即將跳轉",
                    });

                    setTimeout(()=>{
                        this.props.history.push("/")
                    }, 1500);
                    
                } else if ((res.status===400 && res.data.res===-1) || (res.status===200 && res.data.res===-1)){
                    notification['warning']({
                        message: "註冊失敗",
                        description: res.data.msg,
                        
                    });
                } else {
                    notification['error']({
                        message: "註冊失敗",
                        description: "發生未知錯誤，請聯繫開發人員",
                        
                    })
                }
                

                switchSubmitLoading(false);
            })
            .catch((err)=> {
                notification['error']({
                    message: "註冊失敗",
                    description: "發生未知錯誤，請聯繫開發人員",
                    
                })

                switchSubmitLoading(false);

            })


    }

    validate(value){

        const { switchValidateLoading } = this.props;

        switchValidateLoading(true);

        const encryptedEmail = RSAEncrypt(value.email);

        apiGetRegisterValidateCode(encryptedEmail)
            .then((res) => {
                if(res.status===200 && res.data.res===0){
                    notification['success']({
                        message: "驗證碼發送成功",
                        description: "驗證碼發送成功，請查核",
                    });
                    
                } else if ((res.status===400 && res.data.res===-1) || (res.status===200 && res.data.res===-1)){
                    notification['warning']({
                        message: "驗證碼發送失敗",
                        description: res.data.msg,
                        
                    });
                } else {
                    notification['error']({
                        message: "驗證碼發送失敗",
                        description: "發生未知錯誤，請聯繫開發人員",
                        
                    })
                }

                switchValidateLoading(false);
            })
            .catch((err) => {
                notification['error']({
                    message: "驗證碼發送失敗",
                    description: "發生未知錯誤，請聯繫開發人員",
                    
                })

                switchValidateLoading(false);
            })
    }
}

const mapStateToProps = (state) => {
    return {
        submitLoading: state.register.get("submitLoading"),
        validateLoading: state.register.get("validateLoading"),
        formData: state.register.get("formData").toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchValidateLoading(value){
            dispatch(registerActionCreators.switchValidateLoading(value));
        },
        switchSubmitLoading(value){
            dispatch(registerActionCreators.switchSubmitLoading(value));
        },
        getFormData(){
            dispatch(registerActionCreators.getFormData());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);