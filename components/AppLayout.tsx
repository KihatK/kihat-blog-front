import React, { useState, useCallback } from 'react';

import HeaderLayout from './HeaderLayout';
import MainLayout from './MainLayout';
import CategoryDrawer from '../containers/CategoryDrawer';
import {
    StyledImg, MenuUnderlined, DraftEditorStyled, StyledDiv, ImageWidth
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
            <MainLayout children={children}/>
            <CategoryDrawer visible={visible} onClose={onClose}/>
            <StyledDiv>
                <br/>
                    Made by Kihat
                <br/>
                &nbsp;
            </StyledDiv>
        </>
    );
}

export default AppLayout;