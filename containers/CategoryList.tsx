import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../reducers';
import { ADD_SCATEGORY_REQUEST } from '../reducers/category';
import { DragA, StyledP } from '../style/containers/CategoryList';
import { BcategoryType } from '../util/category';
import { CategoryListProps } from '../util/props';

const CategoryList = ({ category }: CategoryListProps) => {
    const [categoryOpen, setCategoryOpen] = useState(false);

    const dispatch = useDispatch();
    const { bcategory } = useSelector((state: RootState) => state.category);
    const admin = useSelector((state: RootState) => state.user.me?.admin);

    const bcategoryIndex = bcategory.findIndex((v: BcategoryType) => v.name === category.name);

    const clickCategory = useCallback(() => {
        setCategoryOpen(categoryOpen => !categoryOpen);
    }, []);

    const addCategory = useCallback(() => {
        const newCategory: string | null = prompt('카테고리의 이름을 입력하세요');
        if (newCategory) {
          const order = category.Scategories ? category.Scategories.length + 1 : 1;
          dispatch({
              type: ADD_SCATEGORY_REQUEST,
              Bcategory: category.name,
              data: newCategory,
              order,
          });
        }
        else {
          alert('카테고리 만들기가 취소되었습니다.');
        }
    }, [category]);

    return (
        <>
            <DragA onClick={clickCategory}><StyledP>
                {category.name}
            </StyledP></DragA>
            {
                categoryOpen &&
                <div>
                    {bcategory[bcategoryIndex]?.Scategories?.map((c: { name: string }) => 
                        <div key={c.name}>
                            &nbsp;&nbsp;
                            <Link href="/category/[category]" as={`/category/${c.name.replace(/\s/gi, "")}`} prefetch>
                                <a>{c.name}</a>
                            </Link>
                            <br/>
                        </div>
                    )}
                    {admin && 
                        (
                            <>
                                &nbsp;&nbsp;
                                <a onClick={addCategory}>+</a>
                            </>
                        )
                    }
                </div>
            }
        </>
    );
}

export default CategoryList;