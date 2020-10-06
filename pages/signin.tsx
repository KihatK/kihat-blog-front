import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper, { IStore } from '../store/makeStore';
import { RootState } from '../reducers';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { GET_BCATEGORY_REQUEST } from '../reducers/category';

const SigninContent = dynamic(() => import('../containers/SigninContent'), { loading: () => <p>로딩중...</p> });

const SignIn = () => {
    const nickname = useSelector((state: RootState) => state.user.me?.nickname);
    const { isLoggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (isLoggedIn) {
            Router.push('/');
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (nickname) {
            Router.push('/');
            alert('이미 로그인중입니다.');
        }
    }, []);

    return (
        <>
            {nickname
                ? (
                    <h1 style={{ color: 'blue' }}>
                        로딩중입니다. 잠시만 기다려주세요.
                    </h1>
                )
                : <SigninContent/>
            }
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, store }) => {
    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
        type: LOAD_USER_REQUEST,
    });
    store.dispatch({
        type: GET_BCATEGORY_REQUEST,
    });
    store.dispatch(END);
    await (store as IStore).sagaTask?.toPromise();
});

export default SignIn;