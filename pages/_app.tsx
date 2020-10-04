import React from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';

import wrapper from '../store/makeStore';

import 'antd/dist/antd.css';  //antd 스타일 적용
import '../css/style.css';  //body 태그에 #F0F0F0 적용
import 'draft-js/dist/Draft.css';  //기본 draft-js css 적용
import 'draft-js-static-toolbar-plugin/lib/plugin.css';  //static toolbar css 적용
import 'draft-js-alignment-plugin/lib/plugin.css';  //alignmenttool css 적용
import 'draft-js-code/demo/editor.css';  //draft.css 외에 필요한 css 여기서 수정
import 'prismjs/themes/prism.css'; // add prism.css to add highlights

interface Props extends AppProps {
    Component: React.FC,
};

const AppLayout = dynamic(() => import('../components/AppLayout'));

const App = ({ Component }: Props) => {
    return (
        <>
            <Helmet
                title="Kihat Blog"
                htmlAttributes={{ lang: 'ko' }}
                meta={[{
                    charSet: 'UTF-8',
                }, {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
                }, {
                    name: 'description', content: '컴퓨터 공부를 하다 배운 내용들을 적는 블로그입니다.',
                }, {
                    name: 'og:title', content: 'Kihat Blog',
                }, {
                    name: 'og:description', content: '컴퓨터 공부를 하다 배운 내용들을 적는 블로그입니다.',
                }, {
                    name: 'og:type', content: 'website',
                }, {
                    name: 'og:image', content: 'https://kihat-blog.s3.amazonaws.com/original/K.png',
                }, {
                    name: 'twitter:card', content: 'summary',
                }, {
                    name: 'twitter:title', content: 'Kihat Blog',
                }, {
                    name: 'twitter:description', content: '컴퓨터 공부를 하다 배운 내용들을 적는 블로그입니다.',
                }, {
                    name: 'twitter:image', content: 'https://kihat-blog.s3.amazonaws.com/original/K.png',
                }]}
                link={[{
                    rel: 'shortcut icon', href: 'https://kihat-blog.s3.amazonaws.com/original/K.png',
                }]}
            />
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    );
}

export default wrapper.withRedux(App);