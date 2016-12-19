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

      <Route path="/dataApp" component={dataApp} />
      <Route path="/dataService" component={dataService} />
      <Route path="/info" component={info} />
      <Route path="/scatteredData" component={scatteredData} />
      <Route path="/user" component={user} />
    </Route>

    <Route path="/login" component={Login} />
  </Route>
);

export default routes;
