import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    addClass:false
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGEFIRST:
            return state.set('tabPage',0)
        case actionTypes.CHANGESECOND:
            return state.set('tabPage',1)
        default: 
            return state
    }
}