
import React from 'react'

import {
  Route,
  hashHistory,
  IndexRoute,
} from 'react-router'

import App from './containers/App'
import Login from './containers/App/login'
import Welcome from './pages/index/welcome'




/*基础应用 开始*/
import {
  apphouse,
} from './pages/appBase/apphouse'

import {
  apppop,
} from './pages/appBase/apppop'

import {
  province,
} from './pages/appBase/province'

import {
  visit,
} from './pages/appBase/visit'

import {
  newdata,
} from './pages/appBase/newdata'

import {
  popflow,
} from './pages/appBase/popflow'

import {
  relation,
} from './pages/appBase/relation'
/*基础应用 结束*/

import {
  dataApp,
} from './pages/dataApp'

import {
  dataService,
} from './pages/dataService'

import {
  info,
} from './pages/info'

import {
  scatteredData,
} from './pages/scatteredData'

import {
  user,
} from './pages/user'

import {
  sysList, sysPage
} from './pages/index/sys'

import {
  talkList, talkPage
} from './pages/index/talk'

import {
  logList, 
} from './pages/index/log'

import searchContent from './containers/App/search/searchContent'
import searchConverge from './containers/App/search/converge/index'

//数据应用--黄建停
import  appList  from './pages/dataApp/cards/component/appList'
import  appNative  from './pages/dataApp/cards/component/appNative'
import  appModel  from './pages/dataApp/cards/component/appModel'
import  addNewModel  from './pages/dataApp/cards/component/addNewModel'
import  addNewNative  from './pages/dataApp/cards/component/addNewNative'
import  appAttribute  from './pages/dataApp/cards/component/appAttribute'

/*进入路由的判断*/
window.loginFlag = true
function isLogin(){
  /*const token = sessionStorage.getItem('token')
  // console.log(token)
  if(!token){
    hashHistory.push('/login')
  } else {
    if(loginFlag == true){
      // hashHistory.push('/')
    }
    loginFlag = false
  }*/
}

const routes = (
  <Route>
    <Route path="/" component={App} onEnter={isLogin}>
      <IndexRoute component={Welcome}/>


      {/***基础应用 开始*/}
      <Route path="/apphouse" component={apphouse} />
      <Route path="/apppop" component={apppop} />
      <Route path="/province" component={province} />
      <Route path="/visit" component={visit} />
      <Route path="/newdata" component={newdata} />
      <Route path="/popflow" component={popflow} />
      <Route path="/relation" component={relation} />
      {/***基础应用 结束*/}

      
      {/*数据应用-更多--黄建停*/}
      <Route path="/dataApp" component={dataApp} />
      <Route path="/dataApp/appList" component={appList} />
      <Route path="/dataApp/appNative" component={appNative} />
      <Route path="/dataApp/appModel" component={appModel} />
      <Route path="/dataApp/addNewModel" component={addNewModel} />
      <Route path="/dataApp/addNewNative" component={addNewNative} />
      <Route path="/dataApp/appAttribute" component={appAttribute} />

      <Route path="/dataService" component={dataService} />
      <Route path="/info" component={info} />
      <Route path="/scatteredData" component={scatteredData} />
      <Route path="/user" component={user} />

      <Route path="/index" component={Welcome} />
      <Route path="/sysList" component={sysList} />
      <Route path="/sysPage/:pageId" component={sysPage} />
      <Route path="/talkList" component={talkList} />
      <Route path="/talkPage/:pageId" component={talkPage} />
      <Route path="/logList" component={logList} />

      <Route path="/searchContent/:value" component={searchContent} />
      <Route path="/searchConverge/:value" component={searchConverge} />
    </Route>

    <Route path="/login" component={Login} />
  </Route>
);

export default routes
