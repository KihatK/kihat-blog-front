import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SunEditor from 'suneditor-react';

import { ADD_POST_REQUEST } from '../reducers/post';
import { StyledButton } from '../style/containers/DraftEditor';

const Editor = ({ nickname, title, category }) => {
  const dispatch = useDispatch();

  const [contents, setContents] = useState('');

  const clickPost = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        title,
        nickname,
        content: contents,
        scategory: category,
      },
    });
  }, [contents, title, nickname, category]);

  return (
    <>
      <SunEditor
        name="My-Editor"
        lang="ko"
        height="500"
        placeholder="게시글을 작성해보세요..."
        setContents={contents}
        onChange={setContents}
        autoFocus={true}
        setOptions={{
          buttonList: [
            ['redo', 'undo'],
            ['fontSize', 'font', 'formatBlock'],
            ['paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
            ['fontColor', 'hiliteColor'],
            ['outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video'],
            ['fullScreen', 'showBlocks', 'codeView', 'preview']
          ]
        }}
      />
      <StyledButton onClick={clickPost}>글쓰기</StyledButton>
    </>
  );
}

export default Editor;