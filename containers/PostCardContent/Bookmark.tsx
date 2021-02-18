import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from 'antd';

import { RootState } from '../../reducers';
import { BOOKMARK_POST_REQUEST, UNBOOKMARK_POST_REQUEST } from '../../reducers/user';
import { StyledBookFilled, StyledBookOutlined, StyledNoneDiv } from '../../style/containers/PostCard';
import { BookMarkType } from '../../util/user';

const Bookmark = ({ uuid }) => {
  const dispatch = useDispatch();

  const nickname = useSelector((state: RootState) => state.user.me?.nickname);
  const BookMarked = useSelector((state: RootState) => state.user.me?.BookMarked);

  const bookmarkPost = useCallback(uuid => () => {
    dispatch({
        type: BOOKMARK_POST_REQUEST,
        data: uuid,
    });
}, []);
const unbookmarkPost = useCallback(uuid => () => {
    dispatch({
        type: UNBOOKMARK_POST_REQUEST,
        data: uuid,
    });
}, []);

  return (
    <>
      <Popover content={<div>북마크</div>}>
        {nickname
          ? BookMarked?.find((p: BookMarkType) => p.uuid === uuid)
            ? <StyledBookFilled onClick={unbookmarkPost(uuid)}/>
            : <StyledBookOutlined onClick={bookmarkPost(uuid)}/>
          : <StyledNoneDiv></StyledNoneDiv> 
        }
      </Popover>
    </>
  );
}

export default memo(Bookmark);