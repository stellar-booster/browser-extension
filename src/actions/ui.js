import { LOADING, ERROR, NOTIFY } from '../constants/action-types'

export const loading = payload => ({
  type: LOADING,
  payload
})

export const error = payload => ({
  type: ERROR,
  payload
})

export const notify = payload => ({
  type: NOTIFY,
  payload
})
