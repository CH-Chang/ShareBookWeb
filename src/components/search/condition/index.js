import React from "react";

import { Fragment, Component } from "react";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

import { actionCreators } from "../../../stores/search/index";

import { Wrapper, Title, TitleBox, ConditionFormItemArea, ConditionFormArea, ConditionFormBox, ConditionFormPayment, ConditionFormReview, ConditionFormItemClear, ConditionFormClear, ConditionForm, ConditionFormRow, ConditionFormCol, ConditionFormItemUniversity, ConditionFormUniversity, ConditionFormItemDelivery, ConditionFormDelivery, ConditionFormItemPayment, ConditionFormItemResource, ConditionFormItemOther, ConditionFormItemReview, ConditionFormItemCommit, ConditionFormCommit, ConditionFormResource, ConditionFormOther, ConditionFormUniversityOption, ConditionFormDeliveryOption, ConditionFormResourceOption, ConditionFormPaymentOption, ConditionFormOtherOption } from "./style";


class Index extends Component{

    form = React.createRef();

    constructor(props){
        super(props);

        this.filter = this.filter.bind(this);
        this.refilter = this.refilter.bind(this);
        this.syncFormAndAddress = this.syncFormAndAddress.bind(this);
    }

    render(){

        const { condition } = this.props;

        return (
            <Fragment>
                
                <Wrapper>
                    
                    <TitleBox>
                        <Title>進階條件搜尋</Title>
                    </TitleBox>
    
                    <ConditionFormBox>
                        <ConditionForm onFinish={this.filter} ref={this.form}>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemArea label="地區篩選" name="area">
                                        <ConditionFormArea  options={condition.area} placeholder="請選擇欲篩選的區域" />
                                    </ConditionFormItemArea>
                                </ConditionFormCol>
    
                            </ConditionFormRow>
    
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemUniversity label="大學篩選" name="university">
                                        <ConditionFormUniversity mode="multiple" placeholder="請選擇欲篩選的大學" showSearch={true} onSearch={null}>
                                            {
                                                condition.university.map((elem, idx) => {
                                                    return (
                                                        <ConditionFormUniversityOption value={elem.value}>{elem.label}</ConditionFormUniversityOption>
                                                    )
                                                })
                                            }
                                        </ConditionFormUniversity>
                                    </ConditionFormItemUniversity>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemDelivery label="交貨方式" name="delivery">
                                        <ConditionFormDelivery mode="multiple" placeholder="請選擇欲篩選的交貨方式">
                                            {
                                                condition.delivery.map((elem, idx) => {
                                                    return (
                                                        <ConditionFormDeliveryOption value={elem.value}>{elem.label}</ConditionFormDeliveryOption>
                                                    )
                                                })
                                            }
                                        </ConditionFormDelivery>
                                    </ConditionFormItemDelivery>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemResource label="書籍來源" name="resource">
                                        <ConditionFormResource mode="multiple" placeholder="請選擇欲篩選的書籍來源">
                                            {
                                                condition.resource.map((elem, idx) => {
                                                    return (
                                                        <ConditionFormResourceOption value={elem.value}>{elem.label}</ConditionFormResourceOption>
                                                    )
                                                })
                                            }
                                        </ConditionFormResource>
                                    </ConditionFormItemResource>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemPayment label="付款方式" name="payment">
                                        <ConditionFormPayment mode="multiple" placeholder="請選擇欲篩選的付款方式">
                                            {
                                                condition.payment.map((elem, idx) => {
                                                    return (
                                                        <ConditionFormPaymentOption value={elem.value}>{elem.label}</ConditionFormPaymentOption>
                                                    )
                                                })
                                            }
                                        </ConditionFormPayment>
                                    </ConditionFormItemPayment>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemOther label="特殊條件" name="other">
                                        <ConditionFormOther mode="multiple" placeholder="請選擇欲篩選的特殊條件">
                                            {
                                                condition.other.map((elem, idx) => {
                                                    return (
                                                        <ConditionFormOtherOption value={elem.value}>{elem.label}</ConditionFormOtherOption>
                                                    )
                                                })
                                            }
                                        </ConditionFormOther>
                                    </ConditionFormItemOther>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow align="middle" justify="center">
                                <ConditionFormCol span={24}>
                                    <ConditionFormItemReview label="商品評價" name="review">
                                        <ConditionFormReview />
                                    </ConditionFormItemReview>
                                </ConditionFormCol>
                            </ConditionFormRow>
                            <ConditionFormRow  align="middle" justify="center">
                                <ConditionFormCol span={12}>
                                    <ConditionFormItemCommit>
                                       <ConditionFormCommit htmlType="submit">馬上篩選</ConditionFormCommit>
                                    </ConditionFormItemCommit>
                                </ConditionFormCol>
                                    <ConditionFormItemClear>
                                        <ConditionFormClear htmlType="button" onClick={this.refilter}>清除篩選</ConditionFormClear>
                                    </ConditionFormItemClear>
                                <ConditionFormCol span={12}>
                                </ConditionFormCol>
                            </ConditionFormRow>
    
                        </ConditionForm>
                    </ConditionFormBox>
                   
                    
                </Wrapper>
                
            </Fragment>
        )
    }

