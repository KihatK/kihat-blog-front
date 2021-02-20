import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Category from './PostCardContent/Category';
import Bookmark from './PostCardContent/Bookmark';
import Title from './PostCardContent/Title';
import Avatar from './PostCardContent/Avatar';
import Nickname from './PostCardContent/Nickname';
import Time from './PostCardContent/Time';
import Content from './PostCardContent/Content';
import Comment from './Comment';
import { StyledCard } from '../style/containers/PostCard';
import { PostProps } from '../util/props';

const PostCard = ({ post }: PostProps) => {
    return (
      <>
        <StyledCard
            title={
                <div>
                    <Category scategory={post.scategory} />
                    <Bookmark uuid={post.uuid} />
                    <Title title={post.title} />
                    <br />
                    <Avatar avatar={post.User.nickname[0]} />
                    <Nickname nickname={post.User.nickname} />
                    <Time createdAt={post.createdAt} />
                </div>
            }
            bordered={true}
        >
            <Content content={post.content} />
            <Comment Comments={post.Comments} uuid={post.uuid} admin={false} />
        </StyledCard>
      </>
    );
}

export default PostCard;