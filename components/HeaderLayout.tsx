import React, { memo } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons'

import UserProfile from '../containers/UserProfile';
import { RootState } from '../reducers';
import {
  StyledMenu, StyledMenuItem, StyledMenuItemBlog, StyledMenuItemLogin
} from '../style/components/AppLayout';

const HeaderLayout = ({ showDrawer }) => {
  const me = useSelector((state: RootState) => state.user.me);

  return (
    <>
      <header>
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
      </header>
    </>
  );
}

export default memo(HeaderLayout);