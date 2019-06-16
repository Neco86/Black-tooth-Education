import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'
import Enter from './pages/login'
import Login from './pages/login/login'
import Register from './pages/login/register'
import groupRegister from './pages/login/groupRegister'
import teacherRegister from './pages/login/teacherRegister'
import studentRegister from './pages/login/studentRegister'
import Next from './pages/login/next'
import Finish from './pages/login/finish'
import ShowError from './common/error'
import Home from './pages/home'
import News from './pages/news'
import Videos from './pages/videos'
import AddClass from './pages/class'
import ChangeClass from './pages/classChange'
import ClassPan from './pages/classPlan'
import ManageClass from './pages/classManage'
import MyChange from './pages/myChange'
import MyChangeNext from './pages/myChange/next.js'
import MyPub from './pages/myPub'
import Classify from './pages/classify'
import ClassDetail from './pages/classDetail'
import UserMy from './pages/userMy'

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <BrowserRouter>
            <Route path='/' exact component={Enter}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/error/:type' exact component={ShowError}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/register/group' exact component={groupRegister}></Route>
            <Route path='/register/teacher' exact component={teacherRegister}></Route>
            <Route path='/register/student' exact component={studentRegister}></Route>
            <Route path='/register/next/:type' exact component={Next}></Route>
            <Route path='/register/finish/:type' exact component={Finish}></Route>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/home/news/:itemKey' exact component={News}></Route>
            <Route path='/home/video/:itemKey' exact component={Videos}></Route>
            <Route path='/home/addClass' exact component={AddClass}></Route>
            <Route path='/home/classChange/:itemKey' exact component={ChangeClass}></Route>
            <Route path='/home/classPlan/:itemKey' exact component={ClassPan}></Route>
            <Route path='/home/manageClass' exact component={ManageClass}></Route>
            <Route path='/home/myChange' exact component={MyChange}></Route>
            <Route path='/home/myChange/next' exact component={MyChangeNext}></Route>
            <Route path='/home/myPub' exact component={MyPub}></Route>
            <Route path='/home/classify/:type' exact component={Classify}></Route>
            <Route path='/home/classDetail/:itemKey' exact component={ClassDetail}></Route>
            <Route path='/home/my/:type' exact component={UserMy}></Route>
        </BrowserRouter>
    </Provider>
    )
  }
}

export default App;