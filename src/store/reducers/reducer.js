import initialState from '../initialState/initialState';
import {
  ADD_COMMENT,
  SET_LOCAL_STORAGE,
  SET_ID,
  GET_SEARCHED_ITES,
  ERROR,
  RESET
} from '../actions/types';

const reducer = (state = initialState, action) => {
  let newListState = { ...state };
  switch (action.type) {
    case ADD_COMMENT:
      let temp = [...newListState.comments]
      newListState.comments.forEach(item => {
        if (item.id === action.comment.id) {
          let temparr = [...temp[item.id - 1].comments]
          temparr = [{ ...action.comment.obj }, ...temparr]
          let dumm = { ...item }
          dumm = { ...dumm, comments: temparr }
          temp.splice(item.id - 1, 1, { id: dumm.id, comments: dumm.comments })
        }
      })
      localStorage.setItem('comments', JSON.stringify(temp));
      newListState = {
        ...state,
        comments: temp
      };
      break;
    case SET_LOCAL_STORAGE:
      localStorage.setItem('comments', JSON.stringify(action.comments));
      newListState = {
        ...newListState,
        comments: JSON.parse(localStorage.getItem('comments')),
      };
      break;
    case SET_ID:
      newListState = {
        ...newListState,
        id: action.id
      };
      break;
    case GET_SEARCHED_ITES:
      newListState = {
        ...newListState,
        serachedItems: action.items,
        error: null
      };
      break;
    case ERROR:
      newListState = {
        ...newListState,
        error: true,
      };
      break;
    case RESET:
      newListState = {
        ...newListState,
        error: null,
      };
      break;
    default:
      break;
  }
  return newListState;
};
export default reducer;