import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'antd';

import { ADD_COMMENT_REQUEST } from '../reducers/post';
import { RootState } from '../reducers';
import { StyledButton } from '../style/containers/CommentForm';

const CommentForm = ({ uuid }) => {
    const dispatch = useDispatch();
    const { isAddingComment, isAddedComment } = useSelector((state: RootState) => state.post);
    const me = useSelector((state: RootState) => state.user.me);

    const [comment, setComment] = useState('');
    const countRef = useRef(false);

    const changeComment = useCallback((e) => {
        setComment(e.target.value);
    }, []);

    const finishComment = useCallback(() => {
        if (me) {
          dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                comment,
                postId: uuid,
            },
          });
        }
        else {
          alert('로그인한 유저만 댓글을 쓰실 수 있습니다.');
        }
    }, [comment]);

    useEffect(() => {
        if (!countRef.current) {
            countRef.current = true;
        }
        else {
            if (isAddedComment) {
                setComment('');
            }
        }
    }, [isAddedComment]);

    return (
        <Form onFinish={finishComment}>
            <Input.TextArea rows={3} value={comment} onChange={changeComment} />
            <StyledButton htmlType="submit" loading={isAddingComment}>입력</StyledButton>
        </Form>
    );
}

export default CommentForm;