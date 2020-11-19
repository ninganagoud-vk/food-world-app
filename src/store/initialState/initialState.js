const initialState = {
  comments: JSON.parse(localStorage.getItem('comments')),
  id: null,
  serachedItems: [],
  error: null
};
export default initialState;