import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Category from './PostCardContent/Category';
import Bookmark from './PostCardContent/Bookmark';
import PostCardTitle from './PostCardContent/PostCardTitle';
import Avatar from './PostCardContent/Avatar';
import Nickname from './PostCardContent/Nickname';
import Time from './PostCardContent/Time';
import Content from './PostCardContent/Content';
import { DragA, StyledCard, StyledCommentDiv } from '../style/containers/PostCard';
import { PostProps } from '../util/props';

const CommentList = dynamic(() => import('../components/CommentList'), { loading: () => <p>로딩중...</p>, ssr: false });

const PostCard = ({ post }: PostProps) => {
    const [toggleComment, setToggleComment] = useState(false);

    const clickToggleComment = useCallback(() => {
        if (toggleComment) {
            setToggleComment(false);
        }
        else {
            setToggleComment(true);
        }
    }, [toggleComment]);

    return (
      <>
        <StyledCard
            title={
                <div>
                    <Category scategory={post.scategory} />
                    <Bookmark uuid={post.uuid} />
                    <PostCardTitle title={post.title} />
                    <br />
                    <Avatar avatar={post.User.nickname[0]} />
                    <Nickname nickname={post.User.nickname} />
                    <Time createdAt={post.createdAt} />
                </div>
            }
            bordered={true}
        >
            <Content content={post.content} />
            <DragA onClick={clickToggleComment}>
                <u>댓글</u>
            </DragA>
            {toggleComment 
                ? <StyledCommentDiv>
                    <CommentList post={post}/>
                    <div>
                        &nbsp;
                    </div>
                </StyledCommentDiv>
                : null
            }
        </StyledCard>
      </>
    );
}

export default PostCard;