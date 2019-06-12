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
    loginType:fromJS(data.loginType)
})
export const groupRegister=()=>({
    type:actionTypes.GROUPREGISTER
})
export const teacherRegister=()=>({
    type:actionTypes.TEACHERREGISTER
})
export const studentRegister=()=>({
    type:actionTypes.STUDENTREGISTER
})
export const changeBzm=(data)=>({
    type:actionTypes.CHANGEBZM,
    data:data
})
export const changeJyly=(data)=>({
    type:actionTypes.CHANGEJYLY,
    data:data
})
export const changeDmdz=(data)=>({
    type:actionTypes.CHANGEDMDZ,
    data:data
})
export const changeXxdz=(data)=>({
    type:actionTypes.CHANGEXXDZ,
    data:data
})
export const changeLxfs=(data)=>({
    type:actionTypes.CHANGELXFS,
    data:data
})
export const changeJysll=(data)=>({
    type:actionTypes.CHANGEJYSLL,
    data:data
})
export const changeJyslh=(data)=>({
    type:actionTypes.CHANGEJYSLH,
    data:data
})
export const changeJj=(data)=>({
    type:actionTypes.CHANGEJJ,
    data:data
})
export const changeName=(data)=>({
    type:actionTypes.CHANGENAME,
    data:data
})
export const changeAge=(data)=>({
    type:actionTypes.CHANGEAGE,
    data:data
})
export const changeSex=(data)=>({
    type:actionTypes.CHANGESEX,
    data:data
})
export const changeCjnx=(data)=>({
    type:actionTypes.CHANGECJNX,
    data:data
})
export const changeSfzh=(data)=>({
    type:actionTypes.CHANGESFZH,
    data:data
})
export const changeParentName=(data)=>({
    type:actionTypes.CHANGEPARENTNAME,
    data:data
})
export const changeXkyx=(data)=>({
    type:actionTypes.CHANGEXKYX,
    data:data
})
export const changeDPassword=(data)=>({
    type:actionTypes.CHANGEDPASSWORD,
    data:data
})
export const changePhoneNumber=(data)=>({
    type:actionTypes.CHANGEPHONENUMBER,
    data:data
})