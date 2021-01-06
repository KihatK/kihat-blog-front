import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

import { RootState } from '../reducers';
import { StyledInput } from '../style/pages/editid';

const DraftEditorEdit = dynamic(() => import('../containers/DraftEditorEdit'));
const EditorEdit = dynamic(() => import('../containers/EditorEdit'));

const EditPostContent = () => {
    const nickname = useSelector((state: RootState) => state.user.me?.nickname);
    const admin = useSelector((state: RootState) => state.user.me?.admin);
    const scategoryList = useSelector((state: RootState) => state.category.scategoryList);
    const { editingSinglePost, isEditedPost } = useSelector((state: RootState) => state.post);

    const [title, setTitle] = useState(editingSinglePost?.title);
    const [category, setCategory] = useState(editingSinglePost?.scategory);
    const [language, setLanguage] = useState(editingSinglePost.language);
    const countRef = useRef(false);

    const changeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const changeCategory = useCallback(value => {
        setCategory(value.key);
    }, []);
    const changeLanguage = useCallback(value => {
        setLanguage(value.key);
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
        <main>
            <StyledInput placeholder="제목을 입력하세요" value={title} onChange={changeTitle} />
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
            <Select
                style={{ display: 'block' }}
                labelInValue
                defaultValue={{ key: language }}
                onChange={changeLanguage}
            >
                <Select.Option value="javascript">JavaScript</Select.Option>
                <Select.Option value="cpp">C++</Select.Option>
                <Select.Option value="none">None</Select.Option>
            </Select>
            <EditorEdit nickname={nickname} title={title} category={category}
                language={language} editing={editingSinglePost?.content} uuid={editingSinglePost?.uuid}
            />
        </main>
    );
}

export default EditPostContent;