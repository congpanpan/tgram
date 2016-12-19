import {
  createAction,
} from 'redux-actions'
import {
  common,
} from 'api'
import {
  createAjaxAction,
} from 'utils'


export const requestLogin = createAction('request login')
export const recevieLogin = createAction('receive login')
export const fetchLogin = createAjaxAction(common.login, requestLogin, recevieLogin)

