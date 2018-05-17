import payment from '../utils/stellar/payment';
import {isValidPublicKey} from '../utils/stellar/validation';
import {loading, error, notify} from './ui';

export const transfer = (destination, amount, memo) => async (dispatch, getState) => {

  if (!isValidPublicKey(destination)) {
    dispatch(error(new Error('Invalid destination key')));
    return;
  }

  if (!amount || isNaN(amount) || Number(amount) === 0) {
    dispatch(error(new Error('Invalid amount')));
    return;
  }

  dispatch(loading(true));
  dispatch(notify(true));

  const secretKey = getState().user.get('secretKey');

  let result;

  try {
    result = await payment(destination, secretKey, amount, memo);
  } catch (e) {
    console.error(e);
  }

  if (!result) {
    dispatch(loading(false));
    dispatch(error(new Error('Transfer failed')));
    return;
  }

  dispatch(loading(false));
  dispatch(error(null));
  dispatch(notify('Transfer complete'));
};
