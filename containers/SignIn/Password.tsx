import React, { memo } from 'react';
import { Form, Input } from 'antd';

const Password = ({ password, changePassword }) => {
  return (
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: '비밀번호를 입력하셔야 합니다!' }]}
    >
      <Input.Password value={password} onChange={changePassword} autoComplete="current-password" />
    </Form.Item>
  );
}

export default memo(Password);