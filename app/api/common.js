import { ajax } from 'utils'

// export const login = ajax.fetchJSONByPost('/common/login')
export const login = ajax.fetchJSONByPost('/jcjw/sys/login')
export const staff = ajax.fetchJSONByPost('/jcjw/statistics/getLoginInfo')
export const nav = ajax.fetchJSONByPost('/jcjw/sys/menu')