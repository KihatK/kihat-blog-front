import React, { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { RootState } from '../reducers';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { StyledDiv, StyledSpan } from '../style/containers/UserProfile';

const UserProfile = () => {
    const dispatch = useDispatch();
    const nickname = useSelector((state: RootState) => state.user.me?.nickname);
    const admin = useSelector((state: RootState) => state.user.me?.admin);

    const [rotate, setRotate] = useState(false);

    const clickRotate = useCallback((e) => {
      e.preventDefault();
      setRotate(rotate => !rotate);
    }, []);

    const clickLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link href="/bookmarks">
                    <a>북마크</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link href="/setting">
                    <a>설정</a>
                </Link>
            </Menu.Item>
            {admin && (
                <Menu.Item>
                    <Link href="/categorysetting">
                        <a>카테고리</a>
                    </Link>
                </Menu.Item>
            )}
            <Menu.Item onClick={clickLogout}>
                로그아웃
            </Menu.Item>
        </Menu>
    );

    return (
        <StyledDiv>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={clickRotate}>
                    <StyledSpan>{`${nickname}님 `}<DownOutlined rotate={rotate ? 180 : 0} /></StyledSpan>
                </a>
            </Dropdown>
        </StyledDiv>
    );
};

export default memo(UserProfile);