import React from 'react';

import { DragA } from '../../style/containers/PostCard';

const Button = ({ clickToggleComment }) => {
  return (
    <>
      <DragA onClick={clickToggleComment}>
        <u>댓글</u>
      </DragA>
    </>
  );
}

export default Button;