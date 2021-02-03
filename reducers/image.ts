import produce, { enableES5 } from 'immer';

export interface ImageState {
    imageUrl: string,
};

export const initialState: ImageState = {
    imageUrl: '',
}

enableES5();

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export interface UploadImageRequestAction {
    type: typeof UPLOAD_IMAGE_REQUEST,
    data: FormData,
};
interface UploadImageSuccessAction {
    type: typeof UPLOAD_IMAGE_SUCCESS,
    data: string,
};
interface UploadImageFailureAction {
    type: typeof UPLOAD_IMAGE_FAILURE,
    error: any,
};

type ImageAction = 
    | UploadImageRequestAction | UploadImageSuccessAction | UploadImageFailureAction;

const imageReducer = (state = initialState, action: ImageAction): ImageState => {
  return produce(state, (draft) => {
      switch (action.type) {
          case UPLOAD_IMAGE_REQUEST: {
              draft.imageUrl = '';
              break;
          }
          case UPLOAD_IMAGE_SUCCESS: {
              draft.imageUrl = action.data;
              break;
          }
          case UPLOAD_IMAGE_FAILURE: {
              break;
          }
          default: {
              break;
          }
      }
  });
};

export default imageReducer;