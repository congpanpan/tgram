import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils'
import { message } from 'antd'

const loginState = () => ({  })

export const loginResponse = handleActions({
  'request login'(state, action) {
    return { ...state, loading: true }
  },
  'receive login'(state, action) {
    // eslint-disable-next-line no-unused-vars
    const { req, res } = action.payload
    if (hasResponseError(res)) {
      message.error(res.msg, 3)
      return { ...state, loading: false }
    }
    return { data: res, loading: false }
  },
}, loginState())

