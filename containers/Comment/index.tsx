import React, { memo, useState, useCallback } from 'react';

import Button from './Button';
import Toggle from './Toggle';

const Comment = ({ post, admin }) => {
  const [toggleComment, setToggleComment] = useState(false);

  const clickToggleComment = useCallback(() => {
      setToggleComment(toggleComment => !toggleComment);
  }, []);

  return (
    <>
      <Button clickToggleComment={clickToggleComment} />
      <Toggle toggleComment={toggleComment} post={post} admin={admin} />
    </>
  );
}

export default memo(Comment);