import React from "react";

import { Fragment } from "react";
import { connect } from "react-redux";

import InformationForm from "../informationForm/index";
import SchoolForm from "../schoolForm/index";

import { Tabs, TabPane } from "./style";

const Index = (props) => {

    const { schoolVerify, getSchoolVerifyValidateCode, editInformation, getEditInformationValidateCode } = props;

    return (
        <Fragment>
            <Tabs defaultActiveKey={1}>
                <TabPane tab="個人資料變更" key={1}>
                    <InformationForm editInformation={editInformation} getEditInformationValidateCode={getEditInformationValidateCode}/>
                </TabPane>
                <TabPane tab="校園資料變更" key={2}>
                    <SchoolForm schoolVerify={schoolVerify} getSchoolVerifyValidateCode={getSchoolVerifyValidateCode} />
                </TabPane>
            </Tabs>

        </Fragment>
    )
}



export default Index;