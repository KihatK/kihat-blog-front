import React, { memo } from 'react';

import { StyledInput } from '../../style/pages/editid';

const EditPostTitle = ({ title, changeTitle }) => {
  return (
    <>
      <StyledInput placeholder="제목을 입력하세요" value={title} onChange={changeTitle} />
    </>
  );
}

export default memo(EditPostTitle);