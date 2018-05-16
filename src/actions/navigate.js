import {push} from 'react-router-redux';

const navigate = (url) => (dispatch) => {
  console.log(url);
  dispatch(push(url));
};

export default navigate;
