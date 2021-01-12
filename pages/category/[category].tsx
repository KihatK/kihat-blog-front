import React from 'react';
import dynamic from 'next/dynamic';
import { END } from 'redux-saga';
import axios from 'axios';

import wrapper, { IStore } from '../../store/makeStore';
import { GET_CATEGORY_POSTS_REQUEST } from '../../reducers/postlist';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import { GET_BCATEGORY_REQUEST } from '../../reducers/category';

const CategoryListContent = dynamic(() => import('../../components/CategoryListContent'), { loading: () => <p>로딩중...</p> });

const Category = () => {
    return (
        <>
            <CategoryListContent />
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, req, params }) => {
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
    store.dispatch({
        type: GET_CATEGORY_POSTS_REQUEST,
        data: params?.category,
    });
    store.dispatch(END);
    await (store as IStore).sagaTask?.toPromise();
});

export default Category;