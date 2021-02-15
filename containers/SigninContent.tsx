import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';

import Username from './SignIn/Username';
import Password from './SignIn/Password';
import { RootState } from '../reducers';
import { LOG_IN_REQUEST } from '../reducers/user';
import { StyledCard, StyledA, StyledDiv } from '../style/pages/signin';

const SigninContent = () => {
    const dispatch = useDispatch();
    const nickname = useSelector((state: RootState) => state.user.me?.nickname);
    const { isLoggingIn, isLoggingInError } = useSelector((state: RootState) => state.user);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const changeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const changePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const finishLogin = useCallback(() => {
        if (!nickname) {
            dispatch({
                type: LOG_IN_REQUEST,
                data: {
                    userId: id,
                    password,
                },
            });
        }
        else {
            alert('이미 로그인중입니다.');
        }
    }, [id, password, nickname]);

    return (
        <StyledCard>
            <h1>로그인하기</h1>
            <br />
            <Form onFinish={finishLogin}>
                <Username id={id} changeId={changeId} />
                <Password password={password} changePassword={changePassword} />
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoggingIn}>
                        로그인
                    </Button>
                    <Link href="/signup">
                        <StyledA>회원가입하기</StyledA>
                    </Link>
                </Form.Item>
                {isLoggingInError && <StyledDiv>{isLoggingInError}</StyledDiv>}
            </Form>
        </StyledCard>
    );
}

export default SigninContent;