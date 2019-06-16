import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const handleApply = ()=>({
    type:actionTypes.HANDLEAPPLY,
})
export const handleCancelApply = ()=>({
    type:actionTypes.HANDLECANCELAPPLY,
})
export const handleBack = ()=>({
    type:actionTypes.HANDLEBACK,
})
export const handleBuy = ()=>({
    type:actionTypes.HANDLEBUY,
})
export const handleBought = ()=>({
    type:actionTypes.HANDLEBOUGHT,
})
export const handleBackHome = ()=>({
    type:actionTypes.HANDLEBACKHOME,
})
export const handleScore = ()=>({
    type:actionTypes.HANDLESCORE,
})
export const handleScoreBack = ()=>({
    type:actionTypes.HANDLESCOREBACK,
})
export const handleType1 = ()=>({
    type:actionTypes.HANDLETYPE1,
})
export const handleType2 = ()=>({
    type:actionTypes.HANDLETYPE2,
})
export const handleType3 = ()=>({
    type:actionTypes.HANDLETYPE3,
})
export const showScheme = ()=>({
    type:actionTypes.SHOWSCHEMA,
})
export const closeSchema= ()=>({
    type:actionTypes.CLOSESCHEMA
})
