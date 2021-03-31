import React from "react";

import { Fragment, Component } from "react";
import { connect } from "react-redux";

import { actionCreators } from "../../../stores/member/index";


class Index extends Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <p>正在登出，請稍後</p>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        this.logout();
    }

    logout(){
        const { member } = this.props;

        const { logout } = this.props;

        if(member.isLogin && localStorage.getItem("token")){
            
            // 清除localStorage
            localStorage.removeItem("token");

            // 清除state
            logout();

            // 導回首頁
            this.props.history.push("/");
        }
    }
}

const mapStateToProps = (state) => {
    return {
        member: state.member.toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout(){
            dispatch(actionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);