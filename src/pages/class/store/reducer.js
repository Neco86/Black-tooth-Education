import * as actionTypes from './actionTypes'
import { CLASSMANAGEBACK } from '../../classManage/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    addClass:false,
    manage:false
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.HANDLEADDCLASS:
            return state.set('addClass',true)
        case actionTypes.ADDCLASSBACK:
            return state.set('addClass',false)
        case actionTypes.MANAGECLASS:
            return state.set('manage',true)
        case CLASSMANAGEBACK:
            return state.set('manage',false)
        default: 
            return state
    }
}