import React, { memo } from 'react';
import dynamic from 'next/dynamic';

import { StyledCommentDiv } from '../../style/containers/PostCard';

const CommentForm = dynamic(() => import('../CommentForm'), { loading: () => <p>로딩중...</p>, ssr: false });
const CommentList = dynamic(() => import('../../components/CommentList'), { loading: () => <p>로딩중...</p>, ssr: false });

const Toggle = ({ toggleComment, post, admin }) => {
  return (
    <>
      {toggleComment ? (
        <StyledCommentDiv>
          {admin && <CommentForm post={post} />}
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