import React, { memo } from 'react';

import { ContentDiv } from '../../style/containers/PostCard';

const Content = ({ content }) => {
  return (
    <>
      <ContentDiv className="post" dangerouslySetInnerHTML={{ __html: content }}>

      </ContentDiv>
    </>
  );
}

export default memo(Content);