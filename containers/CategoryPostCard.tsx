import React, { useCallback, useEffect, useRef } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Category from './PostCardContent/Category';
import Bookmark from './PostCardContent/Bookmark';
import Title from './PostCardContent/Title';
import Avatar from './PostCardContent/Avatar';
import Nickname from './PostCardContent/Nickname';
import Time from './PostCardContent/Time';
import Content from './PostCardContent/Content';
import Comment from './Comment';
import { RootState } from '../reducers';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import { StyledCard, StyledButtonDelete, StyledButtonEdit } from '../style/containers/PostCard';
import { PostProps } from '../util/props';

moment.locale('ko');

const CategoryPostCard = ({ post }: PostProps) => {
    const dispatch = useDispatch();
    const admin = useSelector((state: RootState) => state.user.me?.admin);
    const { isRemovedPost } = useSelector((state: RootState) => state.post);

    const countRef = useRef(false);

    const removePost = useCallback(uuid => () => {
        if (confirm('정말 삭제하시겠습니까?')) {
            dispatch({
                type: REMOVE_POST_REQUEST,
                data: uuid,
            });
        }
    }, []);
    const editPost = useCallback(uuid => () => {
        if (confirm('정말 수정하시겠습니까?')) {
            Router.push('/edit/[id]', `/edit/${uuid}`);
        }
    }, []);

    useEffect(() => {
        if (!countRef.current) {
            countRef.current = true;
        }
        else {
            if (isRemovedPost) {
                Router.back();
            }
        }
    }, [isRemovedPost]);

    return (
        <StyledCard
            title={
                <div>
                    <Category scategory={post.scategory} />
                    <Bookmark uuid={post.uuid} />
                    <Title title={post.title} />
                    <br />
                    <Avatar avatar={post.User.nickname[0]} />
                    <Nickname nickname={post.User.nickname} />
                    <Time createdAt={post.createdAt} />
                </div>
            }
            bordered={true}
        >
            <Content content={post.content} />
            <Comment post={post} admin={admin} />
            {admin
                && (
                    <>
                        <StyledButtonDelete onClick={removePost(post.uuid)}>삭제</StyledButtonDelete>
                        <StyledButtonEdit onClick={editPost(post.uuid)}>수정</StyledButtonEdit>
                    </>
                )
            }
        </StyledCard>
    );
}

export default CategoryPostCard;