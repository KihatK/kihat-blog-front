import React from 'react';
import { Avatar, Comment, List } from 'antd';
import moment from 'moment';

import { CommentData } from '../util/post';

moment.locale('ko');

const CommentList = ({ Comments }: { Comments: CommentData[] }) => {
    return (
        <List
            style={{ position: 'relative', top: '20px' }}
            header={`${Comments ? Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={Comments}
            renderItem={item => (
                <li>
                    <Comment
                        author={item.User.nickname}
                        avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                        content={item.content}
                        datetime={moment(item.createdAt).format('YYYY-MM-DD HH:mm')}
                    />
                </li>
            )}
        />
    );
}

export default CommentList;