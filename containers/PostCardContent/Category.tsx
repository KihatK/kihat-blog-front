import React, { memo } from 'react';

import { StyledDivScategory } from '../../style/containers/PostCard';

const Category = ({ scategory }) => {
  return (
    <>
      <StyledDivScategory>
        {scategory}
      </StyledDivScategory>
    </>
  );
}

export default memo(Category);