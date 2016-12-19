import {
  createAction,
} from 'redux-actions'
import {
  house,
} from 'api'
import {
  createAjaxAction,
} from 'utils'

// 获取房屋列表的action
export const requestHouseCheckList = createAction('request houseCheck list');
export const recevieHouseCheckList = createAction('receive houseCheck list');
export const fetchHouseCheckList = createAjaxAction(
	house.houseCheckList, 
	requestHouseCheckList, 
	recevieHouseCheckList
);
// 房屋列表更新以及重置的action
export const updateHouseCheckListQuery  = createAction('update houseCheck search query', payload => payload);
export const resetHouseCheckListQuery = createAction('reset houseCheck search query');

// 获取建筑物详情的action
export const requestHouseDetail = createAction('request house detail')
export const recevieHouseDetail = createAction('receive house detail')
export const fetchHouseDetail = createAjaxAction(house.houseDetail, requestHouseDetail, recevieHouseDetail)