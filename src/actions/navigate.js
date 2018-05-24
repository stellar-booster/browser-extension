import {push} from 'react-router-redux';

const navigate = (url) => (dispatch) => {
  dispatch(push(url));
};

export default navigate;
