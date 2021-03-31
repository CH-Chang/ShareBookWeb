import React from "react";

import { Fragment, Component } from "react";

import Container from "../../../components/common/container/index";
import Header from "../../../components/common/header/index";
import Footer from "../../../components/common/footer/index";

class Index extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        )
    }
}

export default Index;