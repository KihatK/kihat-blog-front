import React, { memo } from 'react';
import dynamic from 'next/dynamic';

import { StyledCommentDiv } from '../../style/containers/PostCard';

const CommentList = dynamic(() => import('../../components/CommentList'), { loading: () => <p>로딩중...</p>, ssr: false });

const Toggle = ({ toggleComment, post }) => {
  return (
    <>
      {toggleComment ? (
        <StyledCommentDiv>
          <CommentList post={post} />
          <div>
            &nbsp;
          </div>
        </StyledCommentDiv>
      ) : null}
    </>
  );
}

export default memo(Toggle);