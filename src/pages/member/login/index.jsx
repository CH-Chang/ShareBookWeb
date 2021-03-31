import React from "react";

import { Fragment, Component } from "react";
import { connect } from "react-redux";
import { notification } from "antd";

import bgLogin from "../../../assets/bg/bgLogin.jpg";

import Header from "../../../components/member/login/briefHeader/index";
import Footer from "../../../components/member/login/briefFooter/index";
import LoginForm from "../../../components/member/login/loginForm/index";


import { BackgroundImg, BackgroundAlpha} from "./style";
import { RSAEncrypt } from "../../../utils/RSAHelper";
import { actionCreators as loginActionCreators } from "../../../stores/login/index";
import { actionCreators as memberActionCreators } from "../../../stores/member/index";
import { apiLogin } from "../../../apis/member";



class Index extends Component{

    constructor(props){
        super(props);

        this.login = this.login.bind(this);
    }

    render(){
        const { submitLoading } = this.props;

        return (
            <Fragment>
                <BackgroundImg backgroundImg={bgLogin}>
                    <BackgroundAlpha>
                        <Header />
                        <LoginForm login={this.login} submitLoading={submitLoading}/>
                        <Footer />
                    </BackgroundAlpha>
                </BackgroundImg>

                
            </Fragment>
        )
    }

    login = (value) => {
        const that = this;

        const { switchSubmitLoading, login } = this.props;

        const encryptedAccount = RSAEncrypt(value.account);
        const encryptedPassword = RSAEncrypt(value.password);

        switchSubmitLoading(true);

        apiLogin(encryptedAccount, encryptedPassword).then(
            (res) => {
                switchSubmitLoading(false);

                if (res.status===200 && res.data.res===0){

                    localStorage.setItem("token", res.data.data.token);
                    login({accountId: res.data.data.accountId, account: res.data.data.account, store: res.data.data.store});

                    notification['success']({
                        message: "登入結果",
                        description: "登入成功，即將跳轉",
                        
                    });

                    setTimeout(() => {
                        that.props.history.push("/");
                    }, 1000);

                } else if(res.status===200 && res.data.res===-1){
                    notification['warning']({
                        message: "登入結果",
                        description: res.data.msg,
                        
                    });
                } else{
                    notification['error']({
                        message: "登入結果",
                        description: "發生網路錯誤，請重試",
                        
                    })
                }
            },
            (err) => {
                switchSubmitLoading(false);
                
                notification['error']({
                    message: "登入結果",
                    description: "發生未知錯誤，請聯絡開發人員",
                
                })

            }
        )
        

        
    }
}



const mapStateToProps = (state) => {
    return {
        submitLoading: state.login.get("submitLoading"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchSubmitLoading(value){
            dispatch(loginActionCreators.switchSubmitLoading(value));
        },
        login(value){
            dispatch(memberActionCreators.login(value));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);