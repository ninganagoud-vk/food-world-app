import Axios from 'axios';
import { API_ID, API_KEY, FOOD_URL } from '../../assets/API';
import { message } from 'antd';
import {
  ADD_COMMENT,
  SET_LOCAL_STORAGE,
  SET_ID,
  GET_SEARCHED_ITES,
  ERROR,
  RESET
} from './types';

export const ErrorActionCreator = () => {
  return { type: ERROR };
};

export const actionAddComment = (comment) => dispatch => {
  return dispatch({ type: ADD_COMMENT, comment });
};


export const actionSetlocalStorage = (comments) => dispatch => {
  return dispatch({ type: SET_LOCAL_STORAGE, comments });
};
export const actionSetId = (id) => dispatch => {
  return dispatch({ type: SET_ID, id });
};

export const actionGetSearchedItems = (query) => async dispatch => {
  try {
    const foodSearchUrl = `${FOOD_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
    const items = await Axios.get(foodSearchUrl)
    console.log('itemsss',items)
    if (items && items.data && (items.data.hits.length === 0)) {
      dispatch(ErrorActionCreator());
      throw new Error("Sorry there Were no such items")
    } else {
      return dispatch({ type: GET_SEARCHED_ITES, items });
    }
  }
  catch (err) {
    message.error(err.message);
  }
};

export const actionReset = () => dispatch => {
  return dispatch({ type: RESET });
};
