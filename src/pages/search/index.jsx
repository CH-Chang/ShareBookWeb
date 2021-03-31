import React from "react";

import { Fragment, Component } from "react";
import { connect } from "react-redux"

import Container from "../../components/common/container/index";
import Header from "../../components/common/header/index";
import Footer from "../../components/common/footer/index";
import Condition from "../../components/search/condition/index";
import Browser from "../../components/search/browser/index";

import { Content, ContentRow, ConditionCol, BrowserCol } from "./style";

import { actionCreators } from "../../stores/search/index";
import { search } from "../../stores/search/actionCreators";



class Index extends Component{

    constructor(props){
        super(props);

        this.search = this.search.bind(this);
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Content>
                    <Container>
                        <ContentRow gutter={18}>
                            <ConditionCol span={6}>
                                <Condition/>
                            </ConditionCol>
                            <BrowserCol span={18}>
                                <Browser />
                            </BrowserCol>
                        </ContentRow>
                    </Container>
                </Content>
                <Footer />
            </Fragment>
        )
    }


    componentDidMount(){
        this.search();     
    }

    componentDidUpdate(prevProps){
        // 監聽網址變化
        if(this.props.location.search != prevProps.location.search){
            this.search();
        }
    }

    search(){
        const { search } = this.props;

        // 解析網址
        const query = new URLSearchParams(this.props.location.search);
            
        // 整理參數
        // 整理參數
        const config = {
            keyword: query.get("keyword"),
            city: query.get("city"),
            district: query.get("district"),
            university: query.get("university"),
            delivery: query.get("delivery"),
            resource: query.get("resource"),
            payment: query.get("payment"),
            other: query.get("other"),
            review: query.get("review"),
        }


        search(config);
    }

    
}


const mapStateToProps = (state) => {
    return {
        product: state.search.get("product").toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search(config){
            console.log("我去搜尋了");
            console.log(config);

            dispatch(actionCreators.search(config));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);