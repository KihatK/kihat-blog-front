import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'antd';

import HeaderLayout from './HeaderLayout';
import CategoryDrawer from '../containers/CategoryDrawer';
import { RootState } from '../reducers';
import {
    StyledImg, StyledRow, MainContentCol,
    MenuUnderlined, DraftEditorStyled, StyledDiv, ImageWidth
} from '../style/components/AppLayout';

interface Props {
    children: any;
}

const AppLayout = ({ children }: Props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = useCallback(() => {
        setVisible(true);
    }, []);
    const onClose = useCallback(() => {
        setVisible(false);
    }, []);

    return (
        <>
            <MenuUnderlined/>
            <ImageWidth/>
            <DraftEditorStyled/>
            <HeaderLayout showDrawer={showDrawer} />
            <StyledImg src="https://kihat-blog.s3.amazonaws.com/original/laptop-1209008.jpg" alt="main-page-image"/>
            <StyledRow>
                <Col xs={24} md={2}>
                    
                </Col>
                <MainContentCol xs={24} md={20}>
                    {children}
                </MainContentCol>
                <Col xs={24} md={2}>

                </Col>
            </StyledRow>
            <CategoryDrawer visible={visible} onClose={onClose}/>
            <StyledDiv>
                <br />
                    Made by Kihat
                <br />
                &nbsp;
            </StyledDiv>
        </>
    );
}

export default AppLayout;