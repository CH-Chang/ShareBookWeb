import React from "react";

import { Fragment, Component } from "react";

import Container from "../../../components/common/container/index";
import Header from "../../../components/common/header/index";
import Footer from "../../../components/common/footer/index";

import LinkBox from "../../../components/member/home/linkbox";

import { Content, Row, Col, } from "./style";

class Index extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Content>
                    <Container>
                        <Row gutter={24}>
                            <Col span={6}>
                                <LinkBox />
                            </Col>
                            <Col span={18}>

                            </Col>
                        </Row>
                    </Container>
                </Content>
                <Footer />
            </Fragment>
        )
    }
}

export default Index;