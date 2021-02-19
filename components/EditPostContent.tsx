import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

import EditPostTitle from './EditPost/EditPostTitle';
import { RootState } from '../reducers';

const EditorEdit = dynamic(() => import('../containers/EditorEdit'));

const EditPostContent = () => {
    const nickname = useSelector((state: RootState) => state.user.me?.nickname);
    const admin = useSelector((state: RootState) => state.user.me?.admin);
    const scategoryList = useSelector((state: RootState) => state.category.scategoryList);
    const { editingSinglePost, isEditedPost } = useSelector((state: RootState) => state.post);

    const [title, setTitle] = useState(editingSinglePost?.title);
    const [category, setCategory] = useState(editingSinglePost?.scategory);
    const countRef = useRef(false);

    const changeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const changeCategory = useCallback(value => {
        setCategory(value.key);
    }, []);

    useEffect(() => {
        if (!admin) {
            Router.push('/');
        }
    }, [admin]);

    useEffect(() => {
        if (!countRef.current) {
            countRef.current = true;
        }
        else {
            if (isEditedPost) {
                Router.back();
            }
        }
    }, [isEditedPost]);

    return (
      <>
        <main>
            <EditPostTitle title={title} changeTitle={changeTitle} />
            <Select
                style={{ display: 'block' }}
                labelInValue
                defaultValue={{ key: category }}
                onChange={changeCategory}
            >
                {scategoryList.map((c: { name: string }) => (
                    <Select.Option key={c.name} value={c.name}>{c.name}</Select.Option>
                ))}
            </Select>
            <EditorEdit nickname={nickname} title={title} category={category}
              editing={editingSinglePost?.content} uuid={editingSinglePost?.uuid}
            />
        </main>
      </>
    );
}

export default EditPostContent;