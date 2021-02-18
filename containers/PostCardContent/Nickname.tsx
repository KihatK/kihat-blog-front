import React, { memo } from 'react';

import { StyledSpanNickname } from '../../style/containers/PostCard';

const Nickname = ({ nickname }) => {
  return (
    <>
      <StyledSpanNickname>
        {nickname}
      </StyledSpanNickname>
    </>
  );
}

export default memo(Nickname);