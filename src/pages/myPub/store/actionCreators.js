import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const editPub = ()=>({
    type:actionTypes.EDITPUB
})
export const editFinish = (data)=>({
    type:actionTypes.EDITFINISH,
    data:data
})
export const changePub = (data)=>({
    type:actionTypes.CHANGEPUB,
    data:data
})
export const addPub = ()=>({
    type:actionTypes.ADDPUB
})
export const deletePub = ()=>({
    type:actionTypes.DELETEPUB
})
export const showDelete = ()=>({
    type:actionTypes.SHOWDELETE
})
export const hideDelete = ()=>({
    type:actionTypes.HIDEDELETE
})

