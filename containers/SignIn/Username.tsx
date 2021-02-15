import React, { memo } from 'react';
import { Form, Input } from 'antd';

const Username = ({ id, changeId }) => {
  return (
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: '아이디를 입력하셔야 합니다!' }]}
    >
      <Input value={id} onChange={changeId} autoComplete="username" />
    </Form.Item>
  );
}

export default memo(Username);