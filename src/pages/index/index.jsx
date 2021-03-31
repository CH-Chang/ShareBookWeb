import React from "react";

import { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../../components/common/header/index";
import Carousel from "../../components/index/carousel/index";
import Banner  from "../../components/index/banner/index";
import Function from "../../components/index/function/index";
import Product from "../../components/index/product/index";
import ShopBack from "../../components/index/shopback/index";
import Footer from "../../components/common/footer/index";



import { actionCreators } from "../../stores/index/index";




class Index extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { headerSuggestion, headerMember, carousel, suggestion, officialSuggestion, hotRank, shopbackSuggestion } = this.props;
        
        return (
            <Fragment>
                <Header />
                <Carousel carousel={carousel} />
                <Function />
                <Banner banner={{img: "https://cf.shopee.tw/file/6ca6e0cadd025cb7b414bee793f9a3fe_xxhdpi"}}/>
                <Product title="為您推薦" products={suggestion} />
                <Product title="熱搜排行" products={hotRank} />
                <Product title="學步官書" products={officialSuggestion} />
                <Banner banner={{img: "https://cf.shopee.tw/file/6ca6e0cadd025cb7b414bee793f9a3fe_xxhdpi"}}/>
                <ShopBack shopbacks={shopbackSuggestion} />
                <Footer />
            </Fragment>
        )
    }

    componentDidMount(){
        const { getCarousel, getSuggestion, getHotRank, getOfficialSuggestion, getShopbackSuggestion } = this.props;

        getCarousel();
        getSuggestion();
        getHotRank();
        getOfficialSuggestion();
        getShopbackSuggestion();
    }

}

const mapStateToProps = (state) => {
    return {
        carousel: state.index.get("carousel").toJS(),
        suggestion: state.index.get("suggestion").toJS(),
        officialSuggestion: state.index.get("officialSuggestion").toJS(),
        hotRank: state.index.get("hotRank").toJS(),
        shopbackSuggestion: state.index.get("shopbackSuggestion").toJS(),
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        getCarousel(){
            dispatch(actionCreators.getCarousel());
        },
        getSuggestion(){
            dispatch(actionCreators.getSuggestion());
        },
        getOfficialSuggestion(){
            dispatch(actionCreators.getOfficialSuggestion());
        },
        getHotRank(){
            dispatch(actionCreators.getHotRank());
        },
        getShopbackSuggestion(){
            dispatch(actionCreators.getShopbackSuggestion());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);