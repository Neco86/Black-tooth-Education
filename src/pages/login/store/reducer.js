import * as actionTypes from './actionTypes'
import { LOGIN_BACK } from '../../../common/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    login:false,
    username:'',
    password:'',
    errorType:"",//error1,error2,error3,error4
    registerType:'',//group,teacher,student
    //group
    bzm:'',//标识码
    jyly:'',//教育领域
    dmdz:["01","01-1"],//店面地址
    xxdz:'',//详细地址
    lxfs:'',//联系方式
    jysll:'',//教育适龄low
    jyslh:'',//教育适龄high
    jj:'',//简介

    //teacher
    name:'',//姓名
    sex:'male',//性别
    age:'',//年龄
    //jyly教育领域
    cjnx:'',//从教年限
    //jysll
    //jyslh
    sfzh:'',//身份证号
    //jj

    //student
    //name
    //sex
    //age
    parentName:'',//家长姓名
    xkyx:'',//选课意向
    //dmdz//上课地址

    //next
    //username
    //password
    dPassword:'',
    phoneNumer:'',
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.LOGIN_CHANGE_USERNAME:
            return state.set('username',action.data)
        case actionTypes.LOGIN_CHANGE_PASSWPRD:
            return state.set('password',action.data)
        case actionTypes.HANDLELOGN:
            return state.merge({login:action.login,errorType:action.errorType})
        case LOGIN_BACK:
            return state.set('errorType',"")
        case actionTypes.GROUPREGISTER:
            return state.set('registerType','group')
        case actionTypes.TEACHERREGISTER:
            return state.set('registerType','teacher')
        case actionTypes.STUDENTREGISTER:
            return state.set('registerType','student')
        case actionTypes.CHANGEBZM:
            return state.set('bzm',action.data)
        case actionTypes.CHANGEJYLY:
            return state.set('jyly',action.data)
        case actionTypes.CHANGEDMDZ:
            return state.set('dmdz',action.data)
        case actionTypes.CHANGEXXDZ:
            return state.set('xxdz',action.data)
        case actionTypes.CHANGELXFS:
            return state.set('lxfs',action.data)
        case actionTypes.CHANGEJYSLL:
            return state.set('jysll',action.data)
        case actionTypes.CHANGEJYSLH:
            return state.set('jyslh',action.data)
        case actionTypes.CHANGEJJ:
            return state.set('jj',action.data)
        case actionTypes.CHANGENAME:
            return state.set('name',action.data)
        case actionTypes.CHANGESEX:
            return state.set('sex',action.data)
        case actionTypes.CHANGEAGE:
            return state.set('age',action.data)
        case actionTypes.CHANGECJNX:
            return state.set('cjnx',action.data)
        case actionTypes.CHANGESFZH:
            return state.set('sfzh',action.data)
        case actionTypes.CHANGEPARENTNAME:
            return state.set('parentName',action.data)
        case actionTypes.CHANGEXKYX:
            return state.set('xkyx',action.data)
        case actionTypes.CHANGEDPASSWORD:
            return state.set('dPassword',action.data)
        case actionTypes.CHANGEPHONENUMBER:
            return state.set('phoneNumer',action.data)
        default: 
            return state
    }
}