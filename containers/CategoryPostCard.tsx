import React, { useState, useCallback, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
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
import { RootState } from '../reducers';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import { BOOKMARK_POST_REQUEST, UNBOOKMARK_POST_REQUEST } from '../reducers/user';
import { DragA, StyledCard, StyledButtonDelete, StyledButtonEdit, StyledCommentDiv } from '../style/containers/PostCard';
import { PostProps } from '../util/props';

moment.locale('ko');

const CommentList = dynamic(() => import('../components/CommentList'), { loading: () => <p>로딩중...</p>, ssr: false });
const CommentForm = dynamic(() => import('./CommentForm'), { loading: () => <p>로딩중...</p>, ssr: false });

const CategoryPostCard = ({ post }: PostProps) => {
    const dispatch = useDispatch();
    const admin = useSelector((state: RootState) => state.user.me?.admin);
    const { isRemovedPost } = useSelector((state: RootState) => state.post);

    const [toggleComment, setToggleComment] = useState(false);
    const countRef = useRef(false);

    const clickToggleComment = useCallback(() => {
        setToggleComment(toggleComment => !toggleComment);
    }, []);

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
            <DragA onClick={clickToggleComment}>
                <u>댓글</u>
            </DragA>
            {admin
                && (
                    <>
                        <StyledButtonDelete onClick={removePost(post.uuid)}>삭제</StyledButtonDelete>
                        <StyledButtonEdit onClick={editPost(post.uuid)}>수정</StyledButtonEdit>
                    </>
                )
            }
            {toggleComment 
                ? <StyledCommentDiv>
                    <CommentForm post={post}/>
                    <CommentList post={post}/>
                    <div>
                        &nbsp;
                    </div>
                </StyledCommentDiv>
                : null
            }
        </StyledCard>
    );
}

export default CategoryPostCard;