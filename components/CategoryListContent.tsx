import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '../reducers';
import { StyledTable, StyledButton, StyledH1 } from '../style/pages/categoryid';

const CategoryListContent = () => {
    const Router = useRouter();

    const { postList } = useSelector((state: RootState) => state.postlist);
    const admin = useSelector((state: RootState) => state.user.me?.admin);

    const currentPage = Router.query.page ? Number(Router.query.page) : 1;
    const name = Router.query.category;
    
    const columns: { title: string, dataIndex: string, key: string, render?: (text: string) => JSX.Element }[] = [{
        title: '제목',
        dataIndex: 'titles',
        key: 'titles',
        render: (text) =>
            <Link href="/post/[id]" as={`/post/${text[1]}`}>
                <a>{text[0]}</a>
            </Link>,
    }, {
        title: '카테고리',
        dataIndex: 'scategory',
        key: 'scategory',
    }, {
        title: '날짜',
        dataIndex: 'createdAt',
        key: 'createdAt',
    }, {
        title: '조회수',
        dataIndex: 'view',
        key: 'view',
    }];

    const paginationOptions = {
      onChange: useCallback((current) => {
        Router.push({
          pathname: '/category/[category]',
          query: { page: current },
        },
        `/category/${name}?page=${current}`,
        { shallow: true });
      }, [name]),
      current: currentPage,
    }

    return (
        <main>
            <StyledH1>{Router.query.category}</StyledH1>
            <StyledTable columns={columns} dataSource={postList} pagination={paginationOptions} />
            {admin && 
                (
                    <Link href="/newpost">
                        <a>
                            <StyledButton>
                                글쓰기
                            </StyledButton>
                        </a>
                    </Link>
                )
            }
        </main>
    );
}

export default CategoryListContent;