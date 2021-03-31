import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Index = (props) => {
  const { component: Component, isLogin, path, ...rest } = props;

  if (isLogin) {
    console.log("是登入的");
    if (path === "/member/login" || path === "/member/register")
      return (
        <Route
          {...rest}
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      );
    else
      return (
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      );
  } else {
    if (path==="/member/logout")
      return (
        <Route
          {...rest}
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      )
    else if (path !== "/member/login" && path !== "/member/register" && path !== "/member/logout")
      return (
        <Route
          {...rest}
          render={() => {
            return <Redirect to="/member/login" />;
          }}
        />
      );
    else
      return (
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      )
  }
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.member.get("isLogin"),
  };
};



export default connect(mapStateToProps, null)(Index);
