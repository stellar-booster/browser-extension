import { Keypair } from 'stellar-sdk'
import { loading, error } from './ui'
import pushRouter from './navigate'
import { USER_LOGIN, USER_LOGOUT } from '../constants/action-types'
import testnetAccount from '../utils/stellar/testnet-account'
import server from '../utils/stellar/server'

export const login = (secretKey, useTestnet = true) => async (dispatch) => {
  dispatch(loading(true))
  server.set(useTestnet)

  let keypair

  try {
    keypair = Keypair.fromSecret(secretKey)
  } catch (e) {}

  if (!keypair) {
    dispatch(loading(false))
    dispatch(error(new Error('Invalid key')))
    return
  }

  let account = null
  try {
    account = await server.get().loadAccount(keypair.publicKey())
  } catch (e) {}

  if (!account) {
    dispatch(loading(false))
    dispatch(error(new Error('Account not found')))
    return
  }

  dispatch(loading(false))
  dispatch(error(null))
  dispatch({
    type: USER_LOGIN,
    payload: {
      account,
      secretKey
    }
  })
}

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT
  })

  dispatch(pushRouter('/'))
}

export const createTestnetAccount = () => async (dispatch) => {
  let keypair

  dispatch(loading(true))

  try {
    keypair = await testnetAccount()
  } catch (e) {}

  if (!keypair) {
    dispatch(loading(false))
    dispatch(error(new Error('Failed to create testnet account')))
    return
  }

  const account = await server.get().loadAccount(keypair.publicKey())

  dispatch(loading(false))
  dispatch(error(null))

  dispatch({
    type: USER_LOGIN,
    payload: {
      secretKey: keypair.secret(),
      account
    }
  })
}
