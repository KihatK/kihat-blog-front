import React, { memo, useState, useCallback } from 'react';

import Button from './Button';
import Toggle from './Toggle';

const Comment = ({ Comments, uuid, admin }) => {
  const [toggleComment, setToggleComment] = useState(false);

  const clickToggleComment = useCallback(() => {
      setToggleComment(toggleComment => !toggleComment);
  }, []);

  return (
    <>
      <Button clickToggleComment={clickToggleComment} />
      <Toggle toggleComment={toggleComment} Comments={Comments} uuid={uuid} admin={admin} />
    </>
  );
}

export default memo(Comment);