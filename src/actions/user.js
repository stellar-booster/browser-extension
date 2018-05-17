import {Keypair} from 'stellar-sdk';
import {loading, error} from './ui';
import {USER_LOGIN} from '../constants/action-types';
import createTestAccount from '../utils/stellar/create-test-account';
import server from '../utils/stellar/server';

export const login = (secretKey, useTestnet = true) => async (dispatch) => {
  dispatch(loading(true));
  server.set(useTestnet);

  let keypair;

  try {
    keypair = Keypair.fromSecret(secretKey);
  } catch (e) {}

  if (!keypair) {
    dispatch(loading(false));
    dispatch(error(new Error('Invalid key')));
    return;
  }

  let account = null;
  try {
    account = await server.get().loadAccount(keypair.publicKey());
  } catch (e) {}

  if (!account) {
    dispatch(loading(false));
    dispatch(error(new Error('Account not found')));
    return;
  }

  dispatch(loading(false));
  dispatch(error(null));
  dispatch({
    type: USER_LOGIN,
    payload: {
      account,
      secretKey
    }
  });

};

export const createAccount = (useTestnet = true) => async (dispatch) => {
  let keypair;
  server.set(useTestnet);

  dispatch(loading(true));

  try {
    keypair = await createTestAccount();
  } catch (e) {}

  if (!keypair) {
    dispatch(loading(false));
    dispatch(error(new Error('Failed to create test account')));
    return;
  }

  dispatch(loading(false));
  dispatch(error(null));
  dispatch({
    type: USER_LOGIN,
    payload: {
      secretKey: keypair.secret()
    }
  });
};
