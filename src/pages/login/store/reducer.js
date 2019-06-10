import * as actionTypes from './actionTypes'
import { LOGIN_BACK } from '../../../common/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    login:false,
    username:'',
    password:'',
    errorType:""
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
        default: 
            return state
    }
}