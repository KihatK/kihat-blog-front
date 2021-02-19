import React, { useState, useCallback } from 'react';

import HeaderLayout from './HeaderLayout';
import MainLayout from './MainLayout';
import CategoryDrawer from '../containers/CategoryDrawer';
import FooterLayout from './FooterLayout';
import {
    StyledImg, MenuUnderlined, DraftEditorStyled, ImageWidth
} from '../style/components/AppLayout';

interface Props {
    children: any;
}

const AppLayout = ({ children }: Props) => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = useCallback(() => {
      setVisible(visible => !visible);
    }, []);

    // const showDrawer = useCallback(() => {
    //     setVisible(true);
    // }, []);
    // const onClose = useCallback(() => {
    //     setVisible(false);
    // }, []);

    return (
        <>
            <MenuUnderlined/>
            <ImageWidth/>
            <DraftEditorStyled/>
            <HeaderLayout showDrawer={toggleDrawer} />
            <StyledImg src="https://kihat-blog.s3.amazonaws.com/original/laptop-1209008.jpg" alt="main-page-image"/>
            <MainLayout children={children}/>
            <CategoryDrawer visible={visible} onClose={toggleDrawer}/>
            <FooterLayout/>
        </>
    );
}

export default AppLayout;