import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

import CategoryDrawer from '../containers/CategoryDrawer';
import UserProfile from '../containers/UserProfile';
import { RootState } from '../reducers';
import {
    StyledMenu, StyledMenuItem, StyledMenuItemBlog, StyledImg, StyledRow, MainContentCol,
    StyledMenuItemLogin, MenuUnderlined, DraftEditorStyled, StyledDiv, ImageWidth
} from '../style/components/AppLayout';

interface Props {
    children: any;
}

const AppLayout = ({ children }: Props) => {
    const me = useSelector((state: RootState) => state.user.me);

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
            <StyledMenu mode="horizontal">
                <StyledMenuItem key="category" onClick={showDrawer}>
                    <MenuOutlined />
                </StyledMenuItem>
                <StyledMenuItemBlog key="blog">
                    <Link href="/">
                        <a>Kihat Blog</a>
                    </Link>
                </StyledMenuItemBlog>
                {me
                    ? (
                        <UserProfile />
                    )
                    : (
                        <StyledMenuItemLogin key="login">
                            <Link href="/signin" prefetch>
                                <a>로그인</a>
                            </Link>
                        </StyledMenuItemLogin>
                    )
                }
            </StyledMenu>
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