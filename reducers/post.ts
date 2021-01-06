import produce, { enableES5 } from 'immer';

import { CommentData, Post, AddPostData, EditPostData, AddCommentData } from '../util/post';

enableES5();

export type PostState = {
    mainPosts: Post[];
    singlePost: Post,
    editingSinglePost: Post,
    isAddingComment: boolean,
    isAddedComment: boolean,
    isAddedPost: boolean,
    isRemovedPost: boolean,
    isEditedPost: boolean,
};

export const initialState: PostState = {
    mainPosts: [],
    singlePost: {
        id: 1,
        uuid: 'Loading...',
        title: 'Loading...',
        content: 'Loading...',
        scategory: 'Loading...',
        view: 1,
        User: {
            nickname: 'Loading...',
        },
        Comments: [{
            content: 'Loading...',
            User: {
                nickname: 'Loading...',
            },
            createdAt: 'Loading...',
        }],
        createdAt: 'Loading...',
        updatedAt: 'Loading...',
        language: 'none',
    },
    editingSinglePost: null,
    isAddingComment: false,
    isAddedComment: false,
    isAddedPost: false,
    isRemovedPost: false,
    isEditedPost: false,
};

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export interface AddCommentRequestAction {
    type: typeof ADD_COMMENT_REQUEST,
    data: AddCommentData,
};
interface AddCommentSuccessAction {
    type: typeof ADD_COMMENT_SUCCESS,
    data: CommentData,
};
interface AddCommentFailureAction {
    type: typeof ADD_COMMENT_FAILURE,
    error: any,
};

export interface AddPostRequestAction {
    type: typeof ADD_POST_REQUEST,
    data: AddPostData,
};
interface AddPostSuccessAction {
    type: typeof ADD_POST_SUCCESS,
    data: Post,
}
interface AddPostFailureAction {
    type: typeof ADD_POST_FAILURE,
    error: any,
}

export interface GetPostsRequestAction {
    type: typeof GET_POSTS_REQUEST,
};
interface GetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS,
    data: Post[],
};
interface GetPostsFailureAction {
    type: typeof GET_POSTS_FAILURE,
    error: any,
};

export interface GetPostRequestAction {
    type: typeof GET_POST_REQUEST,
    data: string,
    editing: boolean,
};
interface GetPostSuccessAction {
    type: typeof GET_POST_SUCCESS,
    data: Post,
    editing: boolean,
};
interface GetPostFailureAction {
    type: typeof GET_POST_FAILURE,
    error: any,
};

export interface RemovePostRequestAction {
    type: typeof REMOVE_POST_REQUEST,
    data: string,
};
interface RemovePostSuccessAction {
    type: typeof REMOVE_POST_SUCCESS,
    data: string,
};
interface RemovePostFailureAction {
    type: typeof REMOVE_POST_FAILURE,
    error: any,
};

export interface EditPostRequestAction {
    type: typeof EDIT_POST_REQUEST,
    data: EditPostData,
};
interface EditPostSuccessAction {
    type: typeof EDIT_POST_SUCCESS,
    data: Post,
};
interface EditPostFailureAction {
    type: typeof EDIT_POST_FAILURE,
    error: any,
};

type PostAction = 
    | AddCommentRequestAction | AddCommentSuccessAction | AddCommentFailureAction
    | AddPostRequestAction | AddPostSuccessAction | AddPostFailureAction
    | GetPostsRequestAction | GetPostsSuccessAction | GetPostsFailureAction
    | GetPostRequestAction | GetPostSuccessAction | GetPostFailureAction
    | RemovePostRequestAction | RemovePostSuccessAction | RemovePostFailureAction
    | EditPostRequestAction | EditPostSuccessAction | EditPostFailureAction;

export default (state = initialState, action: PostAction): PostState => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_COMMENT_REQUEST: {
                draft.isAddingComment = true;
                draft.isAddedComment = false;
                break;
            }
            case ADD_COMMENT_SUCCESS: {
                draft.singlePost.Comments.push(action.data);
                draft.isAddingComment = false;
                draft.isAddedComment = true;
                break;
            }
            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.isAddedComment = false;
                break;
            }
            case ADD_POST_REQUEST: {
                draft.isAddedPost = false;
                break;
            }
            case ADD_POST_SUCCESS: {
                draft.mainPosts.unshift(action.data);
                draft.isAddedPost = true;
                break;
            }
            case ADD_POST_FAILURE: {
                draft.isAddedPost = false;
                break;
            }
            case GET_POSTS_REQUEST: {
                draft.mainPosts = [];
                break;
            }
            case GET_POSTS_SUCCESS: {
                action.data.forEach((p) => {
                    draft.mainPosts.push(p);
                })
                break;
            }
            case GET_POSTS_FAILURE: {
                break;
            }
            case GET_POST_REQUEST: {
                if (action.editing) {
                    draft.editingSinglePost = null;
                    break;
                }
                else {
                    draft.singlePost = null;
                    break;
                }
            }
            case GET_POST_SUCCESS: {
                if (action.editing) {  //수정중일 때 editorState 객체 상태
                    draft.editingSinglePost = action.data;
                    break;
                }
                else {  //글을 볼 때 html 상태
                    draft.singlePost = action.data;
                    break;
                }
            }
            case GET_POST_FAILURE: {
                break;
            }
            case REMOVE_POST_REQUEST: {
                draft.isRemovedPost = false;
                break;
            }
            case REMOVE_POST_SUCCESS: {
                const index = draft.mainPosts.findIndex(p => p.uuid === action.data);
                draft.mainPosts.splice(index, 1);
                draft.isRemovedPost = true;
                break;
            }
            case REMOVE_POST_FAILURE: {
                draft.isRemovedPost = false;
                break;
            }
            case EDIT_POST_REQUEST: {
                draft.isEditedPost = false;
                break;
            }
            case EDIT_POST_SUCCESS: {
                draft.isEditedPost = true;
                break;
            }
            case EDIT_POST_FAILURE: {
                draft.isEditedPost = false;
                break;
            }
            default: {
                break;
            }
        }
    });
}