    componentDidMount(){

        // props function 取出
        const { getCondition } = this.props;

        // 要求資料
        getCondition(this.syncFormAndAddress);
    }

    componentDidUpdate(prevProps){
        if(this.props.location.search != prevProps.location.search){
            this.syncFormAndAddress();
        }
    }

    refilter(){
        this.form.current.resetFields();
        this.form.current.submit();
    }

    filter(condition){
        // 新query
        let query = new URLSearchParams();
        
        // 取得keyword
        let keyword = (new URLSearchParams(this.props.location.search)).get("keyword");

        // 加入keyword
        query.set("keyword", keyword);

        // 加入區域
        if(condition.area){
            query.set("city", condition.area[0])
            query.set("district", condition.area[1]);
        };

        // 加入大學
        if(condition.university){
            if(condition.university.length!=0){
                query.set("university", condition.university);
            }
        };
        
        // 加入交貨方式
        if(condition.delivery){
            if(condition.delivery.length!=0){
                query.set("delivery", condition.delivery);
            }
        }


        // 加入書籍來源
        if(condition.resource){
            if(condition.resource.length!=0){
                query.set("resource", condition.resource);
            }
        }

        // 加入付款方式
        if(condition.payment){
            if(condition.payment.length!=0){
                query.set("payment", condition.payment);
            }
        }

        // 加入特殊條件
        if(condition.other){
            if(condition.other.length!=0){
                query.set("other", condition.other);
            }
        }

        if(condition.review){
            query.set("review", condition.review);
        }

        this.props.history.push({
            pathname: "/search",
            search: "?" + query.toString(),
        })

    }

    syncFormAndAddress(){
        // 解析網址
        const query = new URLSearchParams(this.props.location.search);
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


        
        let formValue = {}
        
        if(config.city && config.district) formValue.area = [Number(config.city), Number(config.district)];

        formValue.university = [];
        if(config.university){
            let universityArr = config.university.split(",");
            for(let i=0;i<universityArr.length;i++){
                formValue.university.push(Number(universityArr[i]));
            }
        }
        
        formValue.delivery = [];
        if(config.delivery){
            let deliveryArr = config.delivery.split(",");
            for(let i=0;i<deliveryArr.length;i++){
                formValue.delivery.push(Number(deliveryArr[i]));
            }
        }

        formValue.resource = [];
        if(config.resource){
            let resourceArr = config.resource.split(",");
            for(let i=0;i<resourceArr.length;i++){
                formValue.resource.push(Number(resourceArr[i]));
            }
        }

        formValue.payment = [];
        if(config.payment){
            let paymentArr = config.payment.split(",");
            for(let i=0;i<paymentArr.length;i++){
                formValue.payment.push(Number(paymentArr[i]));
            }
        }

        formValue.other = [];
        if(config.other){
            let otherArr = config.other.split(",");
            for(let i=0;i<otherArr.length;i++){
                formValue.other.push(Number(otherArr[i]));
            }
        }
        
        formValue.review = 0;
        if(config.review) formValue.review = Number(config.review);

        this.form.current.setFieldsValue(formValue);
    }
}

const mapStateToProps = (state) => {
    return {
        condition: state.search.get("condition").toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCondition(successfulCallback){
            dispatch(actionCreators.getCondition(successfulCallback));
        },
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));