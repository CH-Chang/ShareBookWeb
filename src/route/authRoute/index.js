import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Index = (props) => {
  const { component: Component, isLogin, path, ...rest } = props;

  if (isLogin) {
    if (path === "/user/login")
      return (
        <Route
          {...rest}
          render={() => {
            return <Redirect to="/user/dashboard" />;
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
    if (path !== "/user/login")
      return (
        <Route
          {...rest}
          render={() => {
            return <Redirect to="/user/login" />;
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

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
