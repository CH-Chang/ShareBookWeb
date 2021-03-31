import React from "react"
import zh_TW from 'antd/lib/locale-provider/zh_TW';

import { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { ResetStyle, GlobalStyle } from './style';

import AuthRoute from "./routers/authRoute/index";

import Index from "./pages/index/index";

import Search from "./pages/search/index";

import Login from "./pages/member/login/index";
import Logout from "./pages/member/logout/index";
import Register from "./pages/member/register/index";
import MemberHome from "./pages/member/home/index";
import MemberEdit from "./pages/member/edit/index";
import MemberNotifications from "./pages/member/notifications/index";
import MemberPurchases from "./pages/member/purchases/index";

import StoreHome from "./pages/store/home/index";
import StoreEdit from "./pages/store/edit/index";
import StoreNew from "./pages/store/new/index";

import WalletHome from "./pages/wallet/home/index";



function App() {
  return (
    <Fragment>
      <ConfigProvider locale={zh_TW}>
        <ResetStyle />
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/search" exact component={Search} />

            <AuthRoute path="/member/login" exact component={Login} />
            <AuthRoute path="/member/logout" exact component={Logout} />
            <AuthRoute path="/member/register" exact component={Register} />
            <AuthRoute path="/member/home" exact component={MemberHome} />
            <AuthRoute path="/member/edit" exact component={MemberEdit} />
            <AuthRoute path="/member/notifications" exact component={MemberNotifications} />
            <AuthRoute path="/member/purchases" exact component={MemberPurchases} />

            <Route path="/store/home/:storeId" exact component={StoreHome} />
            <AuthRoute path="/store/new" exact component={StoreNew} />
            <AuthRoute path="/store/edit" exact component={StoreEdit} /> 

            <AuthRoute path="/wallet/home" exact component={WalletHome} />
            

            

            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
