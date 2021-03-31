// Library
import React from "react";

import { Fragment, Component } from "react";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined, ShareAltOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"


// Images
import logo from "../../../assets/svg/logo.svg";

// Custom Components
import Container from "../container/index";

// Style Components
import { Wrapper, TopRow, LogoCol, SearchCol, FuncCol, LogoBox, LogoLink, Logo, LogoTitle, SearchBox, SearchFormBox, SearchSuggestBox, SearchFormItemInput, SearchCommit, SearchForm, SearchInput, SearchFormItemCommit, SearchSuggest, QuickLinkBox, QuickLink, BtmRow, MemberBox, MemberTitle, MemberLink, MemberName } from "./style";


import { actionCreators } from "../../../stores/header/index";

class Index extends Component{

    form = React.createRef()

    constructor(props){
        super(props);

        this.getMemberBox = this.getMemberBox.bind(this);
        this.search = this.search.bind(this);
    }

    render(){

        const { suggestion, member } = this.props;


        return (
            <Fragment>
                <Wrapper>
                    <Container>
                        <TopRow gutter={48} justify="center" align="middle">
                            <LogoCol lg={2} >
                                <LogoBox>
                                    <LogoLink to="/">
                                        <Logo src={logo}/>
                                    </LogoLink>
                                    <LogoTitle>學步</LogoTitle>
                                </LogoBox>
                            </LogoCol>
                            <SearchCol lg={18}>
                                <SearchBox>
                                    <SearchFormBox>
                                        <SearchForm onFinish={this.search} ref={this.form}>
                                            <SearchFormItemInput name="keyword">
                                                <SearchInput size="large" placeholder="請輸入欲搜尋的書名、作者或ISBN碼"/>
                                            </SearchFormItemInput>
                                            <SearchFormItemCommit>
                                                <SearchCommit htmlType="submit" size="large" icon={<SearchOutlined/>} >給我搜！</SearchCommit>
                                            </SearchFormItemCommit>
                                        </SearchForm>
                                    </SearchFormBox>
                                    <SearchSuggestBox>
                                        {
                                            suggestion.map((suggest, index)=>{
                                                return (<SearchSuggest to={"/search/?keyword="+suggest.keyword}>{suggest.title}</SearchSuggest>)
                                            })
                                        }
                                        
                                    </SearchSuggestBox>
                                </SearchBox>
                            </SearchCol>
                            <FuncCol lg={4}>
                                <QuickLinkBox>
                                    <QuickLink to="/member/home"><UserOutlined /></QuickLink>                
                                    <QuickLink to={member.store ? "/store/home/"+member.store.storeId+"/" : "/store/new"}><ShopOutlined /></QuickLink>
                                    <QuickLink><ShareAltOutlined /></QuickLink>
                                    <QuickLink><ShoppingCartOutlined/></QuickLink>
                                </QuickLinkBox>
                            </FuncCol>
                        </TopRow>
                        <BtmRow>
                            {this.getMemberBox()}
                        </BtmRow>
                    </Container>
                </Wrapper>
            </Fragment>
        )
    }


    componentDidMount(){

        // props function 取出
        const { getSuggestion } = this.props;

        // 要求資料
        getSuggestion();
        
        // 同步表單與網址
        this.syncFormAndAddress();

    }






    getMemberBox(){
        const { member } = this.props;

        if (member.isLogin) {
            return (
                <MemberBox>
                    <MemberTitle>歡迎回來，<MemberName>{member.account.nickname}</MemberName> <MemberLink to="/member/logout">登出</MemberLink></MemberTitle>
                </MemberBox>
            )
        } else {
            return (
                <MemberBox>
                    <MemberTitle>我想你了，快<MemberLink to="/member/register">註冊</MemberLink>或<MemberLink to="/member/login">登入</MemberLink>好嗎？</MemberTitle>
                </MemberBox>
            )
        }
    }

    search(searchFormResult){

        const query = new URLSearchParams({
            keyword: searchFormResult.keyword,
        })

        this.props.history.push({
            pathname: "/search",
            search: "?"+query.toString(),
        })
    }

    syncFormAndAddress(){

        if(this.props.location.pathname=="/search"){
            const query = new URLSearchParams(this.props.location.search);
            
            this.form.current.setFieldsValue({
                keyword: query.get("keyword"),
            })
        }

    }
}


const mapStateToProps = (state) => {
    return {
        suggestion: state.header.get("suggestion").toJS(),
        member: state.member.toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSuggestion(){
            dispatch(actionCreators.getSuggestion());
        },
    }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));