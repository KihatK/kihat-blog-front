import React, { memo } from 'react';

import { StyledDivTitle } from '../../style/containers/PostCard';

const PostCardTitle = ({ title }) => {
  return (
    <>
      <StyledDivTitle>
        {title}
      </StyledDivTitle>
    </>
  );
}

export default memo(PostCardTitle);