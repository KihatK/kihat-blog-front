import styled, { createGlobalStyle } from 'styled-components';
import { Row, Col, Menu } from 'antd';

export const ImageWidth = createGlobalStyle`
    & .image-width-100 img {
        width: 100% !important;
    }
`;

export const DraftEditorStyled = createGlobalStyle`
    & .DraftEditor-editorContainer blockquote {
        border-left: 5px solid #eee;
        color: #666;
        font-family: 'Hoefler Text', 'Georgia', serif;
        font-style: italic;
        margin: 16px 0;
        padding: 10px 20px;
    }

    & .DraftEditor-editorContainer .public-DraftStyleDefault-pre > pre {
        background-color: rgba(0, 0, 0, 0.05);
        font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
        font-size: 16px;
        padding: 20px;
        margin-bottom: 20px;
    }
`;

export const MenuUnderlined = createGlobalStyle`
    & .ant-menu-horizontal {
        border-bottom: 2px solid #f0f0f0 !important;
    }
    & .ant-menu-item: hover, & .ant-menu-item-active {
        color: #1890ff !important;
        border-bottom: 0px !important;
    }
    & .ant-menu-horizontal > .ant-menu-item-selected {
        color: rgba(0, 0, 0, 0.65);
        border-bottom: 0px;
    }
    & .ant-menu-horizontal > .ant-menu-item {
        border-bottom: 0px;
    }
    & .ant-menu-horizontal > .ant-menu-submenu {
        border-bottom: 0px !important;
    }
    & .ant-menu-item-selected a:hover {
        color: #1890ff !important;
        border-bottom: 0px !important;
    }
    & .ant-menu-item-selected a {
        color: rgba(0, 0, 0, 0.65) !important;
        border-bottom: 0px !important;
    }
`;

export const StyledMenu = styled(Menu)`
    && {
        height: 65px;
        text-align: center;
        position: fixed;
        width: 100%;
        z-index: 1000;
    }
`;

export const StyledMenuItem = styled(Menu.Item)`
    && {
        vertical-align: middle;
        top: 5px;
        float: left;
    }
`;

export const StyledMenuItemBlog = styled(Menu.Item)`
    && {
        vertical-align: middle;
        font-size: 35px;
        top: 5px;
        text-align: center;
    }
`;

export const StyledMenuItemLogin = styled(Menu.Item)`
    && {
        vertical-align: middle;
        top: 7px;
        float: right;
    }
`;

export const StyledDiv = styled.div`
    && {
        text-align: center;
    }
`;

export const StyledImg = styled.img`
    && {
        @media only screen and (max-width: 768px) {
            height: 250px;
            margin-top: 65px;
        }
        width: 100%;
        height: 700px;
        position: absolute;
        margin-top: 65px;
    }
`;

export const StyledRow = styled(Row)`
    && {
        @media only screen and (max-width: 768px) {
            padding-top: 300px;
        }
        padding-top: 500px;
    }
`;

export const MainContentCol = styled(Col)`
    && {
        z-index: 100;
    }
`;