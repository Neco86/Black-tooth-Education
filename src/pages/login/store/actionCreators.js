import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
export const changeUserName = (data)=>({
    type:actionTypes.LOGIN_CHANGE_USERNAME,
    data:data
})
export const changePassword = (data)=>({
    type:actionTypes.LOGIN_CHANGE_PASSWPRD,
    data:data
})
export const login = (username,password)=>({
    type:actionTypes.LOGIN,
    username:username,
    password:password
})
export const loginAction = (data)=>({
    type:actionTypes.HANDLELOGN,
    login:fromJS(data.login),
    errorType:fromJS(data.errorType)
})