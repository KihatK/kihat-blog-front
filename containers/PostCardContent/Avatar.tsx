import React, { memo } from 'react';

import { StyledAvatar } from '../../style/containers/PostCard';

const Avatar = ({ avatar }) => {
  return (
    <>
      <StyledAvatar>
        {avatar}
      </StyledAvatar>
    </>
  );
}

export default memo(Avatar);